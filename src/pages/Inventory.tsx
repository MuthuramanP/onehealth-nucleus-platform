
import { Package2, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Inventory = () => {
  const inventory = [
    { id: 1, name: "Surgical Masks", quantity: 2500, total: 5000, status: "normal" },
    { id: 2, name: "Medical Gloves", quantity: 300, total: 1000, status: "low" },
    { id: 3, name: "Syringes", quantity: 1500, total: 2000, status: "normal" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Medical Inventory</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {inventory.map((item) => (
          <Card key={item.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.name}
              </CardTitle>
              <Package2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={(item.quantity / item.total) * 100} />
                <div className="flex items-center justify-between text-sm">
                  <span>{item.quantity} units</span>
                  <span className="text-muted-foreground">of {item.total}</span>
                </div>
                {item.status === "low" && (
                  <div className="flex items-center text-xs text-destructive gap-1 mt-2">
                    <AlertTriangle className="h-3 w-3" />
                    <span>Low stock alert</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
