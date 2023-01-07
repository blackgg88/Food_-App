import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req: any, res: any) {
  if (req.method === "PUT") {
    const { id } = req.query;

    const orden = await prisma.orden.update({
      where: {
        id: parseInt(id),
      },
      data: {
        estado: true,
      },
    });

    res.status(200).json(orden);
  }
}
