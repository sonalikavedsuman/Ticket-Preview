"use client";
import React, { useState } from "react";
import TicketPreviewMain from "./TicketPreviewMain";
import TicketPreviewSidebar from "./TicketPreviewSidebar";
import TicketPreviewMain1 from "./TicketPreviewMain1";


const TPreview = () => {
  const [activePage, setActivePage] = useState("Ticket");

  return (
    <div className="flex flex-row h-full">
      <div className="mr-10 bg-gray-200 w-1/5">
        <TicketPreviewSidebar setActivePage={setActivePage} />
      </div>
      <div className="w-4/5">
        {activePage === "Ticket" && (
          <div>
            <TicketPreviewMain />
          </div>
        )}
        {activePage === "Ticket1" && (
          <div>
            <TicketPreviewMain1 />
          </div>
        )}
        {activePage === "Home" && <div>Home</div>}
      </div>
    </div>
  );
};

export default TPreview;
