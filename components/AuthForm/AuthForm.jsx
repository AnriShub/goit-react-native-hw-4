import { Formik } from "formik";
import React, { useState } from "react";
import { signup, signin } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { selectPrestate } from "../../redux/prestate/selectors";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./AuthForm.styles";
import {
  initialRegistr,
  validationRegistr,
  initialLogin,
  validationLogin,
} from "../../services/initial";

const AuthForm = ({ type }) => {
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const { userId } = useSelector(selectUser);
  const { uri } = useSelector(selectPrestate);

  const chengHidePassword = () => setHidePassword(!hidePassword);

  const submitForm = (values, { resetForm }) => {
    if (type === "auth") dispatch(signin(values));
    else dispatch(signup({ ...values, photoURL: uri }));
    userId && resetForm();
  };

  return (
    <Formik
      initialValues={type === "auth" ? initialLogin : initialRegistr}
      onSubmit={submitForm}
      validationSchema={type === "auth" ? validationLogin : validationRegistr}
    >
      {({
        handleChange,
        values: { displayName, email, password },
        errors,
        touched,
        handleSubmit,
        handleBlur,
      }) => (
        <View style={styles.form}>
          <Text
            style={{
              ...styles.formTitle,
              marginTop: type === "auth" ? 32 : 92,
            }}
          >
            {type === "auth" ? "Войти" : "Регистрация"}
          </Text>
          <View style={styles.inputBlock}>
            {type === "registr" && (
              <>
                <TextInput
                  style={styles.input}
                  value={displayName}
                  onChangeText={handleChange("displayName")}
                  onBlur={handleBlur("displayName")}
                  placeholder="Логин"
                  autoCapitalize="none"
                />
                <Text style={styles.error}>
                  {touched.displayName && errors.displayName}
                </Text>
              </>
            )}
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="E-mail адрес"
              inputMode="email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={styles.error}>{touched.email && errors.email}</Text>
            <View style={styles.passwordField}>
              <TextInput
                style={styles.input}
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                placeholder="Пароль"
              />
              <TouchableOpacity
                style={styles.showBtn}
                onPress={chengHidePassword}
              >
                <Text style={styles.showBtnTitle}>Показать</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.error}>
              {touched.password && errors.password}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
            onPress={handleSubmit}
          >
            <Text style={styles.btnTitle}>
              {type === "auth" ? "Войти" : "Зарегистрироваться"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default AuthForm;