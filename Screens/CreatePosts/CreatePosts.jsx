import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import Loader from "../../components/Loader";
import { useKeyboard } from "../../services/hooks";
import { initialPost } from "../../services/initial";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { createPost, getPosts } from "../../redux/data/operations";
import { delPhoto } from "../../redux/prestate/operations";
import { takePhoto } from "../../services/ImagePicker";
import { selectPrestate } from "../../redux/prestate/selectors";
import GetCurrentLocation from "../../services/location";
import {
  Text,
  View,
  Alert,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./CreatePosts.styles.js";

const CreatePosts = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isShowKeyboard } = useKeyboard(0);
  const [state, setState] = useState(initialPost);
  const { uri } = useSelector(selectPrestate);
  const { name, adress, coordinate } = state;
  const author = useSelector(selectUser);

  const imageHandler = () => takePhoto(dispatch);
  const nameHandler = (value) =>
    setState((prevState) => ({ ...prevState, name: value }));
  const adressHandler = (value) =>
    setState((prevState) => ({ ...prevState, adress: value }));
  const handleSubmit = () => {
    if (!uri || !name || !adress)
      return Alert.alert("Не все поля заполнены!");
    Keyboard.dismiss();
    dispatch(createPost({ author, uri, name, adress, coordinate }));
    setState(initialPost);
    dispatch(getPosts());
    navigation.navigate("Posts");
  };

  const keyboardHide = () => Keyboard.dismiss();
  const handleDel = () => {
    dispatch(delPhoto(uri));
    setState(initialPost);
  };

  useEffect(() => {
    uri && GetCurrentLocation({ setState });
  }, [uri]);

  return (
    <>
      <Loader />
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={{ marginTop: isShowKeyboard ? -50 : 0 }}>
            {uri ? (
              <Image source={{ uri }} style={styles.imageBox} />
            ) : (
              <View style={styles.imageBox}>
                <TouchableOpacity
                  style={styles.cameraButton}
                  activeOpacity={0.8}
                  onPress={imageHandler}
                >
                  <Feather name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.text}>Загрузите фото</Text>
            <View style={styles.inputBlock}>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={nameHandler}
                placeholder="Имя..."
              />
              <View style={styles.locationField}>
                <Feather
                  name="map-pin"
                  size={24}
                  color="#BDBDBD"
                  style={styles.locationIcon}
                />
                <TextInput
                  style={{ ...styles.input, ...styles.locationInput }}
                  onChangeText={adressHandler}
                  placeholder="Местность..."
                  value={adress}
                />
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={handleSubmit}
            >
              <Text style={styles.btnTitle}>Опубликовать</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnTrashBox}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnTrash}
              onPress={handleDel}
            >
              <Feather name="trash-2" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default CreatePosts;