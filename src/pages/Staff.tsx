
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Staff = () => {
  const staffMembers = [
    { id: 1, name: "Dr. Sarah Smith", role: "Cardiologist", department: "Cardiology", status: "Available" },
    { id: 2, name: "Dr. John Davis", role: "Neurologist", department: "Neurology", status: "In Surgery" },
    { id: 3, name: "Nurse Mary Johnson", role: "Head Nurse", department: "Emergency", status: "Available" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Staff Directory</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {staffMembers.map((staff) => (
          <Card key={staff.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`https://avatar.vercel.sh/${staff.id}.png`} />
                  <AvatarFallback>{staff.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-sm font-medium">{staff.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{staff.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                <p>Department: {staff.department}</p>
                <p>Status: {staff.status}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Staff;
