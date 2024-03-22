import Image from "next/image";
import Link from "next/link";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";
import { SidebarItem } from "@/components/sidebar-item";

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/assets/mascot.svg" alt="Mascot" height={40} width={40} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Triolingo
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem
          label="Learn"
          href="/learn"
          iconSrc="/assets/sidebar/learn.svg"
        />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/assets/sidebar/leaderboard.svg"
        />
        <SidebarItem
          label="Quests"
          href="/quests"
          iconSrc="/assets/sidebar/quests.svg"
        />
        <SidebarItem
          label="Shop"
          href="/shop"
          iconSrc="/assets/sidebar/shop.svg"
        />
      </div>

      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>

        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
