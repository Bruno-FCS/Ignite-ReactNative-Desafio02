import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feedback } from "@screens/Feedback";

import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { Register } from "@screens/Register";
import { Statisctics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statisctics} />
      <Screen name="register" component={Register} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="meal" component={Meal} />
    </Navigator>
  );
};
