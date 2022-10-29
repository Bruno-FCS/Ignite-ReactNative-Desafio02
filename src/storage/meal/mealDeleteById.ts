import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetById } from "./mealGetById";
import { mealsGetAll } from "./mealsGetAll";

export const mealDeleteById = async (id) => {
  try {
    const selectedMeal = await mealGetById(id);

    const storedData = await mealsGetAll();

    const dataByDate = storedData.find(
      (item) => item.label === selectedMeal.date
    );

    dataByDate.data = dataByDate.data.filter((item) => item.id !== id);

    if (dataByDate.data.length === 0) {
      const filteredStoredData = storedData.filter(
        (item) => item.label !== selectedMeal.date
      );

      await AsyncStorage.setItem(
        MEAL_COLLECTION,
        JSON.stringify(filteredStoredData)
      );
    } else {
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedData));
    }

    console.warn(await mealsGetAll());
  } catch (error) {
    throw error;
  }
};
