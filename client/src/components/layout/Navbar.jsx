import { Search, Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      {/* Left */}
      <div>
        <h1 className="text-xl font-bold text-slate-800">Dashboard</h1>

        <p className="text-sm text-slate-500">Welcome back, Hamza 👋</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}

        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white"
          />
        </div>

        {/* Notification */}

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-100">
          <Bell size={18} />
        </button>

        {/* Avatar */}

        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-blue-600 text-white">
              HK
            </AvatarFallback>
          </Avatar>

          <div className="hidden lg:block">
            <p className="text-sm font-semibold text-slate-800">Hamza Khalid</p>

            <p className="text-xs text-slate-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}
