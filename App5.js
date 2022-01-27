import * as React from 'react';
import BaseNav from "./navigator/BaseNav";
import Details from "./navigator/Details";
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MyMapView from "./components/MyMapView";
import TileView from "./components/TileView";
import CustomMarkers from "./components/CustomMarkers";
import CustomOverlay from "./components/CustomOverlay";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={'Home'}
          component={BaseNav}
          options={{
            title: '主页'
          }}
        />
        <Stack.Screen
          name={'MyMapView'}
          component={MyMapView}
          options={{
            title: '初始化地图'
          }}
        />
        <Stack.Screen
          name={'TileView'}
          component={TileView}
          options={{
            title: '更换地图影像'
          }}
        />
        <Stack.Screen
          name={'CustomMarkers'}
          component={CustomMarkers}
          options={{
            title: '创建地图标记'
          }}
        />
        <Stack.Screen
          name={'CustomOverlay'}
          component={CustomOverlay}
          options={{
            title: '创建地图覆盖物'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

})
