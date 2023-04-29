import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  user: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    color: "#212121CC",
  },
  name: {
    fontFamily: "Roboto-Bold",
    fontWeight: 700,
    fontSize: 24,
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
  },
});

export default styles;