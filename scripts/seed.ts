import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Sinhala",
        imageSrc: "/assets/flags/si.svg",
      },
      {
        id: 2,
        title: "English",
        imageSrc: "/assets/flags/en.svg",
      },
      {
        id: 3,
        title: "Korean",
        imageSrc: "/assets/flags/kr.svg",
      },
      {
        id: 4,
        title: "Japanese",
        imageSrc: "/assets/flags/jp.svg",
      },
      {
        id: 5,
        title: "Chinese",
        imageSrc: "/assets/flags/cn.svg",
      },
      {
        id: 6,
        title: "Russian",
        imageSrc: "/assets/flags/ru.svg",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
