
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { patients } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, UserPlus, CalendarClock } from "lucide-react";
import { cn } from "@/lib/utils";

export function PatientList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPatientDetail = () => {
    if (!selectedPatient) return null;
    return patients.find(patient => patient.id === selectedPatient);
  };

  const patientDetail = getPatientDetail();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "stable":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300";
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300";
      case "recovering":
        return "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300";
      case "scheduled":
        return "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300";
    }
  };

  return (
    <>
      <Card className="col-span-full">
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-lg font-medium">Patients</CardTitle>
              <CardDescription>
                Manage and view patient information
              </CardDescription>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search patients..."
                  className="w-full sm:w-[250px] pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="whitespace-nowrap">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Patient
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-12 py-3 px-4 border-b bg-muted/50 font-medium text-sm">
              <div className="col-span-1">ID</div>
              <div className="col-span-3">Name</div>
              <div className="col-span-1 text-center">Age</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-3">Contact</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>
            <div className="divide-y">
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <div 
                    key={patient.id} 
                    className="grid grid-cols-12 py-4 px-4 items-center hover:bg-muted/50 transition-colors text-sm"
                  >
                    <div className="col-span-1 font-mono text-xs">{patient.id}</div>
                    <div className="col-span-3 flex items-center gap-2">
                      {patient.avatar ? (
                        <img
                          src={patient.avatar}
                          alt={patient.name}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-medium text-xs">
                            {patient.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <span className="font-medium truncate">{patient.name}</span>
                    </div>
                    <div className="col-span-1 text-center">{patient.age}</div>
                    <div className="col-span-2">
                      <Badge 
                        variant="outline" 
                        className={cn("capitalize", getStatusColor(patient.status))}
                      >
                        {patient.status}
                      </Badge>
                    </div>
                    <div className="col-span-3 truncate">{patient.contactNumber}</div>
                    <div className="col-span-2 flex justify-end items-center gap-2">
                      {patient.upcomingAppointment && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="h-8 text-xs gap-1"
                        >
                          <CalendarClock className="h-3.5 w-3.5" />
                          <span className="hidden sm:inline">Appointment</span>
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="h-8"
                        onClick={() => setSelectedPatient(patient.id)}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-muted-foreground">
                  No patients found matching your search criteria.
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedPatient} onOpenChange={(open) => !open && setSelectedPatient(null)}>
        {patientDetail && (
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Patient Details</DialogTitle>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                {patientDetail.avatar ? (
                  <img
                    src={patientDetail.avatar}
                    alt={patientDetail.name}
                    className="h-24 w-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-24 w-24 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xl">
                      {patientDetail.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="text-center sm:text-left space-y-1">
                  <h3 className="text-xl font-semibold">{patientDetail.name}</h3>
                  <Badge 
                    variant="outline" 
                    className={cn("capitalize", getStatusColor(patientDetail.status))}
                  >
                    {patientDetail.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Patient ID: {patientDetail.id}
                  </p>
                  {patientDetail.admissionDate && (
                    <p className="text-sm">
                      Admitted: {new Date(patientDetail.admissionDate).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Age</p>
                    <p className="text-sm">{patientDetail.age} years</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Gender</p>
                    <p className="text-sm">{patientDetail.gender}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Blood Type</p>
                    <p className="text-sm">{patientDetail.bloodType || 'Not recorded'}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Insurance</p>
                    <p className="text-sm">{patientDetail.insuranceProvider || 'None'}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Contact Information</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-muted/50 p-3 rounded-md">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-sm">{patientDetail.contactNumber}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm">{patientDetail.email}</p>
                    </div>
                    <div className="space-y-1 sm:col-span-2">
                      <p className="text-xs text-muted-foreground">Address</p>
                      <p className="text-sm">{patientDetail.address}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Medical History</p>
                  <div className="flex flex-wrap gap-2">
                    {patientDetail.medicalHistory.map((condition, index) => (
                      <Badge key={index} variant="secondary">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>

                {patientDetail.upcomingAppointment && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Upcoming Appointment</p>
                    <div className="bg-muted/50 p-3 rounded-md">
                      <p className="text-sm">
                        {new Date(patientDetail.upcomingAppointment).toLocaleString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedPatient(null)}
                >
                  Close
                </Button>
                <Button onClick={() => {
                  setSelectedPatient(null);
                  // In a real app, this would navigate to a patient edit page
                  // navigate(`/patients/${patientDetail.id}/edit`);
                }}>
                  Edit Patient
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
