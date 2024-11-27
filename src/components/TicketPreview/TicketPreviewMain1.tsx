import { Button } from "@/components/ui/button";
import { Cross1Icon, DotFilledIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FlameIcon,
  Ticket,
  PhoneIcon,
  TicketCheckIcon,
  ChevronDown,
  ChevronUp,
  ChevronsUpDownIcon,
  PlusIcon
} from "lucide-react"; // Import icons
import ticketData from "@/constants/ticketData";
import { Checkbox } from "../ui/checkbox";

const TicketPreviewMain1 = () => {
  const Ticket1 = ticketData[0];
  return (
    <div className="bg-white pt-5 pl-5">
      <div id="header" className="flex flex-row justify-between pb-4">
        <div className="flex flex-row gap-2">
          <Button
            variant={"secondary"}
            className="text-green-400 font-extrabold text-xl h-6 w-6"
          >
            &#928;
          </Button>
          <p className="font-bold">{Ticket1.header.title}</p>
        </div>
        <div className="flex flex-row gap-2 pr-28">
          <Button variant={"outline"} className="border-black">
            {Ticket1.buttonLabels.viewDetails}
          </Button>
          <Cross1Icon className="mt-2" />
        </div>
      </div>
      <div id="main">
        <div
          id="section1"
          className="border-2 border-gray-200 rounded-lg p-4 w-11/12 flex flex-col"
        >
          <div className="flex flex-row justify-between border-b-2 pb-2">
            <div className="flex flex-row gap-6">
              <p className="font-bold text-lg">{Ticket1.id}</p>
              <p className="font-medium text-gray-800 text-lg">
                {Ticket1.title}
              </p>
            </div>
            <Button
              variant={"default"}
              className="mr-10 bg-sky-600 rounded-full"
            >
              {Ticket1.buttonLabels.open}
            </Button>
          </div>
          <div className="flex flex-row justify-evenly mt-5">
            <div className=" flex flex-col items-center justify-center border-r-2 pr-52">
              <p className=" font-semibold mb-1">{Ticket1.incident.heading}</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="rounded-full">
                    {Ticket1.incident.icon1 === "FlameIcon" && (
                      <FlameIcon className="font-semibold " />
                    )}
                    <p className="font-semibold">{Ticket1.incident.label}</p>
                    {Ticket1.incident.icon2 === "ChevronDown" && (
                      <ChevronDown className="font-semibold" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />
                  {Ticket1.incidents.map((i, index) => (
                    <DropdownMenuItem key={index}>{i.label}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex flex-col items-center justify-center border-r-2 pr-52">
              <p className="font-semibold">{Ticket1.priority.heading}</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="rounded-full bg-rose-100">
                    {Ticket1.priority.icon1 === "DotFilledIcon" && (
                      <DotFilledIcon className="font-semibold text-rose-500" />
                    )}
                    <p className="font-semibold text-rose-500">{Ticket1.priority.label}</p>
                    {Ticket1.priority.icon2 === "ChevronUp" && (
                      <ChevronUp className="font-semibold text-rose-500" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />
                  {Ticket1.priorities.map((p, index) => (
                    <DropdownMenuItem key={index}>{p.label}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div >
              <p className="font-semibold ml-3">{Ticket1.assignedTo.heading}</p>
              <div className="flex flex-row ">
                <p className="text-purple-500 w-8 h-8 rounded-full bg-black pt-1 pl-1 ">
                  {Ticket1.assignedTo.initials}
                </p>
                <p className="ml-2 mt-1">{Ticket1.assignedTo.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="section2">
          <p className="py-10 text-xl font-semibold">Ticket Activity</p>

          <div>
            {Ticket1.activity.map((a, index) => (
              <div key={index} className="flex flex-row ">
                {a.icon === "Ticket" && (
                  <Ticket
                    className={`h-8 w-8 ${a.color}  bg-slate-300 rounded-full p-2`}
                  />
                )}
                {a.icon === "FlameIcon" && (
                  <FlameIcon
                    className={`h-8 w-8 ${a.color} bg-red-500 rounded-full p-2`}
                  />
                )}
                {a.icon === "PhoneIcon" && (
                  <PhoneIcon
                    className={`h-8 w-8  ${a.color}  bg-blue-500 rounded-full p-2`}
                  />
                )}
                <div className="flex flex-col ml-3 mb-5">
                  <div className="flex flex-row">
                    <p className="text-gray-500">
                      {a.type === "created"
                        ? "Ticket Created"
                        : a.type === "changed"
                        ? "Ticket Type Changed"
                        : "Call"}
                    </p>
                    <p className="font-bold ml-1">{a.description}</p>
                  </div>
                  <p className="text-gray-500 text-xs">{a.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row mb-8">
            <div className="rounded-full bg-black text-white h-8 w-8 pl-1 pt-1">
              <ChevronsUpDownIcon className="h-5 w-5 pt-1 pl-1" />
            </div>
            <p className="font-bold ml-3 my-1">View More Activity</p>
          </div>
        </div>
        <div id="section3" className="border-t-2 mr-10">
          <div className="flex flex-row justify-between mt-8">
            <p className="font-semibold text-medium"> {Ticket1.upcomingTasks.length} Upcoming Task</p>
            <Button variant={"secondary"}>
              <PlusIcon />
              <p className="font-semibold">Add New task</p>
            </Button>
          </div>
          {Ticket1.upcomingTasks.map((task, index) => (
            <div className="flex items-center space-x-4" key={index}>
              <Checkbox className=" text-red-800" id={`task-${index}`} />
              <label
                htmlFor={`task-${index}`}
                className="flex flex-col leading-none peer-disabled:cursor-not-allowed  ml-8"
              >
                <p className="text-md font-medium mt-8">{task.description}</p>
                <p className="text-sm font-semibold text-gray-500 mt-3">
                  Due date {task.dueDate}
                </p>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div id="footer">
      <div className="bg-green-600 h-8 text-white mr-10 mt-10 ">
        <div className="flex flex-row justify-around pt-1">
          {Ticket1.notification.icon === "TicketCheckIcon" && (
            <TicketCheckIcon className=""/>
          )}
          <p className="uppercase font-light ">{Ticket1.notification.message}</p>
          <Cross1Icon className=""/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TicketPreviewMain1;
