import AsyncStorage from "@react-native-async-storage/async-storage";

import { ID_COUNTER } from "@storage/storageConfig";

export const idGenerate = async () => {
  try {
    const currentId = (await AsyncStorage.getItem(ID_COUNTER)) || "0";
    const newId = JSON.parse(currentId) + 1;

    await AsyncStorage.setItem(ID_COUNTER, JSON.stringify(newId));
    return newId;
  } catch (error) {
    throw error;
  }
};
