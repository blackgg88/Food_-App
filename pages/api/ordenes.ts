import { PrismaClient } from "@prisma/client";

export default async function handler(req: any, res: any) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    const ordenes = await prisma.orden.findMany({
      where: { estado: false },
    });
    res.status(200).json(ordenes);
  }

  if (req.method === "POST") {
    const orden = await prisma.orden.create({
      data: {
        nombre: req.body.nombre,
        total: req.body.total,
        fecha: req.body.fecha,
        pedido: req.body.pedido,
      },
    });

    res.status(200).json(orden);
  }
}
