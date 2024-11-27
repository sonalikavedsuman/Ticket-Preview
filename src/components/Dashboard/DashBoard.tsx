"use client";
import React, { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardMain from "./DashboardMain";


const Dashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="flex flex-row h-screen">
      <div className="mr-10 bg-gray-200 w-1/5">
        <DashboardSidebar setActivePage={setActivePage} />
      </div>
      <div className="w-4/5">
        {activePage === "Dashboard" && (
          <div>
            <DashboardMain />
          </div>
        )}
        {activePage === "Home" && <div>Home</div>}
        {activePage === "AllClients" && <div>All Clients</div>}
        {activePage === "InnovativeSolutions" && <div>TechInnovateSolutions</div>}
        {activePage === "EcoFusion" && <div>EcoFusion Innovations</div>}
      </div>
    </div>
  );
};

export default Dashboard;
