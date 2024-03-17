import { Button } from "@/components/ui/button";
import {
  ClipboardCopyIcon,
  FileIcon,
  FileSignatureIcon,
  LucideTable,
  ArrowUpRightFromSquare,
  BoxIcon,
  BoxSelectIcon,
} from "lucide-react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 px-5">
      <div className="flex items-center gap-4">
        <div className="grid items-start gap-1.5">
          <h1 className="text-2xl font-semibold">Create a project</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Start by creating a new project or importing an existing one
          </p>
        </div>
        <Button
          // disabled={true}
          className="ml-auto hover:cursor-not-allowed"
          size="sm"
        >
          New Project
        </Button>
      </div>
      <BentoGrid className="mb-2 w-full">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </main>
  );
}

const Skeleton = () => (
  <div className="flex size-full min-h-[6rem] flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800" />
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <ClipboardCopyIcon className="size-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <FileIcon className="size-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <FileSignatureIcon className="size-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <LucideTable className="size-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <ArrowUpRightFromSquare className="size-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <BoxIcon className="size-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <BoxSelectIcon className="size-4 text-neutral-500" />,
  },
];
