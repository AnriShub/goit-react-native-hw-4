import { useEffect, useState, useRef } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Platform, Keyboard, Animated } from "react-native";

export const useFont = () => {
  const [isReady, setIsReady] = useState(false);
  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
      });
    } catch (error) {
      console.warn(error);
    } finally {
      SplashScreen.hideAsync();
      setIsReady(true);
    }
  };

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    loadFonts();
  }, []);

  return isReady;
};

export const useKeyboard = (Value) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const marginBottomAnimation = useRef(new Animated.Value(Value)).current;

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      Platform.OS == "ios" ? "keyboardWillShow" : "keyboardDidShow",
      () => {
        setIsShowKeyboard(true);
        Animated.timing(marginBottomAnimation, {
          toValue: 0,
          duration: 250,
          useNativeDriver: false,
        }).start();
      }
    );

    const keyboardWillHideListener = Keyboard.addListener(
      Platform.OS == "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => {
        setIsShowKeyboard(false);
        Animated.timing(marginBottomAnimation, {
          toValue: Value,
          duration: 250,
          useNativeDriver: false,
        }).start();
      }
    );

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  const marginСompensator = {
    marginBottom: marginBottomAnimation,
  };

  return { isShowKeyboard, marginСompensator };
};