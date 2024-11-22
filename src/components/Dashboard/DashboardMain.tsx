import {
  CheckIcon,
  CircleIcon,
  FlameIcon,
} from "lucide-react";
import React from "react";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const DashboardMain = () => {
  return (
    <div className="mt-10 ">
      <div className="my-10">
        <h1 className="font-bold">Dashboard</h1>
        <p className="text-gray-500 font-semibold">
          Some explanation here on overview
        </p>
      </div>
      <div className="border-fuchsia-600 border-2 rounded-lg p-4 w-4/5 ">
        <div className="flex flex-col mb-10">
          <div className="flex flex-row justify-between mb-3">
            <div className="flex justify-start ">
              <FlameIcon className="text-fuchsia-600 mr-2" />
              <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
            </div>
            <p>38% Completed</p>
          </div>
          <Progress value={38} />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row space-x-5 ">
            <div className="w-10 h-10 rounded-full bg-green-600">
              <CheckIcon className="mt-2 ml-2 text-white" />
            </div>
            <div className="mb-4">
              <p className="text-lg font-bold text-green-600"> Step 1</p>
              <p className="line-through font-semibold text-gray-500">Personal Information</p>
              <p className="line-through font-medium text-gray-500">Add your Personal Information</p>
            </div>
          </div>
          <div className="flex flex-row space-x-5">
            <div className="w-10 h-10 rounded-full bg-green-600">
              <CheckIcon className="mt-2 ml-2 text-white" />
            </div>
            <div className="mb-4">
              <p className="text-lg font-bold text-green-600"> Step 2</p>
              <p className="line-through font-semibold text-gray-500">Add your First Project</p>
              <p className="line-through font-medium text-gray-500">Some Description</p>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-5">
              <div className="w-10 h-10 rounded-full bg-fuchsia-600">
                <CircleIcon className="mt-2 ml-2 text-white fill-white" />
              </div>
              <div className="mb-4">
                <p className="text-lg font-bold text-fuchsia-600"> Step 3</p>
                <p className="font-semibold text-black">Add Content to this client</p>
                <p className="font-medium text-gray-500">Some Description</p>
              </div>
            </div>
            <Button
              variant={"secondary"}
              className="rounded-full bg-fuchsia-600 text-white"
            >
              Start
            </Button>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-5">
              <div className="w-10 h-10 rounded-full border-slate-300 border-2">
                <CircleIcon strokeWidth={"0px"} />
              </div>
              <div className="mb-4">
                <div className="flex flex-row">
                  <p className="text-lg font-bold text-fuchsia-600"> Step 4</p>
                  <p className="font-medium text-gray-400">(opens after completion of Steps 2 and 3)</p>
                </div>

                <p className="font-semibold text-black">Use Document Editor</p>
                <p className="font-medium text-gray-500">Some Description</p>
              </div>
            </div>
            <Button
              variant={"secondary"}
              className="rounded-full bg-fuchsia-200 text-white"
            >
              Start
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2 className="text-xl font-bold mb-4 mt-4">Favorite Clients</h2>
        </div>
        <div className="flex flex-row space-x-7">
          <Card className="flex flex-col w-60 h-36">
            <CardHeader className="bg-blue-100 h-1/6">
              <CardTitle className="pt-2">
                <div className=" text-white bg-sky-500 h-8 w-8  rounded-full ">
                  <p className="pt-2 pl-1 font-thin">TS</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="h-5/6 mt-5">
              <p className="font-bold">TechInnovate Solutions</p>
              <p className="text-zinc-500">4 Projects</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col w-60 h-36 ">
            <CardHeader className="bg-red-50 h-1/6">
              <CardTitle className="pt-2">
                <div className="text-slate-500 bg-white rounded-full h-8 w-8">
                  <p className="text-[8px]  pt-3  font-thin">ecofusion</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="h-5/6 mt-5">
              <p className="font-bold">EcoFusion Innovations</p>
              <p className="text-zinc-500">13 Projects</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
