import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  PieChart, 
  Shield, 
  Bell, 
  Target, 
  BarChart3,
  DollarSign,
  Wallet,
  CreditCard
} from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Wallet className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">FinanceTracker</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">About</Button>
          <Button variant="outline">Login</Button>
          <Button variant="hero">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Take Control of Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Financial Future</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Track expenses, set budgets, and achieve your savings goals with our intelligent personal finance manager. Get insights that help you make better financial decisions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Start Managing Finances
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Bank-level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>Smart Analytics</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Financial dashboard preview" 
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute -bottom-6 -left-6 p-4 bg-card rounded-xl shadow-card border">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-success">
                  <TrendingUp className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">Monthly Savings</p>
                  <p className="text-lg font-bold text-secondary">+$1,247</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Everything You Need to Manage Your Money
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to give you complete control over your financial life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <PieChart className="h-8 w-8" />,
              title: "Expense Tracking",
              description: "Categorize and track all your expenses with beautiful visualizations",
              gradient: "bg-gradient-primary"
            },
            {
              icon: <BarChart3 className="h-8 w-8" />,
              title: "Budget Management",
              description: "Set monthly budgets and get alerts when you're close to limits",
              gradient: "bg-gradient-success"
            },
            {
              icon: <Target className="h-8 w-8" />,
              title: "Savings Goals",
              description: "Track your progress towards financial goals with smart insights",
              gradient: "bg-gradient-accent"
            },
            {
              icon: <Bell className="h-8 w-8" />,
              title: "Smart Alerts",
              description: "Get notified about unusual spending and upcoming bills",
              gradient: "bg-gradient-primary"
            },
            {
              icon: <DollarSign className="h-8 w-8" />,
              title: "Income Tracking",
              description: "Monitor all income sources and track your financial growth",
              gradient: "bg-gradient-success"
            },
            {
              icon: <CreditCard className="h-8 w-8" />,
              title: "Multiple Accounts",
              description: "Connect and manage multiple bank accounts in one place",
              gradient: "bg-gradient-accent"
            }
          ].map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth cursor-pointer">
              <CardContent className="p-6 space-y-4">
                <div className={`p-3 rounded-lg ${feature.gradient} w-fit text-primary-foreground`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl bg-gradient-primary text-primary-foreground">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Transform Your Financial Life?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of users who have taken control of their finances with our smart personal finance manager.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Get Started Free
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 FinanceTracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;