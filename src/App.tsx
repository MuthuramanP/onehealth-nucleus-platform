
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { Layout } from "@/components/layout/Layout";

// Pages
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Departments from "./pages/Departments";
import Tasks from "./pages/Tasks";
import Staff from "./pages/Staff";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import AIInsights from "./pages/AIInsights";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/patients" element={<Layout><Patients /></Layout>} />
            <Route path="/appointments" element={<Layout><Appointments /></Layout>} />
            <Route path="/departments" element={<Layout><Departments /></Layout>} />
            <Route path="/tasks" element={<Layout><Tasks /></Layout>} />
            <Route path="/staff" element={<Layout><Staff /></Layout>} />
            <Route path="/inventory" element={<Layout><Inventory /></Layout>} />
            <Route path="/reports" element={<Layout><Reports /></Layout>} />
            <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
            <Route path="/ai-insights" element={<Layout><AIInsights /></Layout>} />
            <Route path="/settings" element={<Layout><Settings /></Layout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
