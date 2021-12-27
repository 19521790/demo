import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DemoReduxState from "./DemoReduxState";
import DemoData from "./DemoData";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducer from "./redux/reducers";

const Stack = createNativeStackNavigator();

const store = createStore(allReducer);
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name='DemoReduxState' component={DemoReduxState} />
          <Stack.Screen name='DemoData' component={DemoData} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
