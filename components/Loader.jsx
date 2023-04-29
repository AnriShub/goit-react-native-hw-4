import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/prestate/selectors";

const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          display: isLoading ? "flex" : "none",
          backgroundColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
        },
      ]}
    >
      <ActivityIndicator color="#FF6C00" animating size="large" />
    </View>
  );
};

export default Loader;