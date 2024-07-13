import { useEffect, useState } from "react";
import * as Font from "expo-font";

const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Neucha: require("../fonts/Neucha-Regular.ttf"),
      });
    };

    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  return { fontsLoaded };
};

export default useFonts;
