<script lang="ts">
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { Badge } from '$lib/components/ui/badge';
  import { Progress } from '$lib/components/ui/progress';
  import * as Chart from '$lib/components/ui/chart/index.js';
  import { scaleBand, scaleLinear } from 'd3-scale';
  import { BarChart, LineChart } from 'layerchart';
  import {
    TrendingUp,
    Users,
    FileCheck,
    Shield,
    AlertTriangle,
    Calendar,
    ArrowUpRight,
    Download,
    MoreHorizontal,
  } from '@lucide/svelte';

  // Insurance metrics data
  const metrics = [
    {
      title: 'Total Policies',
      value: '2,847',
      change: '+12.5%',
      trend: 'up',
      icon: Shield,
      description: 'Active insurance policies',
    },
    {
      title: 'Claims This Month',
      value: '47',
      change: '-3.2%',
      trend: 'down',
      icon: FileCheck,
      description: 'Claims processed',
    },
    {
      title: 'Customer Satisfaction',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      icon: Users,
      description: 'Customer rating',
    },
    {
      title: 'Pending Reviews',
      value: '23',
      change: '+5.6%',
      trend: 'up',
      icon: AlertTriangle,
      description: 'Requires attention',
    },
  ];

  // Claims data for bar chart
  const claimsData = [
    { month: 'Jan', auto: 45, home: 32, health: 28, life: 12 },
    { month: 'Feb', auto: 52, home: 38, health: 31, life: 15 },
    { month: 'Mar', auto: 48, home: 35, health: 29, life: 14 },
    { month: 'Apr', auto: 61, home: 42, health: 35, life: 18 },
    { month: 'May', auto: 55, home: 39, health: 32, life: 16 },
    { month: 'Jun', auto: 58, home: 41, health: 34, life: 17 },
  ];

  const claimsConfig = {
    auto: {
      label: 'Auto Insurance',
      color: '#3b82f6',
    },
    home: {
      label: 'Home Insurance',
      color: '#10b981',
    },
    health: {
      label: 'Health Insurance',
      color: '#8b5cf6',
    },
    life: {
      label: 'Life Insurance',
      color: '#f59e0b',
    },
  } satisfies Chart.ChartConfig;

  // Revenue growth data for line chart
  const revenueData = [
    { month: 'Jan', revenue: 1250000, claims: 450000 },
    { month: 'Feb', revenue: 1320000, claims: 520000 },
    { month: 'Mar', revenue: 1410000, claims: 480000 },
    { month: 'Apr', revenue: 1580000, claims: 610000 },
    { month: 'May', revenue: 1490000, claims: 550000 },
    { month: 'Jun', revenue: 1630000, claims: 580000 },
  ];

  // Recent claims data
  const recentClaims = [
    {
      id: 'CL-2024-001',
      customer: 'Sarah Johnson',
      type: 'Auto',
      amount: '$4,250',
      status: 'approved',
      date: '2024-06-15',
      progress: 100,
    },
    {
      id: 'CL-2024-002',
      customer: 'Michael Chen',
      type: 'Home',
      amount: '$12,800',
      status: 'processing',
      date: '2024-06-14',
      progress: 65,
    },
    {
      id: 'CL-2024-003',
      customer: 'Emma Davis',
      type: 'Health',
      amount: '$2,150',
      status: 'pending',
      date: '2024-06-13',
      progress: 30,
    },
    {
      id: 'CL-2024-004',
      customer: 'Robert Wilson',
      type: 'Life',
      amount: '$50,000',
      status: 'processing',
      date: '2024-06-12',
      progress: 80,
    },
  ];

  // Policy types distribution
  const policyDistribution = [
    { type: 'Auto', count: 1247, percentage: 44 },
    { type: 'Home', count: 856, percentage: 30 },
    { type: 'Health', count: 542, percentage: 19 },
    { type: 'Life', count: 202, percentage: 7 },
  ];

  function getStatusBadge(status: string) {
    const variants = {
      approved: 'bg-green-100 text-green-800',
      processing: 'bg-blue-100 text-blue-800',
      pending: 'bg-yellow-100 text-yellow-800',
      denied: 'bg-red-100 text-red-800',
    };
    return (
      variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800'
    );
  }

  function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }

</script>

