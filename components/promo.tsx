import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Promo = () => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <Image
            src="/assets/unlimited.svg"
            alt="Super"
            height={26}
            width={26}
          />
          <h3 className="font-bold text-lg">Upgrade to Super</h3>
        </div>
        <p className="text-muted-foreground">Get unlimited hears and more!</p>
      </div>
      <Button asChild variant="super" size="lg" className="w-full">
        <Link href="/shop">Upgrade today</Link>
      </Button>
    </div>
  );
};
