import React from "react";
import { useSelector } from "react-redux";
import { WebView } from "react-native-webview";
import MapView, { Marker, Callout } from "react-native-maps";
import { selectPosts } from "../../redux/data/selectors";
import { View, StatusBar, Text } from "react-native";
import styles from "./Map.styles.js";

const Map = ({
  navigation,
  route: {
    params: { latitude, longitude },
  },
}) => {
  const posts = useSelector(selectPosts);
  const commentView = (postId, uri) =>
    navigation.navigate("Comments", { postId, uri });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType={"standard"}
        minZoomLevel={5}
        zoomEnabled={true}
        loadingEnabled={true}
        loadingIndicatorColor={"#FF6C00"}
      >
        {posts.map(({ postId, name, adress, coordinate, uri }) => (
          <Marker
            key={postId}
            title={adress}
            coordinate={coordinate}
            description={name}
          >
            <Callout onPress={() => commentView(postId, uri)} tooltip={true}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutTitle}>{name}</Text>
                <View style={styles.imageBox}>
                  <WebView style={styles.calloutImage} source={{ uri }} />
                </View>
                <Text style={styles.calloutAdress}>{adress}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <StatusBar hidden={true} />
    </View>
  );
};

export default Map;