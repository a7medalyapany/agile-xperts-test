"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { pageLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen flex-col gap-2 overflow-y-auto p-2 max-sm:hidden lg:w-[266px]">
      <div className="min-h-fit rounded-lg bg-[#0E0E10]">
        <div className="flex h-14 items-center px-4">
          <Link
            className="flex w-14 items-center justify-center gap-2 text-lg font-semibold lg:justify-start"
            href="#"
          >
            <Image
              src="/dark-logo.svg"
              alt="Agile Xpert Logo"
              width={24}
              height={24}
              className="hidden size-6"
            />
            <Image
              src="/light-logo.svg"
              alt="Agile Xpert Logo"
              width={24}
              height={24}
              className="size-6 dark:block"
            />
            <span className="sr-only">Agile Xperts logo</span>
          </Link>
        </div>
        {pageLinks.slice(0, 2).map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Link
              key={item.route}
              href={item.route}
              passHref
              className={`${
                isActive ? "rounded-lg text-primary" : "text-muted-foreground"
              } mb-2 flex items-center justify-center gap-4 p-4 hover:rounded-lg hover:bg-muted hover:text-foreground lg:mx-2 lg:justify-start`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
                className={`invert-colors`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="flex h-full flex-1 flex-col rounded-lg bg-[#0E0E10]">
        {pageLinks.slice(2).map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Link
              key={item.route}
              href={item.route}
              passHref
              className={`${
                isActive ? "rounded-lg text-primary" : "text-muted-foreground"
              } mt-2 flex items-center justify-center gap-4 p-4 hover:rounded-lg hover:bg-muted hover:text-foreground lg:mx-2 lg:justify-start`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
                className={`invert-colors`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}

        {/* <SignedOut> */}
        <div className="mt-auto flex flex-col gap-3 px-4 pb-4">
          <Link href={"/login"} passHref>
            <Button variant={"default"} className="w-full">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className={"lg:hidden"}
              />
              <span className="max-lg:hidden">Log In</span>
            </Button>
          </Link>
          <Link href={"/register"} passHref>
            <Button variant={"secondary"} className="w-full">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="register"
                width={20}
                height={20}
                className={"lg:hidden"}
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
        {/* </SignedOut> */}
      </div>
    </section>
  );
};

export default Sidebar;
