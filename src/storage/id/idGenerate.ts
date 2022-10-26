import AsyncStorage from "@react-native-async-storage/async-storage";

import { ID_COUNTER } from "@storage/storageConfig";

export const idGenerate = async () => {
  try {
    const storage = await AsyncStorage.getItem(ID_COUNTER);

    const storedId = storage ? JSON.parse(storage) : 0;

    const newId = JSON.parse(storedId) + 1;

    await AsyncStorage.setItem(ID_COUNTER, JSON.stringify(newId));

    return newId;
  } catch (error) {
    throw error;
  }
};
