import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
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
  PieChart,
  Calendar,
  Bell,
  AlertCircle,
  CheckCircle,
  Clock,
  ShoppingCart,
  Car,
  Home,
  Coffee,
  Zap,
  Phone,
  Heart,
  Filter,
  Download,
  BarChart
} from "lucide-react";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart as RechartsPieChart, Cell, Pie, AreaChart, Area } from "recharts";

const Dashboard = () => {
  // Mock data for comprehensive financial tracking
  const monthlyData = [
    { name: 'Jan', income: 4000, expenses: 2400, savings: 1600 },
    { name: 'Feb', income: 3000, expenses: 2100, savings: 900 },
    { name: 'Mar', income: 4500, expenses: 2800, savings: 1700 },
    { name: 'Apr', income: 4200, expenses: 2600, savings: 1600 },
    { name: 'May', income: 4800, expenses: 3200, savings: 1600 },
    { name: 'Jun', income: 5000, expenses: 3100, savings: 1900 },
  ];

  const expenseCategories = [
    { name: 'Food & Dining', value: 1200, color: 'hsl(217, 91%, 60%)', budget: 1500 },
    { name: 'Transportation', value: 800, color: 'hsl(142, 76%, 36%)', budget: 1000 },
    { name: 'Shopping', value: 600, color: 'hsl(25, 95%, 53%)', budget: 800 },
    { name: 'Bills & Utilities', value: 450, color: 'hsl(0, 84%, 60%)', budget: 600 },
    { name: 'Entertainment', value: 350, color: 'hsl(217, 91%, 70%)', budget: 400 },
    { name: 'Healthcare', value: 200, color: 'hsl(142, 76%, 46%)', budget: 300 },
  ];

  const recentTransactions = [
    { id: 1, date: '2024-01-15', description: 'Grocery Shopping', category: 'Food & Dining', amount: -127.50, icon: ShoppingCart },
    { id: 2, date: '2024-01-14', description: 'Salary Deposit', category: 'Income', amount: 5000.00, icon: DollarSign },
    { id: 3, date: '2024-01-13', description: 'Gas Station', category: 'Transportation', amount: -45.20, icon: Car },
    { id: 4, date: '2024-01-12', description: 'Netflix Subscription', category: 'Entertainment', amount: -15.99, icon: Calendar },
    { id: 5, date: '2024-01-11', description: 'Coffee Shop', category: 'Food & Dining', amount: -4.50, icon: Coffee },
    { id: 6, date: '2024-01-10', description: 'Electricity Bill', category: 'Bills & Utilities', amount: -89.30, icon: Zap },
    { id: 7, date: '2024-01-09', description: 'Freelance Payment', category: 'Income', amount: 750.00, icon: DollarSign },
    { id: 8, date: '2024-01-08', description: 'Phone Bill', category: 'Bills & Utilities', amount: -55.00, icon: Phone },
  ];

  const savingsGoals = [
    { name: 'Emergency Fund', current: 8500, target: 15000, color: 'bg-gradient-primary', priority: 'High' },
    { name: 'Vacation Trip', current: 2300, target: 5000, color: 'bg-gradient-success', priority: 'Medium' },
    { name: 'New Car', current: 12000, target: 25000, color: 'bg-gradient-accent', priority: 'Low' },
    { name: 'Home Down Payment', current: 35000, target: 60000, color: 'bg-primary', priority: 'High' },
  ];

  const upcomingBills = [
    { name: 'Rent', amount: 1200, dueDate: '2024-01-28', status: 'pending', icon: Home },
    { name: 'Credit Card', amount: 450, dueDate: '2024-01-25', status: 'overdue', icon: CreditCard },
    { name: 'Internet', amount: 75, dueDate: '2024-02-01', status: 'pending', icon: Zap },
    { name: 'Insurance', amount: 180, dueDate: '2024-02-05', status: 'pending', icon: Heart },
  ];

  const financialHealthScore = 78;
  const creditScore = 742;

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
                <h1 className="text-2xl font-bold text-foreground">Personal Finance Dashboard</h1>
                <p className="text-sm text-muted-foreground">Complete overview of your financial health</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="hero" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Transaction
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Financial Health & Alerts */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Financial Health</h3>
                <Badge variant="secondary">{financialHealthScore}/100</Badge>
              </div>
              <div className="space-y-3">
                <Progress value={financialHealthScore} className="h-3" />
                <p className="text-sm text-muted-foreground">Good financial health! Keep up the savings momentum.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Credit Score</h3>
                <Badge variant="secondary">{creditScore}</Badge>
              </div>
              <div className="space-y-3">
                <Progress value={(creditScore / 850) * 100} className="h-3" />
                <p className="text-sm text-muted-foreground">Excellent credit score! You qualify for best rates.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-destructive/20 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <h3 className="font-semibold text-foreground">Alerts</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-destructive">
                  <Clock className="h-3 w-3" />
                  <span>Credit card payment overdue</span>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <Bell className="h-3 w-3" />
                  <span>Rent due in 3 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Overview Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Balance</p>
                  <p className="text-2xl font-bold text-foreground">$47,385</p>
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
                  <p className="text-2xl font-bold text-foreground">$5,750</p>
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
                  <p className="text-2xl font-bold text-foreground">$3,600</p>
                  <div className="flex items-center gap-1 text-sm text-destructive mt-1">
                    <ArrowDownRight className="h-3 w-3" />
                    <span>+5% from last month</span>
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
                  <p className="text-sm font-medium text-muted-foreground">Net Savings</p>
                  <p className="text-2xl font-bold text-foreground">$2,150</p>
                  <div className="flex items-center gap-1 text-sm text-secondary mt-1">
                    <Target className="h-3 w-3" />
                    <span>37% of income</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-primary">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Transactions</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {recentTransactions.map((transaction) => {
                    const Icon = transaction.icon;
                    const isIncome = transaction.amount > 0;
                    return (
                      <div key={transaction.id} className="flex items-center justify-between p-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-smooth">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${isIncome ? 'bg-gradient-success' : 'bg-muted'}`}>
                            <Icon className={`h-4 w-4 ${isIncome ? 'text-secondary-foreground' : 'text-muted-foreground'}`} />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{transaction.description}</p>
                            <p className="text-sm text-muted-foreground">{transaction.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${isIncome ? 'text-secondary' : 'text-foreground'}`}>
                            {isIncome ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                          </p>
                          <p className="text-sm text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Bills */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Bills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingBills.map((bill, index) => {
                const Icon = bill.icon;
                const isOverdue = bill.status === 'overdue';
                return (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg border ${isOverdue ? 'border-destructive/20 bg-destructive/5' : 'border-border bg-muted/30'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isOverdue ? 'bg-destructive' : 'bg-primary'}`}>
                        <Icon className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{bill.name}</p>
                        <p className="text-sm text-muted-foreground">Due {bill.dueDate}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">${bill.amount}</p>
                      <Badge variant={isOverdue ? "destructive" : "secondary"}>
                        {isOverdue ? 'Overdue' : 'Pending'}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Income vs Expenses Trend */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-primary" />
                Income vs Expenses Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Area type="monotone" dataKey="income" stackId="1" stroke="hsl(142, 76%, 36%)" fill="hsl(142, 76%, 36%)" />
                    <Area type="monotone" dataKey="expenses" stackId="2" stroke="hsl(25, 95%, 53%)" fill="hsl(25, 95%, 53%)" />
                    <Area type="monotone" dataKey="savings" stackId="3" stroke="hsl(217, 91%, 60%)" fill="hsl(217, 91%, 60%)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Expense Categories */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-primary" />
                Expense Breakdown
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
              <div className="grid grid-cols-1 gap-3 mt-4">
                {expenseCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <div className="text-right text-sm">
                      <span className="font-semibold">${category.value}</span>
                      <span className="text-muted-foreground ml-2">/ ${category.budget}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Savings Goals */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Savings Goals Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {savingsGoals.map((goal, index) => {
                const percentage = (goal.current / goal.target) * 100;
                return (
                  <div key={index} className="space-y-3 p-4 rounded-lg bg-gradient-subtle border border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{goal.name}</h4>
                        <Badge variant={goal.priority === 'High' ? 'destructive' : goal.priority === 'Medium' ? 'default' : 'secondary'}>
                          {goal.priority} Priority
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">${goal.current.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">of ${goal.target.toLocaleString()}</p>
                      </div>
                    </div>
                    <Progress value={percentage} className="h-3" />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{percentage.toFixed(0)}% complete</span>
                      <span className="text-secondary font-medium">${(goal.target - goal.current).toLocaleString()} remaining</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Budget Tracking */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Monthly Budget Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {expenseCategories.map((category, index) => {
              const percentage = (category.value / category.budget) * 100;
              const isOverBudget = percentage > 100;
              return (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="font-medium text-foreground">{category.name}</span>
                      {isOverBudget && <AlertCircle className="h-4 w-4 text-destructive" />}
                    </div>
                    <div className="text-right">
                      <span className={`font-semibold ${isOverBudget ? 'text-destructive' : 'text-foreground'}`}>
                        ${category.value}
                      </span>
                      <span className="text-muted-foreground ml-2">/ ${category.budget}</span>
                    </div>
                  </div>
                  <Progress value={Math.min(percentage, 100)} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className={`${isOverBudget ? 'text-destructive' : 'text-muted-foreground'}`}>
                      {percentage.toFixed(0)}% {isOverBudget ? 'over budget' : 'used'}
                    </span>
                    <span className={`font-medium ${isOverBudget ? 'text-destructive' : 'text-secondary'}`}>
                      ${isOverBudget ? 0 : (category.budget - category.value)} remaining
                    </span>
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