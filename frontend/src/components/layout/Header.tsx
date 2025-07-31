import React from "react";
import { ThemeToggle } from "../ThemeToggle";
import { User, LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">FireWatch AI</h1>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Link href="/profile">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
