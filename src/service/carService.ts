import { Car, CarRepository } from "../repositories/carRepository";

const carRepository = new CarRepository();

class CarService {
  async create({ brand, color, model, plate, year }: Car) {
    if (!brand) {
      throw Error("Brand is mandatory!");
    }

    if (!color) {
      throw new Error("Color is mandatory!");
    }

    if (!model) {
      throw new Error("Model is mandatory!");
    }

    if (!plate) {
      throw new Error("Plate is mandatory!");
    }

    if (!year) {
      throw new Error("Year is mandatory!");
    }

    const data = await carRepository.create({
      brand,
      color,
      model,
      plate,
      year,
    });

    return data;
  }

  async show() {
    const data = await carRepository.show();
    return data;
  }

  async getById(id: string) {
    const data = await carRepository.getById(id);
    return data;
  }

  async update(id: string, { brand, color, model, plate, year }: Car) {
    const data = await carRepository.update(id, {
      brand,
      color,
      model,
      plate,
      year,
    });
    return data;
  }

  async delete(id: string) {
    await carRepository.delete(id);
  }
}

export { CarService };
