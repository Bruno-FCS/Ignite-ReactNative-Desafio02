import { ActivityIndicator, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import theme from "./src/theme";

import { Home } from "@screens/Home";
import { Statisctics } from "@screens/Statistics";
import { Register } from "@screens/Register";

export default () => {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Register /> : <ActivityIndicator />}
    </ThemeProvider>
  );
};
