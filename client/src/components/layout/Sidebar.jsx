import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarCheck,
  LogOut,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    hover: "hover:bg-blue-50",
    route: "/",
  },
  {
    title: "Employees",
    icon: Users,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    hover: "hover:bg-emerald-50",
    route: "/employees",
  },
  {
    title: "Departments",
    icon: Building2,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    hover: "hover:bg-violet-50",
    route: "/departments",
  },
  {
    title: "Attendance",
    icon: CalendarCheck,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    hover: "hover:bg-orange-50",
    route: "/attendance",
  },
];

export default function Sidebar() {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  }
  return (
    // <aside className="w-60 min-h-screen bg-white border-r border-slate-200">
    <aside className="flex w-60 min-h-screen flex-col bg-white border-r border-slate-200">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-[11px] border-b">
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
            <NavLink
              key={item.title}
              to={item.route}
              className={({ isActive }) => `
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
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : `text-slate-700 ${item.hover}`
    }
  `}
            >
              {({ isActive }) => (
                <>
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
            isActive
              ? "bg-white/20 text-white"
              : `${item.iconBg} ${item.iconColor}`
          }
        `}
                  >
                    <Icon size={18} strokeWidth={2.2} />
                  </div>

                  {item.title}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}

      <div className="mt-auto p-3">
        <div className="w-full">
          <button
            onClick={() => setLogoutOpen(true)}
            className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
          >
            <div
              className="
              flex h-8 w-8 items-center justify-center
              rounded-lg bg-red-100
              transition-transform duration-200
              group-hover:scale-110
            "
            >
              <LogOut size={18} />
            </div>
            Logout
          </button>
          <AlertDialog open={logoutOpen} onOpenChange={setLogoutOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Logout?</AlertDialogTitle>

                <AlertDialogDescription>
                  Are you sure you want to logout? You will need to login again
                  to access your account.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>

                <AlertDialogAction onClick={handleLogout}>
                  Logout
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </aside>
  );
}
