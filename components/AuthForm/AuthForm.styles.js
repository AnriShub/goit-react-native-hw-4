import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    width: "100%",
  },
  form: {
    width: "100%",
  },
  formTitle: {
    textAlign: "center",
    color: "#212121",
    marginBottom: 32,
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  inputBlock: {
    display: "flex",
  },
  input: {
    display: "flex",
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    padding: 16,
    borderRadius: 8,
    color: "#212121",
  },
  passwordField: {
    position: "relative",
    justifyContent: "center",
  },
  showBtn: {
    position: "absolute",
    right: 16,
  },
  showBtnTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "#FFFFFF",
    paddingVertical: 16,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
  link: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  error: {
    height: 16,
    color: "red",
  },
});

export default styles;