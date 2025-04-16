import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

const PaymentsView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // eslint-disable-next-line no-unused-vars
  const [payments, setPayments] = useState([
    {
      id: 1,
      client: "Anna Kowalska",
      service: "Tatuaż - ręka",
      date: "15.03.2025",
      amount: 650,
      deposit: 200,
      status: "paid", // paid, pending, deposit
      method: "cash", // cash, transfer
    },
    {
      id: 2,
      client: "Jan Nowak",
      service: "Piercing - brew",
      date: "02.04.2025",
      amount: 150,
      deposit: 50,
      status: "deposit",
      method: "transfer",
    },
    {
      id: 3,
      client: "Karolina Wiśniewska",
      service: "Tatuaż - plecy",
      date: "21.03.2025",
      amount: 1200,
      deposit: 300,
      status: "pending",
      method: "transfer",
    },
    {
      id: 4,
      client: "Michał Wójcik",
      service: "Piercing - nos",
      date: "25.03.2025",
      amount: 120,
      deposit: 0,
      status: "paid",
      method: "cash",
    },
  ]);

  // Filtrowanie płatności na podstawie wyszukiwania i statusu
  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.service.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === "all" || payment.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  // Funkcja do renderowania statusu płatności
  const renderStatus = (status) => {
    switch (status) {
      case "paid":
        return (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Opłacone
          </span>
        );
      case "pending":
        return (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Oczekujące
          </span>
        );
      case "deposit":
        return (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            Zadatek
          </span>
        );
      default:
        return null;
    }
  };

  // Obliczanie sum dla podsumowania
  const totalAmount = filteredPayments.reduce(
    (sum, payment) => sum + payment.amount,
    0
  );
  const totalPaid = filteredPayments
    .filter((p) => p.status === "paid")
    .reduce((sum, payment) => sum + payment.amount, 0);
  const totalDeposits = filteredPayments
    .filter((p) => p.status === "deposit")
    .reduce((sum, payment) => sum + payment.deposit, 0);
  const totalCash = filteredPayments
    .filter((p) => p.method === "cash" && p.status === "paid")
    .reduce((sum, payment) => sum + payment.amount, 0);
  const totalTransfer = filteredPayments
    .filter((p) => p.method === "transfer" && p.status === "paid")
    .reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div>
      {/* Karty podsumowania */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-medium text-gray-500">Łączna wartość</h3>
          <p className="text-2xl font-semibold text-gray-900">
            {totalAmount} zł
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-medium text-gray-500">Opłacone</h3>
          <p className="text-2xl font-semibold text-green-600">
            {totalPaid} zł
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-medium text-gray-500">Zadatki</h3>
          <p className="text-2xl font-semibold text-yellow-600">
            {totalDeposits} zł
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-medium text-gray-500">Gotówka</h3>
          <p className="text-2xl font-semibold text-gray-900">{totalCash} zł</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-medium text-gray-500">Przelewy</h3>
          <p className="text-2xl font-semibold text-gray-900">
            {totalTransfer} zł
          </p>
        </div>
      </div>

      {/* Główna tabela płatności */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
              Płatności
            </h1>
            <div className="flex flex-col sm:flex-row w-full md:w-auto space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Szukaj płatności..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="relative">
                <select
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none bg-white w-full"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">Wszystkie statusy</option>
                  <option value="paid">Opłacone</option>
                  <option value="pending">Oczekujące</option>
                  <option value="deposit">Zadatek</option>
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FunnelIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>

              <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 flex items-center justify-center">
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" /> Eksportuj
              </button>
            </div>
          </div>

          {/* Lista płatności */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Klient
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Usługa
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Data
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Kwota
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Zadatek
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Metoda
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
                {filteredPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {payment.client}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {payment.service}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {payment.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {payment.amount} zł
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {payment.deposit} zł
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {renderStatus(payment.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.method === "cash" ? "Gotówka" : "Przelew"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        className={`text-white px-2 py-1 rounded-md text-xs ${
                          payment.status === "paid"
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700"
                        }`}
                        disabled={payment.status === "paid"}
                      >
                        {payment.status === "deposit"
                          ? "Opłać resztę"
                          : "Oznacz jako opłacone"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pusta lista */}
          {filteredPayments.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">
                Nie znaleziono żadnych płatności.
              </p>
              <p className="text-gray-400 mt-2">
                Spróbuj zmienić kryteria wyszukiwania.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentsView;
