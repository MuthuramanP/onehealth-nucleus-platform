
import { useState } from "react";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { aiInsights } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function AIInsightBadge() {
  const [isOpen, setIsOpen] = useState(false);
  const highPriorityInsights = aiInsights.filter(insight => insight.priority === "high");
  
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="relative border-dashed animate-pulse-slow gap-1.5 hidden md:flex"
      >
        <Brain size={16} className="text-primary" />
        <span className="font-medium">AI Insights</span>
        {highPriorityInsights.length > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-5 min-w-5 px-1"
          >
            {highPriorityInsights.length}
          </Badge>
        )}
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Brain size={20} className="text-primary" />
              <span>AI-Generated Insights</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            {aiInsights.map((insight) => (
              <div 
                key={insight.id} 
                className={cn(
                  "p-4 rounded-lg border",
                  insight.priority === "high" 
                    ? "border-destructive/30 bg-destructive/5" 
                    : insight.priority === "medium"
                      ? "border-amber-500/30 bg-amber-500/5"
                      : "border-primary/30 bg-primary/5"
                )}
              >
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-semibold text-sm">{insight.title}</h3>
                  <Badge 
                    variant={
                      insight.priority === "high" 
                        ? "destructive" 
                        : insight.priority === "medium" 
                          ? "outline" 
                          : "secondary"
                    }
                    className="capitalize text-[10px]"
                  >
                    {insight.priority} priority
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <Badge variant="outline" className="capitalize text-[10px]">
                    {insight.category}
                  </Badge>
                  {insight.action && (
                    <Button variant="ghost" size="sm" className="h-7 text-xs">
                      {insight.action}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
