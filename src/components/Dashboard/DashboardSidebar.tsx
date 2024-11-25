import React from "react";
import Image from "next/image";
import { Home, Layers, LayoutPanelLeft } from "lucide-react";
import { Button } from "../ui/button";

interface DashboardProps {
  setActivePage: (page: string) => void; 
}

const DashboardSidebar: React.FC<DashboardProps> = ({ setActivePage }) => {
  return (
    <div className="bg-gray-200">
      <Image
        src="/Images/logo1.jpg"
        alt="logo"
        width="80"
        height="50"
        className="ml-5"
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
          onClick={() => setActivePage("Dashboard")}
        >
          <LayoutPanelLeft className="text-pink-700 fill-pink-700 mr-2" />
          <p className="text-black font-bold">Dashboard</p>
        </Button>
        <Button
          variant="ghost"
          className="w-60 flex flex-row justify-start rounded-full mb-4"
          onClick={() => setActivePage("AllClients")}
        >
          <Layers className="text-gray-500 fill-gray-500 mr-2" />
          <p className="text-gray-400 font-bold">All Clients</p>
        </Button>
        <Button
          variant="ghost"
          className="w-60 flex flex-row justify-start rounded-full mb-4"
          onClick={() => setActivePage("InnovativeSolutions")}
        >
          <div className="text-white bg-sky-500 rounded-full h-7 w-7 flex items-center justify-center mr-2">
            <p className="mt-1">TS</p>
          </div>
          <p className="text-gray-400 font-bold">TechInnovate Solutions</p>
        </Button>
        <Button
          variant="ghost"
          className="w-60 flex flex-row justify-start rounded-full"
          onClick={() => setActivePage("EcoFusion")}
        >
          <div className="text-slate-500 bg-white rounded-full h-7 w-7 flex items-center justify-center mr-2">
            <p className="font-extralight text-[7px]">ecofusion</p>
          </div>
          <p className="text-gray-400 font-bold">EcoFusion Innovations</p>
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
