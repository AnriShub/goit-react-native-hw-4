import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  add: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  avatar: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 16,
  },
  btnAdd: {
    position: "absolute",
    bottom: 14,
    right: -12,

    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 50,
    zIndex: 2,
  },
});

export default styles;