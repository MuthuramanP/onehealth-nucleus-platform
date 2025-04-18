
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const departmentsData = [
  { 
    id: 1, 
    name: "Cardiology", 
    head: "Dr. Sarah Johnson",
    headImg: "/placeholder.svg",
    staff: 15,
    patients: 42,
    rooms: 8,
    color: "bg-red-100 text-red-800",
    description: "Specializes in diagnosing and treating diseases of the cardiovascular system."
  },
  { 
    id: 2, 
    name: "Neurology", 
    head: "Dr. Michael Chen",
    headImg: "/placeholder.svg",
    staff: 12,
    patients: 36,
    rooms: 6,
    color: "bg-purple-100 text-purple-800",
    description: "Deals with disorders of the nervous system, including the brain and spinal cord."
  },
  { 
    id: 3, 
    name: "Pediatrics", 
    head: "Dr. Emily Wilson",
    headImg: "/placeholder.svg",
    staff: 18,
    patients: 53,
    rooms: 10,
    color: "bg-blue-100 text-blue-800",
    description: "Focuses on the health and medical care of infants, children, and adolescents."
  },
  { 
    id: 4, 
    name: "Orthopedics", 
    head: "Dr. Robert Martinez",
    headImg: "/placeholder.svg",
    staff: 14,
    patients: 39,
    rooms: 7,
    color: "bg-green-100 text-green-800",
    description: "Concerned with the correction of deformities or functional impairments of the skeletal system."
  },
  { 
    id: 5, 
    name: "Oncology", 
    head: "Dr. Lisa Peterson",
    headImg: "/placeholder.svg",
    staff: 16,
    patients: 45,
    rooms: 9,
    color: "bg-yellow-100 text-yellow-800",
    description: "Deals with the prevention, diagnosis, and treatment of cancer."
  },
  { 
    id: 6, 
    name: "Emergency", 
    head: "Dr. James Taylor",
    headImg: "/placeholder.svg",
    staff: 22,
    patients: 30,
    rooms: 12,
    color: "bg-red-100 text-red-800",
    description: "Provides immediate care for patients with acute illnesses or injuries."
  }
];

const Departments = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Departments</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departmentsData.map((dept) => (
              <Card key={dept.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold">{dept.name}</CardTitle>
                    <Badge className={dept.color}>{dept.patients} patients</Badge>
                  </div>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={dept.headImg} alt={dept.head} />
                        <AvatarFallback>{dept.head.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{dept.head}</p>
                        <p className="text-xs text-muted-foreground">Department Head</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <div className="rounded-md bg-muted p-2">
                        <p className="text-muted-foreground">Staff</p>
                        <p className="font-medium">{dept.staff}</p>
                      </div>
                      <div className="rounded-md bg-muted p-2">
                        <p className="text-muted-foreground">Rooms</p>
                        <p className="font-medium">{dept.rooms}</p>
                      </div>
                      <div className="rounded-md bg-muted p-2">
                        <p className="text-muted-foreground">Occupancy</p>
                        <p className="font-medium">{Math.round(dept.patients / (dept.rooms * 2) * 100)}%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="staff" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Department Staff</CardTitle>
              <CardDescription>View and manage staff across departments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Staff management features will be implemented in future updates.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Department Resources</CardTitle>
              <CardDescription>Manage equipment and room allocations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Resource management features will be implemented in future updates.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Departments;
