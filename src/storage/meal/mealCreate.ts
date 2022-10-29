import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { idGenerate } from "@storage/id/idGenerate";
import { mealsGetAll } from "./mealsGetAll";

export const mealCreate = async (
  name: string,
  description: string,
  date: string,
  time: string,
  fitsDiet: string,
  id?: string | number
) => {
  try {
    const mealId = id || (await idGenerate());

    const storedData = await mealsGetAll();

    const dataByDate = storedData.find((item) => item.label === date);

    if (dataByDate) {
      dataByDate.data = [
        ...dataByDate.data,
        {
          id: mealId,
          name: name,
          description: description,
          date: date,
          time: time,
          fitsDiet: fitsDiet,
        },
      ];
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedData));
    } else {
      const newData = {
        label: date,
        data: [
          {
            id: mealId,
            name: name,
            description: description,
            date: date,
            time: time,
            fitsDiet: fitsDiet,
          },
        ],
      };
      const updatedData = [...storedData, newData];
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedData));
    }
  } catch (error) {
    throw error;
  }
};
