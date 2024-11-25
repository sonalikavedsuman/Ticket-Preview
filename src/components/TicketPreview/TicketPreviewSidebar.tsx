"use client";
import React from "react";
import Image from "next/image";
import { Ticket, Home } from "lucide-react";
import { Button } from "../ui/button";

interface TicketProps {
  setActivePage: (page: string) => void; // Explicitly typing the prop
}

const TicketPreviewSidebar: React.FC<TicketProps> = ({ setActivePage }) => {
  return (
    
      <div className="bg-gray-200">
      <Image
        src="/Images/logo1.jpg"
        alt="logo"
        width="80"
        height="50"
        className="ml-6"
      />
      
      <div className="ml-5">
        <Button
          variant="ghost"
          className="w-60 flex flex-row justify-start rounded-full mb-4"
          onClick={() => setActivePage("Home")}
        >
          <Home className="text-pink-700 fill-pink-700" />
          <p className="text-black font-bold">Home</p>
        </Button>
        <Button
          variant="ghost"
          className="w-60 flex flex-row justify-start rounded-full mb-4"
          onClick={() => setActivePage("Ticket")}
        >
          <Ticket className="text-blue-500 fill-blue-500" />
          <p className="text-blue-400 font-bold">Ticket Preview</p>
        </Button>
      </div>
    </div>
    
   
  );
};

export default TicketPreviewSidebar;
