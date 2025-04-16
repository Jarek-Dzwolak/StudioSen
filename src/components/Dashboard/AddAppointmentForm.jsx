import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  Timestamp,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../contexts/firebase-config";

const AddAppointmentForm = ({ onClose, onSubmit, existingClient = null }) => {
  const today = new Date().toISOString().split("T")[0];
  const [loading, setLoading] = useState(false);

  // Stan formularza
  const [formData, setFormData] = useState({
    // Dane klienta (wymagane co najmniej jedno pole)
    instagramName: existingClient ? existingClient.instagramName || "" : "",
    clientName: existingClient ? existingClient.name || "" : "",
    clientEmail: existingClient ? existingClient.email || "" : "",
    clientPhone: existingClient ? existingClient.phone || "" : "",

    // Szczegóły usługi
    serviceType: "tattoo", // tattoo lub piercing
    serviceDetails: "",
    date: today,
    startTime: "10:00",
    endTime: "11:00", // Domyślnie 1h po startTime

    // Płatność - uproszczona
    price: "", // Wycena tatuażu - obowiązkowa
    depositPaid: false, // Czy zadatek został wpłacony
    paymentStatus: "unpaid", // unpaid, cash, transfer

    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [overlappingAppointment, setOverlappingAppointment] = useState(false);

  // Obsługa zmiany pól formularza
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => {
      const newData = {
        ...prevData,
        [name]: newValue,
      };

      // Jeśli zmieniła się godzina rozpoczęcia, automatycznie zaktualizuj godzinę zakończenia
      if (name === "startTime") {
        const [hours, minutes] = value.split(":").map(Number);
        let endHours = hours + 1;
        if (endHours > 23) endHours = 23;

        const formattedEndHours = endHours.toString().padStart(2, "0");
        const formattedEndMinutes = minutes.toString().padStart(2, "0");

        newData.endTime = `${formattedEndHours}:${formattedEndMinutes}`;
      }

      return newData;
    });

    // Usunięcie błędu dla tego pola, jeśli istnieje
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  // Obliczanie czasu trwania wizyty w minutach
  const calculateDuration = () => {
    const [startHours, startMinutes] = formData.startTime
      .split(":")
      .map(Number);
    const [endHours, endMinutes] = formData.endTime.split(":").map(Number);

    return endHours * 60 + endMinutes - (startHours * 60 + startMinutes);
  };

  // Funkcja do wyszukiwania klienta po danych kontaktowych
  const findClientByContact = async () => {
    try {
      let clientQuery;

      if (formData.instagramName) {
        clientQuery = query(
          collection(db, "clients"),
          where("instagramName", "==", formData.instagramName)
        );
      } else if (formData.clientEmail) {
        clientQuery = query(
          collection(db, "clients"),
          where("email", "==", formData.clientEmail)
        );
      } else if (formData.clientPhone) {
        clientQuery = query(
          collection(db, "clients"),
          where("phone", "==", formData.clientPhone)
        );
      } else if (formData.clientName) {
        clientQuery = query(
          collection(db, "clients"),
          where("name", "==", formData.clientName)
        );
      } else {
        return null;
      }

      const querySnapshot = await getDocs(clientQuery);

      if (querySnapshot.empty) {
        return null;
      }

      const clientDoc = querySnapshot.docs[0];
      return { id: clientDoc.id, ...clientDoc.data() };
    } catch (error) {
      console.error("Błąd podczas wyszukiwania klienta:", error);
      return null;
    }
  };

  // Funkcja do dodawania nowego klienta
  const addClient = async (clientData) => {
    try {
      const clientRef = await addDoc(collection(db, "clients"), {
        instagramName: clientData.instagramName || "",
        name: clientData.clientName || "",
        email: clientData.clientEmail || "",
        phone: clientData.clientPhone || "",
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        appointments: [],
      });

      return {
        id: clientRef.id,
        instagramName: clientData.instagramName || "",
        name: clientData.clientName || "",
        email: clientData.clientEmail || "",
        phone: clientData.clientPhone || "",
      };
    } catch (error) {
      console.error("Błąd podczas dodawania klienta:", error);
      throw error;
    }
  };

  // Sprawdzenie poprawności formularza
  const validateForm = () => {
    const newErrors = {};

    // Sprawdź, czy podano co najmniej jedno z pól identyfikujących klienta
    if (
      !formData.instagramName.trim() &&
      !formData.clientName.trim() &&
      !formData.clientEmail.trim()
    ) {
      newErrors.clientIdentifier =
        "Podaj co najmniej jedno: Nazwę na Instagramie, Imię i nazwisko lub Email";
    }

    // Sprawdź pola wymagane
    if (!formData.serviceDetails.trim()) {
      newErrors.serviceDetails = "Szczegóły usługi są wymagane";
    }

    if (!formData.startTime) {
      newErrors.startTime = "Godzina rozpoczęcia jest wymagana";
    }

    if (!formData.endTime) {
      newErrors.endTime = "Godzina zakończenia jest wymagana";
    } else if (formData.endTime <= formData.startTime) {
      newErrors.endTime =
        "Godzina zakończenia musi być późniejsza niż godzina rozpoczęcia";
    }

    // Sprawdź, czy wizyta nie koliduje z istniejącymi wizytami
    if (overlappingAppointment) {
      newErrors.timeConflict =
        "Istnieje już wizyta w tym czasie. Wybierz inny termin.";
    }

    if (!formData.price) {
      newErrors.price = "Wycena tatuażu jest wymagana";
    } else if (parseFloat(formData.price) <= 0) {
      newErrors.price = "Wycena musi być liczbą większą od zera";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Wysłanie formularza
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      try {
        // Przygotuj daty dla zapisania do Firebase
        const [year, month, day] = formData.date.split("-").map(Number);
        const [startHour, startMinute] = formData.startTime
          .split(":")
          .map(Number);
        const [endHour, endMinute] = formData.endTime.split(":").map(Number);

        const dateTimeStart = new Date(
          year,
          month - 1,
          day,
          startHour,
          startMinute
        );
        const dateTimeEnd = new Date(year, month - 1, day, endHour, endMinute);

        // Znajdź lub utwórz klienta
        let clientId = existingClient?.id;
        let clientData = existingClient;

        if (!clientId) {
          const existingClient = await findClientByContact();

          if (existingClient) {
            clientId = existingClient.id;
            clientData = existingClient;
          } else {
            // Dodaj nowego klienta
            const newClient = await addClient(formData);
            clientId = newClient.id;
            clientData = newClient;
          }
        }

        // Przygotuj dane wizyty
        const appointmentData = {
          // Dane klienta
          clientId: clientId,
          clientInstagramName: formData.instagramName || "",
          clientName: formData.clientName || "",
          clientEmail: formData.clientEmail || "",
          clientPhone: formData.clientPhone || "",

          // Szczegóły usługi
          serviceType: formData.serviceType,
          serviceDetails: formData.serviceDetails,
          date: formData.date,
          startTime: formData.startTime,
          endTime: formData.endTime,
          duration: calculateDuration(),
          dateTimeStart: Timestamp.fromDate(dateTimeStart),
          dateTimeEnd: Timestamp.fromDate(dateTimeEnd),

          // Płatność
          price: parseFloat(formData.price),
          depositPaid: formData.depositPaid,
          paymentStatus: formData.paymentStatus,

          // Dodatkowe informacje
          notes: formData.notes,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
        };

        // Dodaj wizytę do kolekcji
        const appointmentRef = await addDoc(
          collection(db, "appointments"),
          appointmentData
        );

        // Aktualizuj klienta, dodając referencję do nowej wizyty
        const clientRef = doc(db, "clients", clientId);
        const clientDoc = await getDoc(clientRef);

        if (clientDoc.exists()) {
          const currentAppointments = clientDoc.data().appointments || [];
          await updateDoc(clientRef, {
            appointments: [...currentAppointments, appointmentRef.id],
            updatedAt: Timestamp.now(),
          });
        }

        // Wywołaj funkcję callback po udanym zapisie
        onSubmit &&
          onSubmit({
            id: appointmentRef.id,
            ...appointmentData,
            client: clientData,
          });

        // Zamknij formularz
        onClose();
      } catch (error) {
        console.error("Błąd podczas zapisywania wizyty:", error);
        setErrors({
          ...errors,
          submission:
            "Wystąpił błąd podczas zapisywania wizyty. Spróbuj ponownie.",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  // Sprawdzenie nakładających się wizyt przy zmianie czasu
  const checkOverlappingAppointments = async (date, startTime, endTime) => {
    try {
      // Przygotowanie dat
      const [year, month, day] = date.split("-").map(Number);
      const [startHour, startMinute] = startTime.split(":").map(Number);
      const [endHour, endMinute] = endTime.split(":").map(Number);

      const dateTimeStart = new Date(
        year,
        month - 1,
        day,
        startHour,
        startMinute
      );
      const dateTimeEnd = new Date(year, month - 1, day, endHour, endMinute);

      // Zapytanie o wizyty w tym samym dniu
      const appointmentsQuery = query(
        collection(db, "appointments"),
        where("date", "==", date)
      );

      const querySnapshot = await getDocs(appointmentsQuery);

      // Sprawdź każdą wizytę, czy nakłada się na nowy termin
      let hasOverlap = false;

      querySnapshot.forEach((doc) => {
        const appointment = doc.data();

        // Konwersja czasów na obiekty Date dla porównania
        const apptStart = appointment.dateTimeStart.toDate();
        const apptEnd = appointment.dateTimeEnd.toDate();

        // Sprawdź nakładanie się przedziałów czasowych
        const overlaps =
          // Nowa wizyta zaczyna się podczas istniejącej wizyty
          (dateTimeStart >= apptStart && dateTimeStart < apptEnd) ||
          // Nowa wizyta kończy się podczas istniejącej wizyty
          (dateTimeEnd > apptStart && dateTimeEnd <= apptEnd) ||
          // Nowa wizyta całkowicie obejmuje istniejącą wizytę
          (dateTimeStart <= apptStart && dateTimeEnd >= apptEnd);

        if (overlaps) {
          hasOverlap = true;
        }
      });

      setOverlappingAppointment(hasOverlap);
    } catch (error) {
      console.error("Błąd podczas sprawdzania nakładających się wizyt:", error);
      // W przypadku błędu nie blokujemy użytkownika, tylko wyświetlamy ostrzeżenie
      setErrors({
        ...errors,
        timeCheck:
          "Nie można sprawdzić dostępności terminu. Sprawdź połączenie internetowe.",
      });
    }
  };

  // Zmiana czasu trwania i aktualizacja godziny zakończenia
  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    handleChange(e);

    if (name === "startTime" || name === "endTime" || name === "date") {
      const updatedFormData = {
        ...formData,
        [name]: value,
      };

      checkOverlappingAppointments(
        updatedFormData.date,
        updatedFormData.startTime,
        updatedFormData.endTime
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 z-50">
      <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            {existingClient ? "Dodaj nową wizytę" : "Nowa wizyta"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {errors.submission && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
            {errors.submission}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Sekcja danych klienta */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-base font-medium text-gray-900 mb-3">
              Dane klienta
            </h3>

            {errors.clientIdentifier && (
              <p className="text-sm text-red-600 mb-2">
                {errors.clientIdentifier}
              </p>
            )}

            <div className="space-y-3">
              <div>
                <label
                  htmlFor="instagramName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nazwa na Instagramie
                </label>
                <input
                  type="text"
                  id="instagramName"
                  name="instagramName"
                  value={formData.instagramName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  disabled={existingClient?.instagramName}
                />
              </div>

              <div>
                <label
                  htmlFor="clientName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  disabled={existingClient?.name}
                />
              </div>

              <div>
                <label
                  htmlFor="clientEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="clientEmail"
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  disabled={existingClient?.email}
                />
              </div>

              <div>
                <label
                  htmlFor="clientPhone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="clientPhone"
                  name="clientPhone"
                  value={formData.clientPhone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  disabled={existingClient?.phone}
                />
              </div>
            </div>
          </div>

          {/* Sekcja szczegółów usługi */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-base font-medium text-gray-900 mb-3">
              Szczegóły usługi
            </h3>
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Typ usługi *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                >
                  <option value="tattoo">Tatuaż</option>
                  <option value="piercing">Piercing</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="serviceDetails"
                  className="block text-sm font-medium text-gray-700"
                >
                  Opis usługi *
                </label>
                <textarea
                  id="serviceDetails"
                  name="serviceDetails"
                  rows="2"
                  value={formData.serviceDetails}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black ${
                    errors.serviceDetails ? "border-red-300" : ""
                  }`}
                  placeholder="Np. Tatuaż kwiaty, przedramię, 10x15cm"
                ></textarea>
                {errors.serviceDetails && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.serviceDetails}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Data *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  min={today}
                  onChange={handleTimeChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="startTime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Od godziny *
                  </label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleTimeChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black ${
                      errors.startTime || errors.timeConflict
                        ? "border-red-300"
                        : ""
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="endTime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Do godziny *
                  </label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleTimeChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black ${
                      errors.endTime || errors.timeConflict
                        ? "border-red-300"
                        : ""
                    }`}
                  />
                </div>
              </div>

              {(errors.startTime || errors.endTime) && (
                <p className="text-sm text-red-600">
                  {errors.startTime || errors.endTime}
                </p>
              )}

              {errors.timeConflict && (
                <p className="text-sm text-red-600">{errors.timeConflict}</p>
              )}

              {errors.timeCheck && (
                <p className="text-sm text-yellow-600">{errors.timeCheck}</p>
              )}
            </div>
          </div>

          {/* Sekcja płatności */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-base font-medium text-gray-900 mb-3">
              Płatność
            </h3>
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Wycena tatuażu (zł) *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  step="1"
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black ${
                    errors.price ? "border-red-300" : ""
                  }`}
                  placeholder="0"
                />
                {errors.price && (
                  <p className="mt-1 text-sm text-red-600">{errors.price}</p>
                )}
              </div>

              <div className="flex items-center mt-1">
                <input
                  type="checkbox"
                  id="depositPaid"
                  name="depositPaid"
                  checked={formData.depositPaid}
                  onChange={handleChange}
                  className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <label
                  htmlFor="depositPaid"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  Zadatek opłacony
                </label>
              </div>

              <div>
                <label
                  htmlFor="paymentStatus"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status płatności
                </label>
                <div className="mt-1 relative">
                  <select
                    id="paymentStatus"
                    name="paymentStatus"
                    value={formData.paymentStatus}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black pl-8"
                  >
                    <option value="unpaid">Nie opłacone</option>
                    <option value="cash">Zapłacono gotówką</option>
                    <option value="transfer">Zapłacono na konto</option>
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        formData.paymentStatus === "unpaid"
                          ? "bg-red-500"
                          : formData.paymentStatus === "cash"
                          ? "bg-green-500"
                          : "bg-blue-500"
                      }`}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notatki */}
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700"
            >
              Notatki
            </label>
            <textarea
              id="notes"
              name="notes"
              rows="2"
              value={formData.notes}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              placeholder="Dodatkowe informacje..."
            ></textarea>
          </div>

          {/* Przyciski formularza */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              disabled={loading}
            >
              Anuluj
            </button>
            <button
              type="submit"
              className="px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              disabled={loading}
            >
              {loading ? "Zapisywanie..." : "Zapisz wizytę"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAppointmentForm;
