import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    flex: 1,
    width: "100%",
  },
  calloutContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  imageBox: {
    display: "flex",
    width: 200,
    height: 112,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 3,
  },
  calloutImage: {
    width: 200,
    height: 120,
    resizeMode: "cover",
  },
  calloutTitle: {
    textAlign: "center",
    marginBottom: 4,
    fontFamily: "Roboto-Bold",
    fontWeight: 700,
    fontSize: 14,
    color: "#212121",
  },
  calloutAdress: {
    textAlign: "left",
    marginTop: 4,
    fontSize: 14,
    color: "#1B4371",
  },
});

export default styles;