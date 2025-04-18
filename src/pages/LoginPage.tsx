
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Brain, Hospital } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { user, login } = useAuth();
  const { toast } = useToast();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    setIsLoggingIn(true);
    
    try {
      const success = await login(email, password);
      
      if (!success) {
        setError("Invalid email or password");
        return;
      }
      
      toast({
        description: "Successfully logged in",
      });
    } catch (err) {
      setError("An error occurred during login");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const demoUsers = [
    { role: "Admin", email: "admin@onehealth.com", password: "admin123" },
    { role: "Doctor", email: "doctor@onehealth.com", password: "doctor123" },
    { role: "Nurse", email: "nurse@onehealth.com", password: "nurse123" },
    { role: "Patient", email: "patient@onehealth.com", password: "patient123" },
    { role: "Receptionist", email: "receptionist@onehealth.com", password: "receptionist123" },
  ];

  const handleDemoLogin = (demoEmail: string, demoPassword: string) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
              <Hospital className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-bold">OneHealth Platform</h1>
          <p className="text-muted-foreground mt-2">
            AI-powered healthcare management
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Forgot password?
                  </Button>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoggingIn}
              >
                {isLoggingIn ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="flex items-center gap-2 mt-2 w-full">
              <div className="h-px bg-border flex-1" />
              <span className="text-xs text-muted-foreground">OR USE DEMO ACCOUNTS</span>
              <div className="h-px bg-border flex-1" />
            </div>
            
            <div className="mt-4 w-full">
              <Tabs defaultValue="admin">
                <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-4">
                  {demoUsers.map((user) => (
                    <TabsTrigger key={user.role} value={user.role.toLowerCase()}>
                      {user.role}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {demoUsers.map((user) => (
                  <TabsContent key={user.role} value={user.role.toLowerCase()}>
                    <div className="space-y-4">
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div>Email: <span className="font-mono">{user.email}</span></div>
                        <div>Password: <span className="font-mono">{user.password}</span></div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleDemoLogin(user.email, user.password)}
                      >
                        Login as {user.role}
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </CardFooter>
        </Card>

        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
          <Brain size={16} />
          <span>AI-Enhanced Healthcare Management Platform</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