<div class="min-h-screen bg-gray-50/30">
  <!-- Header -->
  <header class="border-b bg-white">
    <div class="mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Insurance Dashboard</h1>
          <p class="text-gray-600">
            Welcome back! Here's your overview for today.
          </p>
        </div>
        <div class="flex items-center gap-4">
          <Button variant="outline" class="gap-2">
            <Download class="h-4 w-4" />
            Export Report
          </Button>
          <Button class="gap-2">
            <Calendar class="h-4 w-4" />
            New Claim
          </Button>
        </div>
      </div>
    </div>
  </header>

  <main class=" mx-auto px-6 py-8">
    <!-- Key Metrics Grid -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {#each metrics as metric}
        <Card class="relative overflow-hidden">
          <CardHeader
            class="flex flex-row items-center justify-between space-y-0 pb-2"
          >
            <CardTitle class="text-sm font-medium">{metric.title}</CardTitle>
            <div class="h-4 w-4 text-muted-foreground">
              <svelte:component this={metric.icon} />
            </div>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">{metric.value}</div>
            <div class="flex items-center gap-1 text-xs">
              {#if metric.trend === 'up'}
                <TrendingUp class="h-3 w-3 text-green-600" />
                <span class="text-green-600">{metric.change}</span>
              {:else}
                <TrendingUp class="h-3 w-3 text-red-600 rotate-180" />
                <span class="text-red-600">{metric.change}</span>
              {/if}
              <span class="text-muted-foreground">from last month</span>
            </div>
            <p class="text-xs text-muted-foreground mt-1">
              {metric.description}
            </p>
          </CardContent>
        </Card>
      {/each}
    </div>

    <!-- Charts Grid -->
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
      <!-- Claims by Type Chart -->
      <Card>
        <CardHeader>
          <CardTitle>Claims by Insurance Type</CardTitle>
          <CardDescription
            >Monthly claims distribution across different insurance products</CardDescription
          >
        </CardHeader>
        <CardContent>
          <Chart.Container
            config={claimsConfig}
            class="min-h-[300px] w-full overflow-hidden px-10"
          >
            <BarChart
              data={claimsData}
              xScale={scaleBand().padding(0.3)}
              x="month"
              axis="x"
              seriesLayout="group"
              tooltip={true}
              series={[
                {
                  key: 'auto',
                  label: claimsConfig.auto.label,
                  color: claimsConfig.auto.color,
                },
                {
                  key: 'home',
                  label: claimsConfig.home.label,
                  color: claimsConfig.home.color,
                },
                {
                  key: 'health',
                  label: claimsConfig.health.label,
                  color: claimsConfig.health.color,
                },
                {
                  key: 'life',
                  label: claimsConfig.life.label,
                  color: claimsConfig.life.color,
                },
              ]}
            />
          </Chart.Container>
        </CardContent>
      </Card>

      <!-- Revenue vs Claims Chart -->
      <Card>
        <CardHeader>
          <CardTitle>Revenue vs Claims Payout</CardTitle>
          <CardDescription
            >Monthly financial performance overview</CardDescription
          >
        </CardHeader>
        <CardContent>
          <Chart.Container class="min-h-[300px] w-full">
            <LineChart
              data={revenueData}
              x="month"
              xScale={scaleBand().padding(0.3)}
              series={[
                {
                  key: 'revenue',
                  label: 'Revenue',
                  color: '#10b981',
                  strokeWidth: 2,
                },
                {
                  key: 'claims',
                  label: 'Claims Payout',
                  color: '#ef4444',
                  strokeWidth: 2,
                },
              ]}
              yTickFormat={(d) => `$${d / 1000}k`}
            />
          </Chart.Container>
        </CardContent>
      </Card>
    </div>

    <!-- Bottom Grid -->
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <!-- Recent Claims -->
      <Card class="lg:col-span-2">
        <CardHeader>
          <div class="flex items-center justify-between">
            <div>
              <CardTitle>Recent Claims</CardTitle>
              <CardDescription
                >Latest insurance claims requiring attention</CardDescription
              >
            </div>
            <Button variant="ghost" size="sm" class="gap-2">
              View All
              <ArrowUpRight class="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            {#each recentClaims as claim}
              <div
                class="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <p class="font-medium text-sm">{claim.id}</p>
                    <Badge class={getStatusBadge(claim.status)}>
                      {claim.status}
                    </Badge>
                  </div>
                  <p class="text-sm text-muted-foreground">{claim.customer}</p>
                  <div
                    class="flex items-center gap-4 text-xs text-muted-foreground"
                  >
                    <span>{claim.type} Insurance</span>
                    <span>{claim.amount}</span>
                    <span>{claim.date}</span>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-24">
                    <Progress value={claim.progress} class="h-2" />
                  </div>
                  <Button variant="ghost" size="sm" class="h-8 w-8 p-0">
                    <MoreHorizontal class="h-4 w-4" />
                  </Button>
                </div>
              </div>
            {/each}
          </div>
        </CardContent>
      </Card>

      <!-- Policy Distribution -->
      <Card>
        <CardHeader>
          <CardTitle>Policy Distribution</CardTitle>
          <CardDescription>Active policies by type</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            {#each policyDistribution as policy}
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium">{policy.type}</span>
                  <span class="text-sm text-muted-foreground"
                    >{policy.percentage}%</span
                  >
                </div>
                <Progress value={policy.percentage} class="h-2" />
                <div class="flex justify-between text-xs text-muted-foreground">
                  <span>{policy.count.toLocaleString()} policies</span>
                  <span>{policy.percentage}% of total</span>
                </div>
              </div>
            {/each}
          </div>

          <!-- Quick Stats -->
          <div class="mt-6 space-y-3 rounded-lg border bg-muted/50 p-4">
            <div class="flex justify-between">
              <span class="text-sm">Total Premiums</span>
              <span class="text-sm font-medium">{formatCurrency(4560000)}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm">Avg Claim Time</span>
              <span class="text-sm font-medium">4.2 days</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm">Renewal Rate</span>
              <span class="text-sm font-medium">92.7%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </main>
</div>

<style>
  .container {
    max-width: 1400px;
  }
</style>
