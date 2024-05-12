import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCorbado, useCorbadoSession } from "@corbado/react";
import Card from "../component/Card";
import BarChart from "../component/charts/BarChart";
import LineChart from "../component/charts/LineChart";
import DonutChart from "../component/charts/DonutChart";
import ScatterChart from "../component/charts/ScatterChart";

export default function Dashboard() {
  const { isAuthenticated, loading, logout } = useCorbado();
  const { user } = useCorbadoSession();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Redirect to the authentication page if not authenticated
  useEffect(() => {
    if (!isAuthenticated && !loading) {
      navigate("/auth");
    }
  }, [isAuthenticated, loading, navigate]);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle clicks outside the dropdown
  const handleClickOutside = (event: any) => {
    event.preventDefault();
    if (
      dropdownRef.current &&
      !(dropdownRef.current as HTMLElement).contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSettingsClick = () => {
    navigate("/settings");
  };
  const home = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-[#4b8fff] shadow">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="cursor-pointer " onClick={home}>
              <img src="/images/card.png" alt="logo.png" />
            </div>
            <div className="flex">
              <div
                className="flex-shrink-0 flex items-center relative"
                onClick={toggleDropdown}
                ref={dropdownRef}
              >
                <img
                  className="h-8 w-8 rounded-full bg-white cursor-pointer"
                  src={"/images/user.png"}
                  alt={user?.name || "Profile"}
                  loading="lazy"
                />
                {isDropdownOpen && (
                  <div className="absolute bg-white shadow-md rounded-md py-4 px-4 top-16 -left-16">
                    <p className="text-sm text-gray-800">
                      <span className="font-bold">User: </span>
                      {user && user.name}
                    </p>
                    <button
                      onClick={handleSettingsClick}
                      className="text-sm text-gray-800 hover:text-sky-800 mt-2 cursor-pointer"
                    >
                      Settings
                    </button>
                    <button
                      onClick={logout}
                      className="bg-[#4b8fff] hover:bg-blue-600 text-white font-semibold px-2 py-2 rounded-lg mr-2 mt-2"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Card />
      <BarChart />
      <LineChart />
      <DonutChart />
      <ScatterChart />
    </div>
  );
}
