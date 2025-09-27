import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard, 
  Target, 
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  PieChart
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart as RechartsPieChart, Cell, Pie } from "recharts";

const Dashboard = () => {
  // Mock data for charts
  const monthlyData = [
    { name: 'Jan', income: 4000, expenses: 2400 },
    { name: 'Feb', income: 3000, expenses: 2100 },
    { name: 'Mar', income: 4500, expenses: 2800 },
    { name: 'Apr', income: 4200, expenses: 2600 },
    { name: 'May', income: 4800, expenses: 3200 },
    { name: 'Jun', income: 5000, expenses: 3100 },
  ];

  const expenseCategories = [
    { name: 'Food', value: 1200, color: 'hsl(217, 91%, 60%)' },
    { name: 'Transport', value: 800, color: 'hsl(142, 76%, 36%)' },
    { name: 'Shopping', value: 600, color: 'hsl(25, 95%, 53%)' },
    { name: 'Bills', value: 400, color: 'hsl(0, 84%, 60%)' },
    { name: 'Entertainment', value: 300, color: 'hsl(217, 91%, 70%)' },
  ];

  const budgets = [
    { category: 'Food & Dining', spent: 1200, budget: 1500, color: 'bg-gradient-primary' },
    { category: 'Transportation', spent: 800, budget: 1000, color: 'bg-gradient-success' },
    { category: 'Shopping', spent: 600, budget: 800, color: 'bg-gradient-accent' },
    { category: 'Bills & Utilities', spent: 400, budget: 600, color: 'bg-primary' },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Wallet className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, Alex!</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Transaction
              </Button>
              <Button variant="hero" size="sm">
                View Reports
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Financial Overview Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Balance</p>
                  <p className="text-2xl font-bold text-foreground">$12,847</p>
                  <div className="flex items-center gap-1 text-sm text-secondary mt-1">
                    <TrendingUp className="h-3 w-3" />
                    <span>+12% from last month</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <DollarSign className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Monthly Income</p>
                  <p className="text-2xl font-bold text-foreground">$5,000</p>
                  <div className="flex items-center gap-1 text-sm text-secondary mt-1">
                    <ArrowUpRight className="h-3 w-3" />
                    <span>+8% increase</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-gradient-success">
                  <TrendingUp className="h-6 w-6 text-secondary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Monthly Expenses</p>
                  <p className="text-2xl font-bold text-foreground">$3,100</p>
                  <div className="flex items-center gap-1 text-sm text-destructive mt-1">
                    <ArrowDownRight className="h-3 w-3" />
                    <span>-5% from last month</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-gradient-accent">
                  <CreditCard className="h-6 w-6 text-accent-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Savings Goal</p>
                  <p className="text-2xl font-bold text-foreground">$8,500</p>
                  <div className="flex items-center gap-1 text-sm text-secondary mt-1">
                    <Target className="h-3 w-3" />
                    <span>85% complete</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-primary">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Income vs Expenses Chart */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-primary" />
                Income vs Expenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="income" fill="hsl(142, 76%, 36%)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="hsl(25, 95%, 53%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Expense Categories Chart */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-primary" />
                Expense Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={expenseCategories}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                    >
                      {expenseCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {expenseCategories.map((category, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-sm text-muted-foreground">{category.name}</span>
                    <span className="text-sm font-medium">${category.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Budget Progress */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Budget Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {budgets.map((budget, index) => {
              const percentage = (budget.spent / budget.budget) * 100;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{budget.category}</span>
                    <span className="text-sm text-muted-foreground">
                      ${budget.spent} / ${budget.budget}
                    </span>
                  </div>
                  <Progress value={percentage} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{percentage.toFixed(0)}% used</span>
                    <span>${budget.budget - budget.spent} remaining</span>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;