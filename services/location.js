import { Alert } from "react-native";
import * as Location from "expo-location";

const GetCurrentLocation = async ({ setState }) => {
  const permission = await Location.requestForegroundPermissionsAsync();
  if (!permission.granted) {
    Alert.alert(
      "Недостаточно прав",
      "Включите геолокацию",
      [{ text: "OK" }],
      { cancelable: false }
    );
  }

  const {
    coords: { latitude, longitude },
  } = await Location.getCurrentPositionAsync();

  if (latitude) {
    const response = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    const { country, city, subregion } = response[0];

    setState((prevState) => ({
      ...prevState,
      coordinate: { latitude, longitude },
      adress: `${country}, ${city ? city : subregion}`,
    }));
  }
};

export default GetCurrentLocation;