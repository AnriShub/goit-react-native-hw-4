import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  logOut: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  profileTitle: {
    textAlign: "center",
    color: "#212121",
    marginTop: 92,
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  list: {
    flex: 1,
    width: "100%",
    display: "flex",
    marginVertical: 32,
    flexDirection: "column",
    gap: 32,
  },
});

export default styles;