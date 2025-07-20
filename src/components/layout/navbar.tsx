"use client";

import ModeToggle from "@/components/ui/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-border bg-background px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold">
          SheHub Website
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="cursor-pointer">Documentation</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[200px] bg-popover text-popover-foreground p-2 rounded-md shadow-lg border">
                <ul className="flex flex-col gap-1 cursor-pointer">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/documentation/project"
                        className="block px-3 py-2 rounded-md hover:bg-accent"
                      >
                        Project Overview
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/documentation/components"
                        className="block px-3 py-2 rounded-md hover:bg-accent"
                      >
                        Components
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <ModeToggle />
      </div>
    </header>
  );
}
