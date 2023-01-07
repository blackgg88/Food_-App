import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req: any, res: any) {
  const categorias = await prisma.categoria.findMany({
    include: {
      productos: true,
    },
  });

  res.status(200).json(categorias);
}
