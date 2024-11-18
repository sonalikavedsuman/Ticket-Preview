"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Cross1Icon, DotFilledIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FlameIcon,
  ChevronDown,
  ChevronUp,
  Ticket,
  PhoneIcon,
  ChevronsUpDownIcon,
  PlusIcon,
  TicketCheckIcon,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const TicketPreview = () => {
  return (
    <div className="bg-white pt-5 pl-5">
      <div className="flex flex-row">
        <div className="flex flex-row">
          <Button
            variant="outline"
            className="bg-slate-50 border-none text-green-400 font-extrabold text-2xl "
          >
            <p>&#928;</p>
          </Button>
          <h2 className="font-bold text-xl mt-1 ml-2">Ticket Preview</h2>
        </div>

        <div className="flex flex-row">
          <Button
            variant="outline"
            className="border-black text-black ml-64 font-medium"
          >
            View Full Details
          </Button>
          <Cross1Icon className="mt-2 ml-4" />
        </div>
      </div>
      <div className="border-2 mt-5 rounded-md w-1/3">
        <div className="flex flex-row pt-3 pb-3  border-b-2 ">
          <div className="flex flex-row justify-around place-content-between">
            <p className="font-bold text-xl pl-8">#TC-196 </p>
            <p className="text-xl pl-2">Defective Item Received</p>
          </div>
          <Button
            variant="default"
            className=" bg-blue-500 rounded-[15px] h-7  ml-24"
          >
            Open
          </Button>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row">
            <div className="flex flex-col border-r-2 p-4">
              <p className="text-sm font-semibold mb-2">Ticket Type</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    className="bg-slate-100  text-black rounded-[15px] h-7"
                  >
                    <span>
                      <FlameIcon className=" font-semibold" />
                    </span>
                    <span className="capitalize font-semibold">Incident</span>
                    <span>
                      <ChevronDown className=" font-semibold" />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Incident1</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Incident2</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Incident3</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col border-r-2 py-4 px-8">
              <p className="text-sm font-semibold mb-2">Priority</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="destructive"
                    className="bg-rose-200  text-black rounded-[15px] h-7"
                  >
                    <span>
                      <DotFilledIcon className=" text-red-600 font-semibold" />
                    </span>
                    <span className="capitalize text-red-600 font-semibold">
                      High
                    </span>
                    <span>
                      <ChevronUp className=" text-red-600 font-semibold" />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>
                    <span>
                      <DotFilledIcon />
                    </span>
                    <span className="capitalize bg-green">Low</span>
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <span>
                      <DotFilledIcon />
                    </span>
                    <span className="capitalize">Medium</span>
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <span>
                      <DotFilledIcon />
                    </span>
                    <span className="capitalize ">High</span>
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="flex flex-col p-4">
              <p className="text-sm font-semibold mb-2">Assigned To</p>
              <div className="flex flex-row">
                <p className="rounded-full bg-black text-violet-600 h-8 w-8 pt-1 pl-1 mr-4">
                  FIK
                </p>
                <p>Bagus Fikri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-10">
        <h1 className="font-bold text-xl text-gray-700 mb-5">
          Ticket Activity
        </h1>
        <div className="flex flex-row">
          <div className="rounded-full bg-slate-200  h-8 w-8 pl-1 pt-1">
            <Ticket className="h-5 w-5 pt-1 pl-1" />
          </div>
          <div className="flex flex-col ml-3 mb-5">
            <div className="flex flex-row ">
              <p className="text-gray-500">Ticket Created</p>
              <p className="font-bold ml-1">
                Santi contacted for the first time
              </p>
            </div>
            <p className="text-gray-500 text-xs">Tue, 13 Dec 2023</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="rounded-full bg-rose-400 text-white h-8 w-8 pl-1 pt-1">
            <FlameIcon className="h-5 w-5 pt-1 pl-1" />
          </div>
          <div className="flex flex-col ml-3 mb-5">
            <div className="flex flex-row">
              <p className="font-bold">Fikri Studio</p>
              <p className="text-gray-500 ml-1">Change Ticket Type to</p>
              <p className="font-bold ml-1">Incident</p>
            </div>
            <p className="text-gray-500 text-xs">Tue, 13 Dec 2023</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="rounded-full bg-blue-400 text-white  h-8 w-8 pl-1 pt-1">
            <PhoneIcon className="h-5 w-5 pt-1 pl-1" />
          </div>

          <div className="flex flex-col ml-3 mb-5">
            <div className="flex flex-row">
              <p className="font-bold">Fikri Studio</p>
              <p className="text-gray-500 ml-1">Going on Call with</p>
              <p className="font-bold ml-1">+1678-908-456</p>
            </div>
            <p className="text-gray-500 text-xs">Tue, 13 Dec 2023</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="rounded-full bg-black text-white  h-8 w-8 pl-1 pt-1">
            <ChevronsUpDownIcon className="h-5 w-5 pt-1 pl-1" />
          </div>
          <p className="font-bold ml-3 my-1">View More Activity</p>
        </div>
      </div>
      <div className="mt-8 border-t-2 w-1/3">
        <div className="flex flex-row justify-between mt-5">
          <p className="font-semibold text-gray-500">2 Upcoming Task</p>
          <div className="flex flex-row font-semibold">
            <PlusIcon className="w-2" />
            <p>Add New Task</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-2 ">
          <Checkbox id="terms1" />
          <label
            htmlFor="terms1"
            className="flex flex-col leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-4"
          >
            <p className="text-md font-medium mt-12 ">Validate that the problems has been resolved or the requested task has been completed sucessfully.</p>
            <p className="text-sm font-semibold text-gray-500 mt-3 ">Due date 14 Dec 2023</p>
          </label>
          
        </div>
        <div className="flex items-center mt-5 border-t-2 ">
          <Checkbox id="terms1" />
          <label
            htmlFor="terms1"
            className="flex flex-col leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-4"
          >
            <p className="text-md font-medium mt-8">Schedule a call if article don't help.</p>
            <p className="text-sm font-semibold text-gray-500 mt-3 ">Due date 14 Dec 2023</p>
          </label>
          
        </div>
      </div>
      <div className=" bg-green-600 text-white h-10 w-1/3 pt-3 mt-20 ">
          <div className="flex flex-row justify-around">
            <TicketCheckIcon />
            <p className="uppercase font-light">Ticket 192 has been updated</p>
            <Cross1Icon/>
          </div>
      </div>
    </div>
  );
};

export default TicketPreview;
