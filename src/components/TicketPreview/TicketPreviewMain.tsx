import { Button } from "@/components/ui/button";
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
  Ticket,
  PhoneIcon,
  TicketCheckIcon,
  ChevronDown,
  ChevronUp,
  ChevronsUpDownIcon,
  PlusIcon,
} from "lucide-react"; // Import icons
import ticketData from "@/constants/ticketData";
import { Checkbox } from "../ui/checkbox";


  

const TicketPreviewMain= () => {
  const ticket = ticketData[0]; 

  return (
    <div className="bg-white pt-5 pl-5">
      <div className="flex flex-row  ">
        <div className="flex flex-row">
          <Button
            variant="outline"
            className="bg-slate-50 border-none text-green-400 font-extrabold text-2xl "
          >
            <p>&#928;</p>
          </Button>
          <h2 className="font-bold text-xl mt-1 ml-2">{ticket.header.title}</h2>
        </div>

        <div className="flex flex-row">
          <Button
            variant="outline"
            className="border-black text-black ml-36 font-medium"
          >
            {ticket.buttonLabels.viewDetails}
          </Button>
          <Cross1Icon className="mt-2 ml-4" />
        </div>
      </div>
      <div className="border-2 mt-10 rounded-md w-fit">
        <div className="flex flex-row pt-3 pb-3 border-b-2">
          <div className="flex flex-row justify-around place-content-between">
            <p className="font-bold text-xl pl-8">{ticket.id}</p>
            <p className="text-xl pl-2">{ticket.title}</p>
          </div>
          <Button
            variant="default"
            className="bg-blue-500 rounded-[15px] h-7 ml-24"
          >
            {ticket.buttonLabels.open}
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
                    className="bg-slate-100 text-black rounded-[15px] h-7"
                  >
                    <span>
                      {ticket.incident.icon1 === "FlameIcon" && (
                        <FlameIcon className="font-semibold" />
                      )}
                    </span>
                    <span className="capitalize font-semibold">
                      {ticket.incident.label}
                    </span>
                    <span>
                      <ChevronDown className="font-semibold" />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />
                  {ticket.incidents.map((i, index) => (
                    <DropdownMenuCheckboxItem key={index}>
                    </DropdownMenuCheckboxItem>
                  ))}
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
                    className="bg-rose-200 text-black rounded-[15px] h-7"
                  >
                    <span>
                      {ticket.priority.icon1 === "DotFilledIcon" && (
                        <DotFilledIcon className="text-red-600 font-semibold" />
                      )}
                    </span>
                    <span className="capitalize text-red-600 font-semibold">
                      {ticket.priority.label}
                    </span>
                    <span>
                      <ChevronUp className="text-red-600 font-semibold" />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />
                  {ticket.priorities.map((priority, index) => (
                    <DropdownMenuCheckboxItem key={index}>
                      <span>
                        <DotFilledIcon />
                      </span>
                      <span className="capitalize">{priority.label}</span>
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col p-4">
              <p className="text-sm font-semibold mb-2">Assigned To</p>
              <div className="flex flex-row">
                <p className="rounded-full bg-black text-violet-600 h-8 w-8 pt-1 pl-1 mr-4">
                  {ticket.assignedTo.initials}
                </p>
                <p>{ticket.assignedTo.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-10 ">
        <h1 className="font-bold text-xl text-gray-700 mb-5">
          Ticket Activity
        </h1>
        {ticket.activity.map((act, index) => (
          <div className="flex flex-row" key={index}>
            <div>
            <div className={``} >
              {act.icon === "Ticket" && (
                <Ticket
                  className={`h-8 w-8 ${act.color}  bg-slate-300 rounded-full p-2`}
                />
              )}

            </div>
            
              {act.icon === "FlameIcon" && (
                <FlameIcon
                  className={`h-8 w-8 ${act.color} bg-red-500 rounded-full p-2`}
                />
              )}

              {act.icon === "PhoneIcon" && (
                <PhoneIcon
                  className={`h-8 w-8  ${act.color}  bg-blue-500 rounded-full p-2`}
                />
              )}
            </div>
            <div className="flex flex-col ml-3 mb-5">
              <div className="flex flex-row">
                <p className="text-gray-500">
                  {act.type === "created"
                    ? "Ticket Created"
                    : act.type === "changed"
                    ? "Ticket Type Changed"
                    : "Call"}
                </p>
                <p className="font-bold ml-1">{act.description}</p>
              </div>
              <p className="text-gray-500 text-xs">{act.date}</p>
            </div>
          </div>
        ))}
        
        <div className="flex flex-row">
          <div className="rounded-full bg-black text-white h-8 w-8 pl-1 pt-1">
            <ChevronsUpDownIcon className="h-5 w-5 pt-1 pl-1" />
          </div>
          <p className="font-bold ml-3 my-1">View More Activity</p>
        </div>
      </div>
      <div className="mt-8 border-t-2 w-1/3">
        <div className="flex flex-row justify-between mt-10">
          <p className="font-semibold text-gray-500 ">
            {ticket.upcomingTasks.length} Upcoming Task
          </p>
          <div className="flex flex-row font-semibold">
            <PlusIcon className="w-2" />
            <p>{ticket.buttonLabels.addNewTask}</p>
          </div>
        </div>
        {ticket.upcomingTasks.map((task, index) => (
          <div className="flex items-center mt-5 " key={index}>
            <Checkbox  className='border-2 border-gray-400 ' id={`task-${index}`}/>
            <label
              htmlFor={`task-${index}`}
              className="flex flex-col leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-8"
            >
              <p className="text-md font-medium mt-8">{task.description}</p>
              <p className="text-sm font-semibold text-gray-500 mt-3">
                Due date {task.dueDate}
              </p>
            </label>
          </div>
        ))}
      </div>
      <div className="bg-green-600 text-white h-10 w-1/3 pt-3 mt-20">
        <div className="flex flex-row justify-around">
          {ticket.notification.icon === "TicketCheckIcon" && (
            <TicketCheckIcon />
          )}
          <p className="uppercase font-light">{ticket.notification.message}</p>
          <Cross1Icon />
        </div>
      </div>
    </div>
  );
};

export default TicketPreviewMain;
