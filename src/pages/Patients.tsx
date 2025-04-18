
import { PatientList } from "@/components/patients/PatientList";

const Patients = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 grid-cols-1">
        <PatientList />
      </div>
    </div>
  );
};

export default Patients;
