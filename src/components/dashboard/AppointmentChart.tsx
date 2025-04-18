
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  {
    name: "Mon",
    scheduled: 12,
    completed: 8,
  },
  {
    name: "Tue",
    scheduled: 18,
    completed: 15,
  },
  {
    name: "Wed",
    scheduled: 15,
    completed: 12,
  },
  {
    name: "Thu",
    scheduled: 20,
    completed: 16,
  },
  {
    name: "Fri",
    scheduled: 25,
    completed: 20,
  },
  {
    name: "Sat",
    scheduled: 8,
    completed: 5,
  },
  {
    name: "Sun",
    scheduled: 0,
    completed: 0,
  },
];

export function AppointmentChart() {
  return (
    <Card className="col-span-full xl:col-span-2">
      <CardHeader>
        <CardTitle className="text-base font-medium">Weekly Appointments</CardTitle>
        <CardDescription>
          Scheduled vs completed appointments this week
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-0">
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="name" 
              tickLine={false}
              axisLine={false}
              fontSize={12}
            />
            <YAxis 
              tickLine={false}
              axisLine={false}
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: "8px", 
                border: "1px solid #e2e8f0",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)"
              }}
            />
            <Bar 
              dataKey="scheduled" 
              name="Scheduled" 
              fill="hsl(var(--accent))" 
              radius={[4, 4, 0, 0]} 
              barSize={20}
            />
            <Bar 
              dataKey="completed" 
              name="Completed" 
              fill="hsl(var(--primary))" 
              radius={[4, 4, 0, 0]} 
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
