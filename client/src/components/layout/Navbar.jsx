import { Search, Bell } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header
      className="
        h-16 
        flex 
        items-center 
        justify-between 
        px-6 
        border-b

        bg-white 
        border-slate-200 
        text-slate-900

        dark:bg-zinc-900 
        dark:border-zinc-800 
        dark:text-white
      "
    >
      {/* Left */}
      <div>
        <h1 className="text-xl font-bold">Dashboard</h1>

        <p className="text-sm text-slate-500 dark:text-zinc-400">
          Welcome back, Hamza 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search
            size={18}
            className="
              absolute left-3 top-1/2 -translate-y-1/2 
              text-slate-400 
              dark:text-zinc-500
            "
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              w-72 
              rounded-xl 
              border 
              py-2 pl-10 pr-4 
              text-sm 
              outline-none 
              transition-all

              bg-slate-50 
              border-slate-200 
              text-slate-900

              focus:border-blue-500 
              focus:bg-white

              dark:bg-zinc-800 
              dark:border-zinc-700 
              dark:text-white 
              dark:focus:bg-zinc-900 
              dark:focus:border-blue-400
            "
          />
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notification */}
        <button
          className="
            flex h-10 w-10 items-center justify-center 
            rounded-xl border 
            transition

            bg-white 
            border-slate-200 
            hover:bg-slate-100

            dark:bg-zinc-800 
            dark:border-zinc-700 
            dark:hover:bg-zinc-700
          "
        >
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
            <p className="text-sm font-semibold">
              Hamza Khalid
            </p>

            <p className="text-xs text-slate-500 dark:text-zinc-400">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}