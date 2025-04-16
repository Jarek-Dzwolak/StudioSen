import React, { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  CalendarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../img/Logo.png";
import AddAppointmentForm from "./AddAppointmentForm";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Błąd podczas wylogowywania:", error);
    }
  };

  // Funkcja otwierająca/zamykająca formularz dodawania wizyt
  const toggleAddForm = () => {
    setIsAddFormOpen(!isAddFormOpen);
  };

  // Obsługa dodawania wizyty
  const handleAddAppointment = (appointmentData) => {
    console.log("Dodano nową wizytę:", appointmentData);
    // Tutaj będzie kod do zapisania wizyty w bazie danych
    setIsAddFormOpen(false); // Zamknij formularz po dodaniu
  };

  // Nawigacja
  const navigation = [
    {
      name: "Dodaj wizytę",
      href: "#",
      icon: PlusIcon,
      onClick: toggleAddForm,
      highlight: true,
    },
    { name: "Kalendarz", href: "/dashboard", icon: CalendarIcon },
    { name: "Klienci", href: "/dashboard/clients", icon: UserGroupIcon },
    {
      name: "Płatności",
      href: "/dashboard/payments",
      icon: CurrencyDollarIcon,
    },
    { name: "Raporty", href: "/dashboard/reports", icon: ChartBarIcon },
  ];

  // Sprawdzenie czy link jest aktywny
  const isActive = (path) => {
    if (path === "/dashboard" && location.pathname === "/dashboard") {
      return true;
    }
    if (path !== "/dashboard" && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          onClick={() => setSidebarOpen(false)}
        ></div>

        <div className="fixed inset-0 flex z-40">
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Zamknij menu</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>

            {/* Sidebar content */}
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <img className="h-12 w-auto" src={Logo} alt="Studio Sen" />
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {navigation.map((item) =>
                  item.onClick ? (
                    <button
                      key={item.name}
                      onClick={() => {
                        setSidebarOpen(false);
                        item.onClick();
                      }}
                      className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                        item.highlight
                          ? "text-white bg-black hover:bg-gray-800"
                          : "text-gray-900 hover:bg-gray-100"
                      } w-full text-left`}
                    >
                      <item.icon
                        className={`mr-4 h-6 w-6 ${
                          item.highlight ? "text-white" : "text-gray-500"
                        }`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                        isActive(item.href)
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-900 hover:bg-gray-100"
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon
                        className="mr-4 h-6 w-6 text-gray-500"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  )
                )}
              </nav>
            </div>

            {/* User info mobile */}
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div>
                    {currentUser?.photoURL ? (
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src={currentUser.photoURL}
                        alt=""
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                        {currentUser?.displayName?.charAt(0) || "U"}
                      </div>
                    )}
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                      {currentUser?.displayName || "Użytkownik"}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="text-sm font-medium text-gray-500 group-hover:text-gray-700 flex items-center"
                    >
                      Wyloguj się
                      <ArrowRightOnRectangleIcon className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img className="h-12 w-auto" src={Logo} alt="Studio Sen" />
              <span className="ml-2 text-xl font-semibold">Panel</span>
            </div>
            <nav className="mt-8 flex-1 px-2 space-y-1">
              {navigation.map((item) =>
                item.onClick ? (
                  <button
                    key={item.name}
                    onClick={item.onClick}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      item.highlight
                        ? "text-white bg-black hover:bg-gray-800"
                        : "text-gray-900 hover:bg-gray-100"
                    } w-full text-left`}
                  >
                    <item.icon
                      className={`mr-3 h-6 w-6 ${
                        item.highlight ? "text-white" : "text-gray-500"
                      }`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive(item.href)
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon
                      className="mr-3 h-6 w-6 text-gray-500"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* User info desktop */}
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div>
                  {currentUser?.photoURL ? (
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src={currentUser.photoURL}
                      alt=""
                    />
                  ) : (
                    <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                      {currentUser?.displayName?.charAt(0) || "U"}
                    </div>
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 truncate max-w-[140px]">
                    {currentUser?.displayName || "Użytkownik"}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="text-xs font-medium text-gray-500 group-hover:text-gray-700 flex items-center"
                  >
                    Wyloguj się
                    <ArrowRightOnRectangleIcon className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col">
        {/* Top navbar */}
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 text-gray-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Otwórz menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Studio Sen - System Zarządzania
              </h1>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              {/* User dropdown can be added here if needed */}
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>

      {/* Formularz dodawania wizyty */}
      {isAddFormOpen && (
        <AddAppointmentForm
          onClose={toggleAddForm}
          onSubmit={handleAddAppointment}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
