import { View, ImageBackground, ScrollView } from "react-native";
import styles from "./Container.styles.js";

const Container = ({ children }) => {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/images/background.jpg")}
    >
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.box}>{children}</View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Container;