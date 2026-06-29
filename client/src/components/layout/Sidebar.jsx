import { LayoutDashboard, Users, Building2, CalendarCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    active: true,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    hover: "hover:bg-blue-50",
  },
  {
    title: "Employees",
    icon: Users,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    hover: "hover:bg-emerald-50",
  },
  {
    title: "Departments",
    icon: Building2,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    hover: "hover:bg-violet-50",
  },
  {
    title: "Attendance",
    icon: CalendarCheck,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hover: "hover:bg-orange-50",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-60 min-h-screen bg-white border-r border-slate-200">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-4 border-b">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white font-bold shadow-md">
          E
        </div>

        <div>
          <h2 className="text-base font-bold tracking-tight text-slate-800">
            ERP System
          </h2>
          <p className="text-[11px] text-slate-500">Enterprise Suite</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-1.5">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className={`
                group
                flex
                items-center
                gap-3
                w-full
                rounded-xl
                px-3
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-200

                ${
                  item.active
                    ? "bg-blue-600 text-white shadow-md"
                    : `text-slate-700 ${item.hover}`
                }
              `}
            >
              <div
                className={`
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  transition-transform
                  duration-200
                  group-hover:scale-110

                  ${
                    item.active
                      ? "bg-white/20 text-white"
                      : `${item.iconBg} ${item.iconColor}`
                  }
                `}
              >
                <Icon size={18} strokeWidth={2.2} />
              </div>

              {item.title}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
