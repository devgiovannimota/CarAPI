import { Request, Response } from "express";
import { Car } from "../repositories/carRepository";
import { CarService } from "../service/carService";

const carService = new CarService();

class CarController {
  async create(req: Request, res: Response) {
    const { brand, color, model, plate, year } = req.body;

    try {
      const data = await carService.create({
        brand,
        color,
        model,
        plate,
        year,
      });

      if (!data) {
        return res
          .status(400)
          .json({ message: "Something went wrong! Try again." });
      }

      return res.status(201).json({ message: "Success", data });
    } catch (error) {
      return res.status(400).json({ message: "Error", error });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const data = await carService.show();

      if (!data) {
        return res
          .status(400)
          .json({ message: "Something went wrong! Try again." });
      }

      return res.status(200).json({ message: "Success", data });
    } catch (error) {
      return res.status(400).json({ message: "Error", error });
    }
  }
  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await carService.getById(id);

      if (!data) {
        return res
          .status(400)
          .json({ message: "Something went wrong! Try again." });
      }

      return res.status(200).json({ message: "Success", data });
    } catch (error) {
      return res.status(400).json({ message: "Error", error });
    }
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { brand, color, model, plate, year }: Car = req.body;

    try {
      const data = await carService.update(id, {
        brand,
        color,
        model,
        plate,
        year,
      });

      if (!data) {
        return res
          .status(400)
          .json({ message: "Something went wrong! Try again." });
      }

      return res.status(201).json({ message: "Success", data });
    } catch (error) {
      return res.status(400).json({ message: "Error", error });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await carService.delete(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ message: "Error", error });
    }
  }
}

export { CarController };
