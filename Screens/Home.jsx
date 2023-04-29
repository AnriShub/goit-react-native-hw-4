import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Posts from "./Posts/Posts";
import CreatePosts from "./CreatePosts/CreatePosts";
import Profile from "./Profile/Profile";
import HeaderButton from "../components/Button/Button";
import { icons } from "../services/initial";
import { signout } from "../redux/auth/operations";
import { useDispatch } from "react-redux";
import { getPosts, getComments } from "../redux/data/operations";

const Tabs = createBottomTabNavigator();
const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
  }, [dispatch]);

  const logOut = () => dispatch(signout());
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route: { name } }) => ({
        tabBarIcon: ({ color }) => (
          <Feather name={icons[name]} size={24} color={color} />
        ),
        tabBarStyle: {
          width: "100%",
          height: 83,
          paddingTop: 9,
          borderTopColor: "#BDBDBD",
          borderTopWidth: 1,
          alignItems: "center",
        },
        tabBarItemStyle: {
          height: 40,
          borderRadius: 50,
          maxWidth: 70,
          marginHorizontal: 5,
        },
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#BDBDBD",
        tabBarShowLabel: false,
        tabBarOptions: { style: { display: "none" } },
      })}
    >
      <Tabs.Group
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
        <Tabs.Screen
          name="Posts"
          component={Posts}
          options={{
            headerTitle: "Posts",
            headerRight: () => (
              <HeaderButton name={"log-out"} onPress={logOut} />
            ),
            headerRightContainerStyle: { paddingRight: 16 },
          }}
        />
        <Tabs.Screen
          name="CreatePosts"
          component={CreatePosts}
          options={{
            headerTitle: "Создать публикацию",
            headerLeft: () => (
              <HeaderButton
                name={"arrow-left"}
                onPress={() => navigation.navigate("Posts")}
              />
            ),
            headerLeftContainerStyle: { paddingLeft: 16 },
            tabBarStyle: { display: "none" },
            unmountOnBlur: true,
          }}
        />
      </Tabs.Group>
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

export default Home;