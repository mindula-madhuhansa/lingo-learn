import { auth } from "@clerk/nextjs";

import { adminIds } from "@/constants";

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
