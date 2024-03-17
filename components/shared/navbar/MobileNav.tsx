"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
// import { SignedOut } from "@clerk/nextjs";
// import { Button } from "@/components/ui/button";
import { pageLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-8">
      {pageLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "rounded-lg bg-muted-foreground text-foreground"
                  : "text-muted-foreground"
              } flex items-center justify-start gap-4 bg-transparent py-2`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={"invert-colors"}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={"left"} className="border-none">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/light-logo.svg"
            alt="ByteBurst Logo"
            width={50}
            height={50}
            className="block"
          />
          <Image
            src="/dark-logo.svg"
            alt="ByteBurst Logo"
            width={50}
            height={50}
            className="dark:hidden"
          />
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          {/* <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href={"/login"}>
                  <Button className="small-medium min-h-[41px] w-full rounded-lg bg-secondary-foreground px-4 py-3">
                    <span className="text-primary-foreground">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/register"}>
                  <Button className="small-medium min-h-[41px] w-full rounded-lg bg-muted-foreground px-4 py-3">
                    <span className="text-primary-foreground">Sign Up</span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
