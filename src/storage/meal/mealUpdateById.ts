import { mealDeleteById } from "./mealDeleteById";
import { mealCreate } from "./mealCreate";

export const mealUpdateById = async (
  name: string,
  description: string,
  date: string,
  time: string,
  fitsDiet: string,
  id: string | number
) => {
  try {
    await mealDeleteById(id);
    await mealCreate(name, description, date, time, fitsDiet, id);
  } catch (error) {
    throw error;
  }
};
