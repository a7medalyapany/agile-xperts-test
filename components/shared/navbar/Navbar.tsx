import React, { FC } from "react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  SearchIcon,
  Cloud,
  CreditCard,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { Icons } from "@/components/ui/icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import MobileNav from "./MobileNav";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <header className="my-2 flex h-14 items-center gap-2 rounded-lg bg-gradient-to-b from-neutral-900 to-transparent px-5">
      <Button
        className="bg-transparent sm:hidden"
        size="icon"
        variant="outline"
      >
        <MobileNav />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
      <div className="flex-1">
        <Button
          size={"icon"}
          variant={"outline"}
          className="flex-start w-full gap-1 bg-transparent pl-2 font-light text-muted-foreground sm:w-56"
        >
          <SearchIcon className="size-[18px]" />
          Search...
        </Button>
      </div>

      <Link
        href={"/notification"}
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "bg-transparent"
        )}
      >
        <Icons.bell className="size-4" />
        <span className="sr-only">Notifications</span>
      </Link>

      <Link
        href={"/profile"}
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "bg-transparent sm:hidden"
        )}
      >
        <User className="size-4" />
        <span className="sr-only">profile</span>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="hidden sm:flex">
          <Button size="icon" variant="outline" className="bg-transparent">
            <Image
              alt="Avatar"
              height="16"
              width="16"
              src="/assets/icons/user.svg"
              style={{
                aspectRatio: "16/16",
                objectFit: "cover",
              }}
              className="invert-colors rounded-full"
            />
            <span className="sr-only">Account</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 size-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 size-4" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 size-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard className="mr-2 size-4" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users className="mr-2 size-4" />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus className="mr-2 size-4" />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail className="mr-2 size-4" />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 size-4" />
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle className="mr-2 size-4" />
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Plus className="mr-2 size-4" />
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Icons.gitHub className="mr-2 size-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 size-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud className="mr-2 size-4" />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 size-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Navbar;
