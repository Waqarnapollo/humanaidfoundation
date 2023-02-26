import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Appeals from "./components/Appeals";
import Appeal from "./components/Appeal";
import registerNNPushToken from "native-notify";
import { AppealForm } from "./components/AppealForm";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
  const Stack = createNativeStackNavigator();

  // registerNNPushToken(6177, "Ztm4hdXew0qt0xAxtG2hbf");

  return (
    <StripeProvider publishableKey="pk_test_51M8jwQFYYXENMfRss0qXWT8E4i4vMiFJPKxdB3gXvnenfk0BiALPbjALxPIOyvupDFa0JJWgUux5NexwzYEocln900oDPjAMKP">
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Appeals"
            component={Appeals}
            options={{ title: "Appeals / Causes" }}
          />
          <Stack.Screen
            name="Appeal"
            component={Appeal}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="AppealForm"
            component={AppealForm}
            options={{ title: "" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
}
