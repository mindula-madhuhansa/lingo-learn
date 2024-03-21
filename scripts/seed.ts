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
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

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

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 3,
        title: "Unit 01",
        description: "Learn the basics of Korean",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        title: "Nouns",
        order: 1,
      },
      {
        id: 2,
        unitId: 1,
        title: "Verbs",
        order: 2,
      },
      {
        id: 3,
        unitId: 1,
        title: "Adjectives",
        order: 3,
      },
      {
        id: 4,
        unitId: 1,
        title: "Adverbs",
        order: 4,
      },
      {
        id: 5,
        unitId: 1,
        title: "Grammar",
        order: 5,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/assets/images/man.svg",
        correct: true,
        text: "남자",
        audioSrc: "/kr_man.mp3",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/assets/images/woman.svg",
        correct: false,
        text: "여자",
        audioSrc: "/kr_woman.mp3",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "/assets/images/robot.svg",
        correct: false,
        text: "로봇",
        audioSrc: "/kr_robot.mp3",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
