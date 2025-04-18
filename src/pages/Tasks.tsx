
import { CalendarCheck, CheckCircle2, CircleDashed } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Tasks = () => {
  const tasks = [
    { id: 1, title: "Review patient reports", status: "completed", dueDate: "2024-04-20", assignee: "Dr. Smith" },
    { id: 2, title: "Update medical inventory", status: "pending", dueDate: "2024-04-21", assignee: "Nurse Johnson" },
    { id: 3, title: "Schedule team meeting", status: "in-progress", dueDate: "2024-04-19", assignee: "Admin Mary" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {task.title}
              </CardTitle>
              {task.status === "completed" ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : task.status === "in-progress" ? (
                <CalendarCheck className="h-4 w-4 text-blue-500" />
              ) : (
                <CircleDashed className="h-4 w-4 text-gray-500" />
              )}
            </CardHeader>
            <CardContent>
              <CardDescription>Due: {task.dueDate}</CardDescription>
              <CardDescription>Assigned to: {task.assignee}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
