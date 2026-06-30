import StatsCard from "@/components/dashboard/StatsCard";
import RecentEmployees from "@/components/dashboard/RecentEmployees";
import AttendanceSummary from "@/components/dashboard/AttendanceSummary";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import DepartmentOverview from "@/components/dashboard/DepartmentOverview";
import QuickActions from "@/components/dashboard/QuickActions";

import { Users, Building2, CalendarCheck, BadgeDollarSign } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-4">
      {/* Welcome */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, Hamza 👋
          </h1>

          <p className="text-muted-foreground mt-1">
            Here's what's happening in your company today.
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 px-4 py-2">
          <p className="text-sm text-blue-700 font-medium">Tuesday, 30 June</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatsCard
          title="Employees"
          value={120}
          subtitle="+5 this month"
          icon={Users}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
        />

        <StatsCard
          title="Departments"
          value={8}
          subtitle="Active departments"
          icon={Building2}
          iconBg="bg-violet-100"
          iconColor="text-violet-600"
        />

        <StatsCard
          title="Present Today"
          value={105}
          subtitle="87% attendance"
          icon={CalendarCheck}
          iconBg="bg-green-100"
          iconColor="text-green-600"
        />

        <StatsCard
          title="$42K"
          value="$42K"
          subtitle="This month"
          icon={BadgeDollarSign}
          iconBg="bg-amber-100"
          iconColor="text-amber-600"
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <RecentEmployees />
        </div>

        <div className="col-span-4">
          <AttendanceSummary />
        </div>
      </div>

      {/* Activity */}
      <ActivityFeed />

      {/* Bottom */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <DepartmentOverview />
        </div>

        <div className="col-span-4">
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
