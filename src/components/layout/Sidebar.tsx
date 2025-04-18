
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Stethoscope, 
  FileText, 
  ActivitySquare, 
  Settings, 
  Menu, 
  X, 
  Brain,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}

const SidebarItem = ({ icon, label, href, isActive }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all",
        isActive 
          ? "bg-primary text-primary-foreground" 
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const routes = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <Users size={20} />,
      label: "Patients",
      href: "/patients",
    },
    {
      icon: <Calendar size={20} />,
      label: "Appointments",
      href: "/appointments",
    },
    {
      icon: <Stethoscope size={20} />,
      label: "Departments",
      href: "/departments",
    },
    {
      icon: <FileText size={20} />,
      label: "Reports",
      href: "/reports",
    },
    {
      icon: <ActivitySquare size={20} />,
      label: "Analytics",
      href: "/analytics",
    },
    {
      icon: <Brain size={20} />,
      label: "AI Insights",
      href: "/ai-insights",
    },
    {
      icon: <Settings size={20} />,
      label: "Settings",
      href: "/settings",
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-background h-screen transition-all duration-300 relative",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center h-16 px-4 border-b">
        {!collapsed && (
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">OH</span>
            </div>
            <span className="font-semibold text-xl tracking-tight">OneHealth</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className={cn(
            "h-8 w-8",
            collapsed ? "mx-auto" : "ml-auto"
          )}
        >
          {collapsed ? <Menu size={18} /> : <X size={18} />}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3">
        <nav className="space-y-1">
          {routes.map((route) => (
            <SidebarItem
              key={route.href}
              icon={route.icon}
              label={route.label}
              href={route.href}
              isActive={location.pathname === route.href}
            />
          ))}
        </nav>
      </div>

      {user && (
        <div className={cn(
          "border-t p-3",
          collapsed ? "items-center justify-center" : ""
        )}>
          <div className={cn(
            "flex items-center",
            collapsed ? "justify-center" : "gap-3"
          )}>
            <div className="h-8 w-8 rounded-full bg-secondary overflow-hidden">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="h-full w-full object-cover" 
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-primary">
                  <span className="text-primary-foreground font-medium text-xs">
                    {user.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground capitalize truncate">{user.role}</p>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={logout}
              title="Logout"
              className="h-8 w-8"
            >
              <LogOut size={18} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
