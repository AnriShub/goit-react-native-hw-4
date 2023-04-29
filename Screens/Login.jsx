import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import Loader from "../components/Loader";
import { useKeyboard } from "../services/hooks";
import Container from "../components/Container/Container";
import styles from "../components/AuthForm/AuthForm.styles";
import {
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
} from "react-native";

const Login = ({ navigation }) => {
  const keyboardHide = () => Keyboard.dismiss();
  const { marginСompensator } = useKeyboard(144);

  return (
    <>
      <Loader />
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <Container>
            <AuthForm type={"auth"} />

            <Animated.Text
              style={{ ...styles.link, ...marginСompensator }}
              onPress={() => navigation.navigate("Registr")}
            >
              Нет аккаунта? Зарегистрироваться
            </Animated.Text>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;