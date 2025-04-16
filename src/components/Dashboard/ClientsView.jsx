import React, { useState } from "react";
import {
  PlusIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  EnvelopeIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

const ClientsView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Anna Kowalska",
      email: "anna.kowalska@example.com",
      phone: "500 123 456",
      serviceType: "Tatuaż",
      lastVisit: "15.03.2025",
    },
    {
      id: 2,
      name: "Jan Nowak",
      email: "jan.nowak@example.com",
      phone: "600 789 123",
      serviceType: "Piercing",
      lastVisit: "02.04.2025",
    },
    {
      id: 3,
      name: "Karolina Wiśniewska",
      email: "karolina.wisniewska@example.com",
      phone: "700 456 789",
      serviceType: "Tatuaż",
      lastVisit: "21.03.2025",
    },
  ]);

  // Filtrowanie klientów na podstawie wyszukiwania
  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.includes(searchTerm)
  );

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
            Klienci
          </h1>
          <div className="flex flex-col sm:flex-row w-full md:w-auto space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Szukaj klienta..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 flex items-center justify-center">
              <PlusIcon className="h-5 w-5 mr-2" /> Dodaj klienta
            </button>
          </div>
        </div>

        {/* Lista klientów */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Imię i nazwisko
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Kontakt
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Typ usługi
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ostatnia wizyta
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Akcje
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {client.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <div className="text-sm text-gray-500 flex items-center">
                        <EnvelopeIcon className="h-4 w-4 mr-1" /> {client.email}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <PhoneIcon className="h-4 w-4 mr-1" /> {client.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        client.serviceType === "Tatuaż"
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {client.serviceType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {client.lastVisit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-gray-600 hover:text-gray-900 mr-3">
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <PlusIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pusta lista */}
        {filteredClients.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">
              Nie znaleziono żadnych klientów.
            </p>
            {searchTerm ? (
              <p className="text-gray-400 mt-2">
                Spróbuj zmienić kryteria wyszukiwania.
              </p>
            ) : (
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 inline-flex items-center">
                <PlusIcon className="h-5 w-5 mr-2" /> Dodaj pierwszego klienta
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientsView;
