import React, { useState, useEffect, useRef } from "react";
import {
  format,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  addWeeks,
  subWeeks,
  setHours,
  eachHourOfInterval,
} from "date-fns";
import { pl } from "date-fns/locale";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PencilIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../contexts/firebase-config";

// Modal komponent dla edycji wizyty
const EditAppointmentModal = ({ appointment, onClose, onSave, updating }) => {
  const [formData, setFormData] = useState({
    price: appointment?.price || "",
    depositPaid: appointment?.depositPaid || false,
    paymentStatus: appointment?.paymentStatus || "unpaid",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-4 shadow-xl">
        <div className="flex justify-between items-center mb-4 pb-2 border-b">
          <h3 className="text-lg font-semibold">Edytuj wizytę</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-4">
          <p className="font-medium">{appointment?.client}</p>
          <p className="text-sm text-gray-600">{appointment?.serviceDetails}</p>
          <p className="text-xs text-gray-500 mt-1">
            {appointment?.startTime} - {appointment?.endTime}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cena (zł)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black text-sm"
              disabled={updating}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status płatności
            </label>
            <select
              name="paymentStatus"
              value={formData.paymentStatus}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black text-sm"
              disabled={updating}
            >
              <option value="unpaid">Nie opłacone</option>
              <option value="cash">Gotówka</option>
              <option value="transfer">Przelew</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="depositPaid"
              name="depositPaid"
              checked={formData.depositPaid}
              onChange={handleChange}
              className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              disabled={updating}
            />
            <label
              htmlFor="depositPaid"
              className="ml-2 block text-sm font-medium text-gray-700"
            >
              Zadatek opłacony
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-6 pt-4 border-t">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
            disabled={updating}
          >
            Anuluj
          </button>
          <button
            type="button"
            onClick={() => onSave(formData)}
            className="px-4 py-2 text-sm rounded-md text-white bg-black hover:bg-gray-800"
            disabled={updating}
          >
            {updating ? "Zapisywanie..." : "Zapisz"}
          </button>
        </div>
      </div>
    </div>
  );
};

const DashboardHome = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [showDayView, setShowDayView] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Stan dla edycji wizyty
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [updating, setUpdating] = useState(false);

  // Referencja do kontenera godzin
  const hoursContainerRef = useRef(null);

  // Pobieranie wizyt z Firebase dla bieżącego tygodnia
  useEffect(() => {
    const fetchAppointmentsForWeek = async () => {
      try {
        setLoading(true);

        // Określenie zakresu dat dla bieżącego tygodnia
        const startDate = startOfWeek(currentDate, { weekStartsOn: 1 });
        const endDate = endOfWeek(currentDate, { weekStartsOn: 1 });

        // Formatowanie dat do formatu YYYY-MM-DD
        const startDateStr = format(startDate, "yyyy-MM-dd");
        const endDateStr = format(endDate, "yyyy-MM-dd");

        // Zapytanie do Firestore
        const appointmentsQuery = query(
          collection(db, "appointments"),
          where("date", ">=", startDateStr),
          where("date", "<=", endDateStr)
        );

        const querySnapshot = await getDocs(appointmentsQuery);

        // Przetwarzanie wyników zapytania
        const appointmentsData = [];
        querySnapshot.forEach((doc) => {
          appointmentsData.push({
            id: doc.id,
            ...doc.data(),
            // Mapowanie danych z Firestore na format używany w komponencie
            client:
              doc.data().clientName ||
              doc.data().clientInstagramName ||
              "Klient bez nazwy",
            service: doc.data().serviceDetails,
            type: doc.data().serviceType,
            startTime: doc.data().startTime,
            endTime: doc.data().endTime,
          });
        });

        setAppointments(appointmentsData);
      } catch (err) {
        console.error("Błąd podczas pobierania wizyt:", err);
        setError("Nie udało się pobrać wizyt. Spróbuj ponownie później.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointmentsForWeek();
  }, [currentDate]);

  const onDayClick = (day) => {
    setSelectedDay(day);
    setShowDayView(true);
  };

  const backToWeekView = () => {
    setShowDayView(false);
  };

  const nextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  const prevWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  // Funkcja edycji wizyty
  const handleEditClick = (appointment) => {
    setEditingAppointment(appointment);
    setShowEditModal(true);
  };

  // Zapisywanie zmian w wizycie
  const handleEditSave = async (formData) => {
    if (!editingAppointment) return;

    try {
      setUpdating(true);

      // Aktualizacja w bazie danych
      const appointmentRef = doc(db, "appointments", editingAppointment.id);
      await updateDoc(appointmentRef, {
        price: parseFloat(formData.price),
        depositPaid: formData.depositPaid,
        paymentStatus: formData.paymentStatus,
        updatedAt: Timestamp.now(),
      });

      // Aktualizacja stanu lokalnego
      setAppointments((prev) =>
        prev.map((apt) =>
          apt.id === editingAppointment.id
            ? {
                ...apt,
                price: parseFloat(formData.price),
                depositPaid: formData.depositPaid,
                paymentStatus: formData.paymentStatus,
              }
            : apt
        )
      );

      // Zamknij modal edycji
      setShowEditModal(false);
      setEditingAppointment(null);
    } catch (err) {
      console.error("Błąd podczas aktualizacji wizyty:", err);
      alert("Nie udało się zaktualizować wizyty. Spróbuj ponownie.");
    } finally {
      setUpdating(false);
    }
  };

  // Anulowanie edycji
  const handleEditCancel = () => {
    setShowEditModal(false);
    setEditingAppointment(null);
  };

  // Pobierz wizyty dla konkretnego dnia
  const getAppointmentsForDay = (day) => {
    const dateStr = format(day, "yyyy-MM-dd");
    return appointments.filter((appointment) => appointment.date === dateStr);
  };

  // Sortowanie wizyt według godziny rozpoczęcia
  const sortAppointmentsByTime = (appointments) => {
    return [...appointments].sort((a, b) => {
      return a.startTime.localeCompare(b.startTime);
    });
  };

  // Render nagłówka kalendarza z nawigacją tygodniową
  const renderWeekHeader = () => {
    const startDate = startOfWeek(currentDate, { weekStartsOn: 1 });
    const endDate = endOfWeek(currentDate, { weekStartsOn: 1 });

    return (
      <div className="flex items-center justify-between py-2">
        <button
          onClick={prevWeek}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
        </button>
        <h2 className="text-sm font-medium text-gray-900">
          {format(startDate, "d MMM", { locale: pl })} -{" "}
          {format(endDate, "d MMM yyyy", { locale: pl })}
        </h2>
        <button
          onClick={nextWeek}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    );
  };

  // Renderowanie dni tygodnia jako przycisków
  const renderDayButtons = () => {
    const days = [];
    const startDate = startOfWeek(currentDate, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
      const day = addDays(startDate, i);
      const dayAppointments = getAppointmentsForDay(day);
      const isToday = isSameDay(day, new Date());

      // Liczba wizyt według typu
      const tattooCount = dayAppointments.filter(
        (a) => a.serviceType === "tattoo"
      ).length;
      const piercingCount = dayAppointments.filter(
        (a) => a.serviceType === "piercing"
      ).length;

      days.push(
        <button
          key={i}
          className={`flex flex-col items-center p-2 ${
            isToday ? "bg-blue-50 rounded-md" : ""
          }`}
          onClick={() => onDayClick(day)}
        >
          <div className="text-xs font-medium capitalize">
            {format(day, "EEE", { locale: pl })}
          </div>
          <div className="text-base font-bold">
            {format(day, "d", { locale: pl })}
          </div>
          {dayAppointments.length > 0 && (
            <div className="flex flex-row gap-1 mt-1 justify-center">
              {tattooCount > 0 && (
                <div className="text-xs px-1 rounded bg-green-100 text-green-800">
                  {tattooCount}
                </div>
              )}
              {piercingCount > 0 && (
                <div className="text-xs px-1 rounded bg-purple-100 text-purple-800">
                  {piercingCount}
                </div>
              )}
            </div>
          )}
        </button>
      );
    }

    return (
      <div className="grid grid-cols-7 gap-1 border-b pb-2 mb-2">{days}</div>
    );
  };

  // Renderowanie nagłówka widoku dnia
  const renderDayHeader = () => {
    return (
      <div className="flex items-center mb-2">
        <button
          onClick={backToWeekView}
          className="p-1 mr-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
        </button>
        <h2 className="text-base font-medium capitalize">
          {format(selectedDay, "EEEE, d MMMM yyyy", { locale: pl })}
        </h2>
      </div>
    );
  };

  // Renderowanie wizyt dla wybranego dnia
  const renderDayAppointments = () => {
    const dayAppointments = getAppointmentsForDay(selectedDay);
    const sortedAppointments = sortAppointmentsByTime(dayAppointments);

    if (loading) {
      return (
        <div className="text-center py-8 text-gray-500">Ładowanie wizyt...</div>
      );
    }

    if (error) {
      return <div className="text-center py-8 text-red-500">{error}</div>;
    }

    if (sortedAppointments.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          Brak wizyt na ten dzień
        </div>
      );
    }

    // Godziny pracy
    const workdayStart = 9; // 9:00
    const workdayEnd = 19; // 19:00
    const dayStart = setHours(new Date(), workdayStart);
    const dayEnd = setHours(new Date(), workdayEnd);
    const hours = eachHourOfInterval({ start: dayStart, end: dayEnd });

    return (
      <div className="relative" ref={hoursContainerRef}>
        {/* Siatka godzin */}
        <div className="grid grid-cols-[48px_1fr] divide-y">
          {hours.map((hour, index) => (
            <React.Fragment key={index}>
              <div className="py-3 text-right pr-2 text-sm text-gray-500 font-medium">
                {format(hour, "HH:00")}
              </div>
              <div className="h-16 py-1"></div>
            </React.Fragment>
          ))}
        </div>

        {/* Dynamicznie umieszczone bloki wizyt */}
        <div className="absolute inset-0 grid grid-cols-[48px_1fr] pointer-events-none">
          <div></div> {/* Kolumna godzin */}
          <div className="relative">
            {sortedAppointments.map((appointment) => {
              // Oblicz pozycję i wysokość bloku wizyty
              const [startHour, startMinute] = appointment.startTime
                .split(":")
                .map(Number);
              const [endHour, endMinute] = appointment.endTime
                .split(":")
                .map(Number);

              // Pozycja od góry (względem początku dnia pracy)
              const startPosition =
                (startHour - workdayStart) * 64 + (startMinute / 60) * 64;

              // Wysokość bloku (1 godzina = 64px)
              const durationInHours =
                endHour - startHour + (endMinute - startMinute) / 60;
              const blockHeight = durationInHours * 64;

              // Styl dla bloku wizyty
              const blockStyle = {
                top: `${startPosition}px`,
                height: `${blockHeight}px`,
                left: "4px",
                right: "4px",
              };

              // Klasy dla bloku wizyty
              const blockClasses = `absolute rounded-lg p-2 shadow-sm border-l-4 text-sm pointer-events-auto ${
                appointment.serviceType === "tattoo"
                  ? "bg-green-50 border-green-500"
                  : "bg-purple-50 border-purple-500"
              }`;

              return (
                <div
                  key={appointment.id}
                  className={blockClasses}
                  style={blockStyle}
                >
                  <div className="flex justify-between items-start">
                    <div className="font-medium">{appointment.client}</div>
                    <button
                      onClick={() => handleEditClick(appointment)}
                      className="text-gray-500 hover:text-gray-700 p-1"
                      title="Edytuj"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </button>
                  </div>

                  <div>{appointment.serviceDetails}</div>

                  <div className="mt-1 flex items-center justify-between text-xs">
                    <span className="text-gray-500">
                      {appointment.startTime} - {appointment.endTime}
                    </span>

                    {appointment.price && (
                      <span className="font-medium">
                        {appointment.price} zł
                      </span>
                    )}
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-1">
                    {renderPaymentStatus(appointment)}
                    {renderDepositStatus(appointment)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-3">
      <div className="mb-3">
        <h1 className="text-lg font-bold text-gray-900">Harmonogram Wizyt</h1>
      </div>

      {showDayView ? (
        <>
          {renderDayHeader()}
          <div className="overflow-y-auto max-h-[calc(100vh-150px)]">
            {renderDayAppointments()}
          </div>
        </>
      ) : (
        <>
          {renderWeekHeader()}
          {renderDayButtons()}
          {loading ? (
            <div className="p-4 text-center text-gray-500">
              Ładowanie wizyt...
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              Wybierz dzień, aby zobaczyć szczegóły wizyt
            </div>
          )}
        </>
      )}

      <div className="mt-3 flex flex-wrap gap-3">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-50 border-l-4 border-green-500 mr-1"></div>
          <span className="text-xs">Tatuaż</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-50 border-l-4 border-purple-500 mr-1"></div>
          <span className="text-xs">Piercing</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-100 mr-1"></div>
          <span className="text-xs">Gotówka</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-100 mr-1"></div>
          <span className="text-xs">Przelew</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-100 mr-1"></div>
          <span className="text-xs">Nieopłacone</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-yellow-100 mr-1"></div>
          <span className="text-xs">Zadatek</span>
        </div>
      </div>

      {/* Modal edycji */}
      {showEditModal && editingAppointment && (
        <EditAppointmentModal
          appointment={editingAppointment}
          onClose={handleEditCancel}
          onSave={handleEditSave}
          updating={updating}
        />
      )}
    </div>
  );
};

// Funkcja do renderowania statusu płatności
const renderPaymentStatus = (appointment) => {
  let statusColor;
  let statusText;

  switch (appointment.paymentStatus) {
    case "cash":
      statusColor = "bg-green-100 text-green-800";
      statusText = "Gotówka";
      break;
    case "transfer":
      statusColor = "bg-blue-100 text-blue-800";
      statusText = "Przelew";
      break;
    default:
      statusColor = "bg-red-100 text-red-800";
      statusText = "Nie opłacono";
  }

  return (
    <span className={`text-xs px-1.5 py-0.5 rounded ${statusColor}`}>
      {statusText}
    </span>
  );
};

// Funkcja do renderowania statusu zadatku
const renderDepositStatus = (appointment) => {
  if (appointment.depositPaid) {
    return (
      <span className="text-xs px-1.5 py-0.5 rounded bg-yellow-100 text-yellow-800">
        Zadatek
      </span>
    );
  }
  return null;
};

export default DashboardHome;
