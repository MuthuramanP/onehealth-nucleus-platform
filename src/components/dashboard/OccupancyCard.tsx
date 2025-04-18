
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { dashboardMetrics } from "@/data/mockData";

export function OccupancyCard() {
  const { bedOccupancy } = dashboardMetrics;
  const occupancyRate = Math.round((bedOccupancy.occupied / bedOccupancy.total) * 100);
  const icuOccupancyRate = Math.round((bedOccupancy.icuOccupied / bedOccupancy.icuTotal) * 100);

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-base font-medium">Bed Occupancy</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Overall Occupancy</div>
            <div className="text-sm font-medium">
              {occupancyRate}% ({bedOccupancy.occupied}/{bedOccupancy.total})
            </div>
          </div>
          <Progress 
            value={occupancyRate}
            className="h-2" 
            indicatorClassName={
              occupancyRate > 90 
                ? "bg-destructive" 
                : occupancyRate > 75 
                  ? "bg-amber-500" 
                  : "bg-primary"
            }
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <div>Available: {bedOccupancy.available} beds</div>
            <div>
              {occupancyRate > 90 
                ? "Critical" 
                : occupancyRate > 75 
                  ? "High" 
                  : "Normal"}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">ICU Occupancy</div>
            <div className="text-sm font-medium">
              {icuOccupancyRate}% ({bedOccupancy.icuOccupied}/{bedOccupancy.icuTotal})
            </div>
          </div>
          <Progress 
            value={icuOccupancyRate} 
            className="h-2" 
            indicatorClassName={
              icuOccupancyRate > 85 
                ? "bg-destructive" 
                : icuOccupancyRate > 70 
                  ? "bg-amber-500" 
                  : "bg-emerald-500"
            }
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <div>Available: {bedOccupancy.icuTotal - bedOccupancy.icuOccupied} beds</div>
            <div>
              {icuOccupancyRate > 85 
                ? "Critical" 
                : icuOccupancyRate > 70 
                  ? "High" 
                  : "Normal"}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
