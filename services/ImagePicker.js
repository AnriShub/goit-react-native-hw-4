import { Alert } from "react-native";
import Constants from "expo-constants";
import {
  sendPhoto,
  updateAvatar,
  delPhoto,
} from "../redux/prestate/operations";
import * as ImagePicker from "expo-image-picker";

export const getPermissions = async () => {
  if (Constants.platform.ios) {
    const cameraRollStatus =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
    if (
      cameraRollStatus.status !== "granted" ||
      cameraStatus.status !== "granted"
    ) {
      Alert.alert("Извините, недостаточно прав!");
    }
  }
};

export const selectImage = async (dispatch) => {
  const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: "Images",
    aspect: [3, 3],
    quality: 0.1,
    allowsEditing: true,
  });

  handleImagePicked(
    { canceled, assets, type: "avatars", photoURL: "" },
    dispatch
  );
};

export const updateImage = async (dispatch, photoURL) => {
  const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: "Images",
    aspect: [3, 3],
    quality: 0.1,
    allowsEditing: true,
  });
  handleImagePicked({ canceled, assets, type: "avatars", photoURL }, dispatch);
};

export const takePhoto = async (dispatch) => {
  const { canceled, assets } = await ImagePicker.launchCameraAsync({
    mediaTypes: "Images",
    aspect: [16, 9],
    allowsEditing: true,
    quality: 0.5,
  });
  handleImagePicked(
    { canceled, assets, type: "images", photoURL: "" },
    dispatch
  );
};

handleImagePicked = ({ canceled, assets, type, photoURL }, dispatch) => {
  if (canceled) {
    alert("загрузку отменена");
    return;
  } else {
    const path = `${type}/img${Date.now().toString()}.jpg`;
    const { uri } = assets[0];
    if (!photoURL && type === "avatars")
      return dispatch(sendPhoto({ uri, path }));
    if (photoURL && type === "avatars") {
      dispatch(updateAvatar({ uri, path }));
      dispatch(delPhoto(photoURL));
    } else {
      dispatch(sendPhoto({ uri, path }));
    }
  }
};
