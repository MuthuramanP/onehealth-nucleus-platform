
import { useState } from "react";
import { Bell, Search, MessageCircle, User, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { activityLogs } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { AIInsightBadge } from "@/components/dashboard/AIInsightBadge";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const { user, logout } = useAuth();

  const recentLogs = activityLogs.slice(0, 5);
  
  return (
    <header className="h-16 border-b bg-background px-4 flex items-center justify-between">
      <div className="flex-1 md:flex-initial">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full md:w-[300px] pl-9 rounded-full bg-muted/40"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
            3
          </span>
        </Button>

        <Popover open={showNotifications} onOpenChange={setShowNotifications}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                5
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Notifications</h4>
                <Button variant="ghost" className="text-xs" size="sm">
                  Mark all as read
                </Button>
              </div>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {recentLogs.map((log) => (
                <div key={log.id} className="p-4 border-b last:border-b-0 hover:bg-muted/50 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "h-2 w-2 mt-1.5 rounded-full",
                      log.action.includes("Admitted") || log.action.includes("Emergency") 
                        ? "bg-destructive" 
                        : "bg-primary"
                    )} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{log.action}</p>
                      <p className="text-xs text-muted-foreground mt-1">{log.details}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(log.timestamp).toLocaleTimeString()} by {log.userName}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <Button variant="outline" className="w-full" size="sm">
                View all notifications
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <AIInsightBadge />

        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative rounded-full p-0 hover:bg-transparent">
                <Avatar>
                  <AvatarImage 
                    src={user.avatar || `https://avatar.vercel.sh/${user.id}.png`} 
                    alt={user.name} 
                  />
                  <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage 
                      src={user.avatar || `https://avatar.vercel.sh/${user.id}.png`} 
                      alt={user.name} 
                    />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{user.role}</p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => logout()}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}

