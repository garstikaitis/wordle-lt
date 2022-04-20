import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GamePage from "./src/pages/GamePage";
import WelcomePage from "./src/pages/WelcomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomePage}
          options={{ headerTitle: "", headerShown: false }}
        />
        <Stack.Screen
          name="GameScreen"
          component={GamePage}
          options={{ headerTitle: "", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
    alignItems: "center",
  },
});
