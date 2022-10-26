import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { idGenerate } from "@storage/id/idGenerate";
import { mealsGetAll } from "./mealsGetAll";

export const mealCreate = async (
  name: string,
  description: string,
  date: string,
  time: string,
  fitsDiet: string
) => {
  try {
    const id = await idGenerate();

    const storedMeals = await mealsGetAll();

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([
        ...storedMeals,
        {
          id: id,
          name: name,
          description: description,
          date: date,
          time: time,
          fitsDiet: fitsDiet,
        },
      ])
    );
  } catch (error) {
    throw error;
  }
};
