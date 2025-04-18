
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

// User personas
export type UserRole = "doctor" | "nurse" | "admin" | "patient" | "receptionist";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Sample users for demonstration
const DEMO_USERS: Record<string, User & { password: string }> = {
  "admin@onehealth.com": {
    id: "admin-1",
    name: "Sarah Johnson",
    email: "admin@onehealth.com",
    role: "admin",
    password: "admin123",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  "doctor@onehealth.com": {
    id: "doctor-1",
    name: "Dr. Michael Chen",
    email: "doctor@onehealth.com",
    role: "doctor",
    password: "doctor123",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  "nurse@onehealth.com": {
    id: "nurse-1",
    name: "Rebecca Martinez",
    email: "nurse@onehealth.com",
    role: "nurse",
    password: "nurse123",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg"
  },
  "patient@onehealth.com": {
    id: "patient-1",
    name: "James Wilson",
    email: "patient@onehealth.com",
    role: "patient",
    password: "patient123",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg"
  },
  "receptionist@onehealth.com": {
    id: "receptionist-1",
    name: "Alice Thompson",
    email: "receptionist@onehealth.com",
    role: "receptionist",
    password: "receptionist123",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg"
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in local storage
    const savedUser = localStorage.getItem("onehealth_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem("onehealth_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const userRecord = DEMO_USERS[email.toLowerCase()];
    
    if (userRecord && userRecord.password === password) {
      // Remove password from stored user data
      const { password: _, ...safeUserData } = userRecord;
      setUser(safeUserData);
      localStorage.setItem("onehealth_user", JSON.stringify(safeUserData));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("onehealth_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
