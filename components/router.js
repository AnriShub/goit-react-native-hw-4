import { createStackNavigator } from "@react-navigation/stack";
import Registr from "../Screens/Registration";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import Comments from "../Screens/Comments/Comments";
import Login from "../Screens/Login";
import React from "react";
import Map from "../Screens/Map/Map";
import Home from "../Screens/Home";

const PrivateStack = createStackNavigator();
const PublicStack = createStackNavigator();

const PublicNavigator = () => {
  return (
    <PublicStack.Navigator initialRouteName="Login">
      <PublicStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <PublicStack.Screen
        name="Registr"
        component={Registr}
        options={{ headerShown: false }}
      />
    </PublicStack.Navigator>
  );
};

const PrivateNavigator = () => {
  return (
    <PrivateStack.Navigator initialRouteName="Home">
      <PrivateStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <PrivateStack.Group
        screenOptions={{
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#BDBDBD",
            backgroundColor: "#FFFFFF",
          },
          headerTitleStyle: {
            fontFamily: "Roboto-Bold",
            fontSize: 17,
            color: "#212121",
          },
          headerTitleAlign: "center",
        }}
      >
        <PrivateStack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: true }}
        />
        <PrivateStack.Screen
          name="Comments"
          component={Comments}
          options={{ headerShown: true }}
        />
      </PrivateStack.Group>
    </PrivateStack.Navigator>
  );
};

const Router = () => {
  const { userId } = useSelector(selectUser);
  return <>{userId ? <PrivateNavigator /> : <PublicNavigator />}</>;
};

export default Router;