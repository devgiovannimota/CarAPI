import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Car {
  model: string;
  color: string;
  year: number;
  plate: string;
  brand: string;
}

class CarRepository {
  async create({ brand, color, model, year, plate }: Car) {
    const data = await prisma.car.create({
      data: {
        brand,
        color,
        model,
        plate,
        year,
      },
    });

    return data;
  }
  async show() {
    const data = await prisma.car.findMany();
    return data;
  }

  async getById(id: string) {
    const data = await prisma.car.findUnique({ where: { id: id } });
    return data;
  }

  async update(id: string, { brand, color, model, plate, year }: Car) {
    const data = await prisma.car.update({
      where: { id: id },
      data: { brand, color, model, plate, year },
    });

    return data;
  }

  async delete(id: string) {
    await prisma.car.delete({ where: { id: id } });
  }
}

export { CarRepository, Car };
