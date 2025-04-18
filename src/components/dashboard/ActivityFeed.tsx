
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { activityLogs } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function ActivityFeed() {
  return (
    <Card className="col-span-full xl:col-span-2">
      <CardHeader>
        <CardTitle className="text-base font-medium">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-8 relative pl-8 before:absolute before:left-4 before:top-0 before:h-full before:w-[1px] before:bg-border">
          {activityLogs.map((log) => (
            <div key={log.id} className="relative pl-6 pb-1">
              <div className="absolute left-0 top-1 h-2 w-2 rounded-full bg-primary" />
              <div>
                <p className="text-sm font-medium mb-1">{log.action}</p>
                <p className="text-sm text-muted-foreground">{log.details}</p>
                <div className="flex items-center gap-1 mt-2">
                  <span className={cn(
                    "inline-flex h-6 items-center rounded-md px-2 text-xs font-medium",
                    log.userRole === "doctor" 
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300" 
                      : log.userRole === "nurse"
                        ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300"
                  )}>
                    {log.userName}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(log.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
