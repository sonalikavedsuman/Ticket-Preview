"use client"
import React from "react";
import Image from "next/image";
import { Layers, LayoutPanelLeft, FileText, Ticket, Home } from "lucide-react";
import { Button } from "../ui/button";

interface HomeProps {
  setActivePage: (page: string) => void; // Explicitly typing the prop
}

const HomePage: React.FC<HomeProps> = ({ setActivePage }) => {
  return (
    <div className="ml-5">
      <Image
        src="/Images/logo1.jpg"
        alt="logo"
        width="80"
        height="50"
        className="mb-6"
      />
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
        onClick={() => setActivePage("Dashboard")}
      >
        <LayoutPanelLeft className="text-pink-700 fill-pink-700" />
        <p className="text-black font-bold">Dashboard</p>
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
  );
};

export default HomePage;
