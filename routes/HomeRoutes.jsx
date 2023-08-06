import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import MyInfoScreen from "../screens/MyInfoScreen";
import TodoScreen from "../screens/TodoScreen";

const Tab = createBottomTabNavigator();

/**
 * 모든 TabIconLabel은 false로 한다.
 * @returns Bottom Tab을 사용하는 화면
 */
function HomeRoutes() {
  return (
    <Tab.Navigator initialRouteName="todo">
      <Tab.Screen
        name="할 일"
        component={TodoScreen}
        options={{
          tabBarIcon: () => <Feather name="list" size={30} />,
          headerStyle: { backgroundColor: "#00948A" },
          headerTitleAlign: "left",
          headerTitleStyle: { fontSize: 20 },
          headerTintColor: "#fff",
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="내 정보"
        component={MyInfoScreen}
        options={{
          tabBarIcon: () => <Feather name="user" size={30} />,
          headerStyle: { backgroundColor: "#00948A" },
          headerTitleAlign: "left",
          headerTitleStyle: { fontSize: 20 },
          headerTintColor: "#fff",
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeRoutes;
