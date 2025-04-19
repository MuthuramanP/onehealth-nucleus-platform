
import { AppointmentList } from "@/components/appointments/AppointmentList";
import { CreateItemDialog } from "@/components/shared/CreateItemDialog";
import { CreateAppointmentForm } from "@/components/appointments/CreateAppointmentForm";

const Appointments = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Appointments</h2>
        <CreateItemDialog
          title="Appointment"
          description="Schedule a new appointment for a patient."
        >
          <CreateAppointmentForm />
        </CreateItemDialog>
      </div>
      
      <div className="grid gap-4 grid-cols-1">
        <AppointmentList />
      </div>
    </div>
  );
};

export default Appointments;
