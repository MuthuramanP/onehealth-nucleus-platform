
import { useState } from "react";
import { Calendar, Clock, Filter, Search } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuCheckboxItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { appointments } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function AppointmentList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  
  // Filter appointments based on search and filters
  const filteredAppointments = appointments.filter((appointment) => {
    // Search filter
    const matchesSearch = 
      appointment.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Status filter
    const matchesStatus = 
      statusFilter === "all" || 
      appointment.status === statusFilter;
    
    // Type filter
    const matchesType = 
      typeFilter.length === 0 || 
      typeFilter.includes(appointment.type);
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300";
      case "completed":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300";
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300";
      case "in-progress":
        return "bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300";
      case "no-show":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "check-up":
        return "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300";
      case "follow-up":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-300";
      case "emergency":
        return "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300";
      case "surgery":
        return "bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-300";
      case "consultation":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-800/20 dark:text-indigo-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300";
    }
  };

  return (
    <Card className="col-span-full">
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <CardTitle className="text-lg font-medium">Appointments</CardTitle>
            <CardDescription>
              Schedule and manage patient appointments
            </CardDescription>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button>New Appointment</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search appointments..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Select
              value={statusFilter}
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="no-show">No Show</SelectItem>
              </SelectContent>
            </Select>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Type</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                {["check-up", "follow-up", "emergency", "surgery", "consultation"].map((type) => (
                  <DropdownMenuCheckboxItem
                    key={type}
                    checked={typeFilter.includes(type)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setTypeFilter([...typeFilter, type]);
                      } else {
                        setTypeFilter(typeFilter.filter((t) => t !== type));
                      }
                    }}
                  >
                    <span className="capitalize">{type}</span>
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="rounded-md border">
          <div className="grid grid-cols-12 py-3 px-4 border-b bg-muted/50 font-medium text-sm">
            <div className="col-span-2">ID</div>
            <div className="col-span-3">Patient</div>
            <div className="col-span-3">Doctor</div>
            <div className="col-span-2">Date & Time</div>
            <div className="col-span-2">Status</div>
          </div>
          <div className="divide-y">
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appointment) => (
                <div 
                  key={appointment.id} 
                  className="grid grid-cols-12 py-4 px-4 items-center hover:bg-muted/50 transition-colors text-sm"
                >
                  <div className="col-span-2 font-mono text-xs">{appointment.id}</div>
                  <div className="col-span-3">{appointment.patientName}</div>
                  <div className="col-span-3">{appointment.doctorName}</div>
                  <div className="col-span-2 flex flex-col">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{appointment.time}</span>
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col gap-2">
                    <Badge 
                      variant="outline" 
                      className={cn("capitalize", getStatusColor(appointment.status))}
                    >
                      {appointment.status}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={cn("capitalize", getTypeColor(appointment.type))}
                    >
                      {appointment.type}
                    </Badge>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-muted-foreground">
                No appointments found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
