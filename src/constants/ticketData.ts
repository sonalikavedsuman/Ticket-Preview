const ticketData = [
  {
    id: "#TC-196",
    title: "Defective Item Received",
    ticketType: {
      label: "Incident",
      icon: "FlameIcon",
    },
    priority: {
      label: "High",
      icon: "DotFilledIcon",
    },
    assignedTo: {
      initials: "FIK",
      name: "Bagus Fikri",
    },
    activity: [
      {
        type: "created",
        description: "Santi contacted for the first time",
        date: "Tue, 13 Dec 2023",
        icon: "Ticket",
        color: "text-black",
        backgroundColor:"bg-slate-200",
      },
      {
        type: "changed",
        description: "Change Ticket Type to Incident",
        date: "Tue, 13 Dec 2023",
        icon: "FlameIcon",
        color: "text-white",
        backgroundColor: "bg-red-400",
      },
      {
        type: "call",
        description: "Going on Call with +1678-908-456",
        date: "Tue, 13 Dec 2023",
        icon: "PhoneIcon",
        color: "text-white",
        backgroundColor: "bg-blue-400",
      },
    ],
    upcomingTasks: [
      {
        description: "Validate that the problems have been resolved or the requested task has been completed successfully.",
        dueDate: "14 Dec 2023",
      },
      {
        description: "Schedule a call if the article does not help.",
        dueDate: "14 Dec 2023",
      },
    ],
    notification: {
      message: "Ticket 192 has been updated",
      icon: "TicketCheckIcon",
    },
    incidents: [
      { label: "Incident1" },
      { label: "Incident2" },
      { label: "Incident3" },
    ],
    priorities: [
      { label: "Low", icon: "DotFilledIcon", color: "text-green-600", backgroundColor: "bg-green-100" },
      { label: "Medium", icon: "DotFilledIcon", color: "text-yellow-600", backgroundColor: "bg-yellow-100" },
      { label: "High", icon: "DotFilledIcon", color: "text-red-600", backgroundColor: "bg-red-100" },
    ],
    buttonLabels: {
      viewDetails: "View Full Details",
      open: "Open",
      addNewTask: "Add New Task",
    },
    header: {
      title: "Ticket Preview",
      icon: "Ticket",
    },
  },
];

export default ticketData;