import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

export const mealGetById = async (id) => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const storedMeals = storage ? JSON.parse(storage) : [];

    const flatArray = storedMeals.map((meal) => meal.data).flat();

    const filteredMeal = flatArray.filter((meal) => meal.id === parseInt(id));

    return filteredMeal[0];
  } catch (error) {
    throw error;
  }
};
