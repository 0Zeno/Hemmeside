import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import NavLink from "./site-header";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export default function DropdownMenuButton() {
  return (
    <Button variant="outline" size="icon">
      <DropdownMenu>
        <DropdownMenuTrigger className="absolute"><MenuIcon /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            {routes.map((route) => {
              return (
                <Button key={route.name} variant="outline" size="default">
                  <NavLink href={route.href}>{route.name}</NavLink>
                </Button>
              );
            })}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Button>
  );
}
