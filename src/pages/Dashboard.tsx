
import { User, Users, Calendar, BedDouble, Activity, PieChart } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { PatientStatusChart } from "@/components/dashboard/PatientStatusChart";
import { OccupancyCard } from "@/components/dashboard/OccupancyCard";
import { AppointmentChart } from "@/components/dashboard/AppointmentChart";
import { dashboardMetrics } from "@/data/mockData";
import { PatientList } from "@/components/patients/PatientList";

const Dashboard = () => {
  const { patientMetrics, appointmentMetrics, staffMetrics, bedOccupancy } = dashboardMetrics;
  
  return (
    <div className="space-y-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <StatsCard 
          title="Total Patients" 
          value={patientMetrics.totalPatients.toLocaleString()} 
          description="Overall registered patients"
          icon={<User size={16} />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard 
          title="Appointments Today" 
          value={appointmentMetrics.scheduled.toLocaleString()} 
          description={`${appointmentMetrics.completed} completed`}
          icon={<Calendar size={16} />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard 
          title="Bed Occupancy" 
          value={`${Math.round((bedOccupancy.occupied / bedOccupancy.total) * 100)}%`} 
          description={`${bedOccupancy.available} beds available`}
          icon={<BedDouble size={16} />}
          trend={{ value: 5, isPositive: false }}
        />
        <StatsCard 
          title="Active Staff" 
          value={staffMetrics.totalStaff.toLocaleString()} 
          description={`${staffMetrics.doctors} doctors, ${staffMetrics.nurses} nurses`}
          icon={<Users size={16} />}
          trend={{ value: 3, isPositive: true }}
        />
      </div>

      <div className="grid gap-4 grid-cols-1 xl:grid-cols-4">
        <PatientStatusChart />
        <OccupancyCard />
        <AppointmentChart />
        <ActivityFeed />
      </div>

      <div className="grid gap-4 grid-cols-1">
        <PatientList />
      </div>
    </div>
  );
};

export default Dashboard;
