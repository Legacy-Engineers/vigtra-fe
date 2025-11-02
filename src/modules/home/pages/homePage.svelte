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
    import HomeSectionCards from '../components/homeSectionCards.svelte';
    import HomeChartAreaInteractive from '../components/homeChartAreaInteractive.svelte';
    import HomeDataTable from '../components/homeDataTable.svelte';

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


<div class="flex flex-1 flex-col">
      <div class="@container/main flex flex-1 flex-col gap-2">
        <div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <HomeSectionCards />
          <div class="px-4 lg:px-6">
            <HomeChartAreaInteractive />
          </div>
        </div>
        <HomeDataTable />
      </div>
    </div>
