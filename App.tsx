import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import fonts from "./config/fonts";

import Navigation from "./navigation";

export default function App() {
  // const [fontsLoaded] = useFonts(fonts);
  // !fontsLoaded ? null :
  return  (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}
