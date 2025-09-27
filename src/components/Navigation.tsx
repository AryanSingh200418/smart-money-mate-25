import { Button } from "@/components/ui/button";
import { 
  Home, 
  PlusCircle, 
  BarChart3, 
  Target, 
  Settings,
  Wallet 
} from "lucide-react";

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
  const navItems = [
    { id: 'landing', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'add-transaction', label: 'Add Transaction', icon: PlusCircle },
    { id: 'goals', label: 'Goals', icon: Target },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-elegant lg:relative lg:bottom-auto lg:left-auto lg:right-auto lg:border-t-0 lg:shadow-none">
      <div className="flex justify-around items-center py-2 px-4 lg:flex-col lg:space-y-2 lg:py-4">
        <div className="hidden lg:block mb-6">
          <div className="flex items-center gap-2 px-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Wallet className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">FinanceTracker</span>
          </div>
        </div>
        
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange(item.id)}
              className={`flex-col lg:flex-row lg:w-full lg:justify-start gap-1 lg:gap-2 h-auto py-2 lg:py-2 ${
                isActive ? 'shadow-elegant' : ''
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-xs lg:text-sm">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;