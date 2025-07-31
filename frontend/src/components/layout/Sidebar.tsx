import {
  LayoutDashboard,
  Camera,
  AlertTriangle,
  Settings,
} from "lucide-react";
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white w-64 p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <Link href="/" className="flex items-center hover:text-gray-500 dark:hover:text-gray-300">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/" className="flex items-center hover:text-gray-500 dark:hover:text-gray-300">
              <Camera className="mr-2 h-4 w-4" />
              Cameras
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="flex items-center hover:text-gray-500 dark:hover:text-gray-300">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Alerts
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="flex items-center hover:text-gray-500 dark:hover:text-gray-300">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
