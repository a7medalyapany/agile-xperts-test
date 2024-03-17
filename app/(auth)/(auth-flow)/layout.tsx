import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MemoizedStars,
  TextRevealCard,
} from "@/components/ui/text-reveal-card";

interface layoutProps {
  children: React.ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-background">
      <div className="hidden items-center justify-center border-r bg-background p-5 md:flex md:w-1/2">
        <div className="relative flex size-full flex-col items-center justify-center dark:bg-grid-white/[0.2]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background" />
          <div className="absolute left-0 top-0 z-20 p-4">
            <Image
              src="/light-logo.svg"
              height={100}
              width={100}
              alt="Agile Xperts Valley"
              className="cursor-pointer select-none"
            />
          </div>
          <MemoizedStars />
          <div className=" relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center p-4 md:pt-0">
            <h1 className="bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text pb-1.5 text-center text-4xl font-bold text-transparent md:text-7xl">
              Agile Xperts
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-foreground/70">
              Stay ahead of the curve and be tech-savvy by catching the latest
              trends and innovations in the tech world. Let&apos;s collaborate
              and build the future together!
            </p>
            <TextRevealCard
              text="Agile or Bust..."
              revealText="Agile as Fast"
              className="border-none bg-transparent p-2 text-center hover:rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-background p-5 md:w-1/2">
        <div className="absolute left-0 top-0 px-4 py-5 md:hidden">
          <Image
            src="/light-logo.svg"
            height={50}
            width={50}
            alt="Agile Xperts Valley"
            className="cursor-pointer select-none"
          />
        </div>
        <div className="w-[300px] justify-center sm:w-[350px]">
          {children}
          <p className="mt-2 gap-y-2 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our <br />
            <span className="flex justify-center gap-x-0.5">
              <Link
                href="#"
                className="inline-block text-muted-foreground underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="inline-block text-muted-foreground underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
