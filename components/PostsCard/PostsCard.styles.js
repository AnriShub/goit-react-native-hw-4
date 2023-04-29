import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  imageBox: {
    width: "100%",
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
  },
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 8,
    resizeMode: "cover",
  },
  detailsBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activityBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 24,
  },
  activity: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
  },
  location: {
    display: "flex",
    textAlign: "right",
    alignItems: "center",
    marginLeft: 4,
  },
  icon: {
    marginRight: 4,
  },
  title: {
    textAlign: "left",
    marginVertical: 8,
    fontWeight: 500,
    fontSize: 16,
    fontFamily: "Roboto-Bold",
  },
});

export default styles;