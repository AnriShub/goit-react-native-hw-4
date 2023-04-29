import { Feather } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

const HeaderButton = ({ name, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Feather name={name} size={24} color="#BDBDBD" />
    </TouchableWithoutFeedback>
  );
};
export default HeaderButton;