import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => {
  const [currentView, setCurrentView] = useState('landing');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen">
            <div className="hidden lg:block lg:w-64 lg:border-r lg:border-border lg:bg-card">
              <Navigation currentView={currentView} onViewChange={setCurrentView} />
            </div>
            <div className="flex-1 pb-16 lg:pb-0">
              {renderCurrentView()}
            </div>
            <div className="lg:hidden">
              <Navigation currentView={currentView} onViewChange={setCurrentView} />
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
