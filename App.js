import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Router from "./components/router";
import store from "./redux/store";
import Watcher from "./components/Watcher";
import { useFont } from "./services/hooks";

const App = () => {
  const isReady = useFont();
  if (isReady) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Router />
          <Watcher />
        </NavigationContainer>
      </Provider>
    );
  } else return null;
};

export default App;