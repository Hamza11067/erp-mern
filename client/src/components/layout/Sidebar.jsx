import {
  LayoutDashboard,
  Users,
  UserRound,
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
} from "@/components/ui/alert-dialog";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    color: "blue",
    route: "/",
  },
  {
    title: "Employees",
    icon: Users,
    color: "emerald",
    route: "/employees",
  },
  {
    title: "Customers",
    icon: UserRound,
    color: "cyan",
    route: "/customers",
  },
  {
    title: "Departments",
    icon: Building2,
    color: "violet",
    route: "/departments",
  },
  {
    title: "Attendance",
    icon: CalendarCheck,
    color: "orange",
    route: "/attendance",
  },
];

const colorVariants = {
  blue: {
    icon: "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
    hover: "hover:bg-blue-500/10",
  },

  emerald: {
    icon: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
    hover: "hover:bg-emerald-500/10",
  },

  cyan: {
    icon: "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400",
    hover: "hover:bg-cyan-500/10",
  },

  violet: {
    icon: "bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400",
    hover: "hover:bg-violet-500/10",
  },

  orange: {
    icon: "bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400",
    hover: "hover:bg-orange-500/10",
  },
};

export default function Sidebar() {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  }

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 via-indigo-600 to-violet-600 font-bold text-white shadow-md">
          E
        </div>

        <div>
          <h2 className="sidebar-title">ERP System</h2>
          <p className="sidebar-subtitle">Enterprise Suite</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1.5 p-3">
        {menu.map((item) => {
          const Icon = item.icon;
          const variant = colorVariants[item.color];

          return (
            <NavLink
              key={item.title}
              to={item.route}
              className={({ isActive }) =>
                `group ${
                  isActive
                    ? "sidebar-item sidebar-item-active"
                    : `sidebar-item ${variant.hover}`
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`sidebar-icon group-hover:scale-110 ${
                      isActive
                        ? "sidebar-icon-active"
                        : `${variant.icon}`
                    }`}
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
        <button
          onClick={() => setLogoutOpen(true)}
          className="group logout-button"
        >
          <div className="logout-icon group-hover:scale-110">
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
    </aside>
  );
}