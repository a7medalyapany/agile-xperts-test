import React, { FC } from "react";
import Image from "next/image";

interface layoutProps {
  children: React.ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="container flex gap-x-5 py-10">
      <section className="w-full">{children}</section>
      <div className="hidden min-w-fit items-center justify-center bg-background md:block">
        <div className="flex-center relative size-full flex-col dark:bg-grid-white/[0.2]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background" />

          <h1 className="flex-center gap-5 bg-gradient-to-r from-neutral-50 from-50% to-neutral-400 bg-clip-text pb-1.5 text-center text-6xl font-bold text-transparent">
            Agile
            <span className="flex">
              <Image
                src="/light-logo.svg"
                height={60}
                width={60}
                alt="Agile Xperts Valley"
                className="cursor-pointer select-none"
              />
              Perts
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Layout;
