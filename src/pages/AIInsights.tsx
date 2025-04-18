
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, TrendingUp, AlertTriangle, Sparkles, Activity, Clock, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const AIInsights = () => {
  const [activeTab, setActiveTab] = useState("predictive");

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            AI Insights <Sparkles className="ml-2 h-5 w-5 text-yellow-500" />
          </h1>
          <p className="text-muted-foreground">
            AI-powered analytics and predictions to enhance patient care
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-1">
          <RefreshCw className="h-4 w-4" />
          <span>Refresh Insights</span>
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="predictive">Predictive Analytics</TabsTrigger>
          <TabsTrigger value="diagnostic">Diagnostic Support</TabsTrigger>
          <TabsTrigger value="operational">Operational Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="predictive" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg font-semibold">Readmission Risk Prediction</CardTitle>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                    <AlertTriangle className="mr-1 h-3 w-3" />
                    High Priority
                  </Badge>
                </div>
                <CardDescription>AI-predicted risk of patient readmissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Patient ID: P-23897</span>
                      <span className="font-medium text-destructive">76% risk</span>
                    </div>
                    <Progress value={76} className="h-2" indicatorClassName="bg-destructive" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Patient ID: P-45612</span>
                      <span className="font-medium text-yellow-600">42% risk</span>
                    </div>
                    <Progress value={42} className="h-2" indicatorClassName="bg-yellow-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Patient ID: P-78032</span>
                      <span className="font-medium text-green-600">18% risk</span>
                    </div>
                    <Progress value={18} className="h-2" indicatorClassName="bg-green-500" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-1">
                <p className="text-xs text-muted-foreground">Based on clinical history, social determinants, and post-discharge factors</p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Length of Stay Prediction</CardTitle>
                <CardDescription>AI-estimated patient hospital stays</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Cardiology</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>Avg. 5.2 days</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-600">-0.8 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Orthopedics</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>Avg. 7.4 days</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-red-500 transform rotate-180" />
                      <span className="text-sm text-red-600">+1.2 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Neurology</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>Avg. 6.8 days</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-600">-0.4 days</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-1">
                <p className="text-xs text-muted-foreground">Predictions based on diagnosis, patient characteristics, and treatment plans</p>
              </CardFooter>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Treatment Outcome Predictions</CardTitle>
                <CardDescription>AI predictions for treatment efficacy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted rounded-md p-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Cardiac Catheterization</span>
                        <Badge className="bg-green-100 text-green-800">94% success</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        For patients with acute coronary syndrome
                      </p>
                    </div>
                    <div className="bg-muted rounded-md p-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">ACL Reconstruction</span>
                        <Badge className="bg-green-100 text-green-800">89% success</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        For patients with complete ACL tears
                      </p>
                    </div>
                    <div className="bg-muted rounded-md p-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Chemotherapy Regimen A</span>
                        <Badge className="bg-yellow-100 text-yellow-800">68% success</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        For stage II breast cancer patients
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-1">
                <p className="text-xs text-muted-foreground">
                  Predictions based on clinical trials, historical outcomes, and patient-specific factors
                </p>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="diagnostic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Diagnostic Assistance</CardTitle>
              <CardDescription>
                AI-powered diagnostic suggestions and insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Diagnostic support features will be implemented in a future update.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="operational" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Operational AI Insights</CardTitle>
              <CardDescription>
                AI predictions for hospital operations and resource allocation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Operational AI features will be implemented in a future update.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIInsights;
