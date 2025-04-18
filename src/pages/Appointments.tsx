
import { AppointmentList } from "@/components/appointments/AppointmentList";

const Appointments = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 grid-cols-1">
        <AppointmentList />
      </div>
    </div>
  );
};

export default Appointments;
