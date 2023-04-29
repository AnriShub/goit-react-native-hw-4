import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
  imageBox: {
    width: "100%",
    height: 240,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  cameraButton: {
    width: 60,
    height: 60,
    borderColor: "#FFFFFF",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "#BDBDBD",
    textAlign: "left",
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  inputBlock: {
    marginVertical: 32,
    gap: 16,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingVertical: 16,
    color: "#212121",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  locationInput: {
    paddingLeft: 28,
  },
  locationField: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  locationIcon: {
    position: "absolute",
    left: 0,
    marginRight: 4,
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
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
  btnTrashBox: {
    position: "absolute",
    width: "100%",
    bottom: 34,
    left: 15,
    alignItems: "center",
  },
  btnTrash: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;