"use client"
import React, { useState } from "react";
import HomeSideBar from "./HomeSideBar";
import HomeMain from "./HomeMain";
import DashboardMain from "../Dashboard/DashboardMain";
import TicketPreviewMain from "../TicketPreview/TicketPreviewMain";


const HomePage = () => {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar */}
      <div className="mr-10 bg-gray-200 w-1/5">
        <HomeSideBar setActivePage={setActivePage} />
      </div>

      {/* Main Content */}
      <div className="w-4/5">
        {activePage === "Home" && <HomeMain />}
        {activePage === "Dashboard" && <DashboardMain />}

        {activePage === "Ticket" && <div><TicketPreviewMain/></div>}
       
      </div>
    </div>
  );
};

export default HomePage;
