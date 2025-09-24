import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// Manejo opcional de cierre limpio (buena práctica para evitar conexiones colgadas)
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
