import Link from "next/link";
import { LayoutGridIcon, BarChart3Icon, LayoutDashboard } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-6">
        <nav>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-100"
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/pools"
            className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-100"
          >
            <LayoutGridIcon className="h-5 w-5" />
            <span>Available Pools</span>
          </Link>

          <Link
            href="/investments"
            className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-100"
          >
            <BarChart3Icon className="h-5 w-5" />
            <span>Your Investments</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
