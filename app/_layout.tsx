import {
  Tabs,
  useLocalSearchParams,
  useFocusEffect,
  router,
  Stack,
  useNavigation,
} from "expo-router";
import {
  useRoute,
  useIsFocused,
  useNavigationState,
} from "@react-navigation/native";
import React, { useState, useCallback, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function Layout() {
  // const tabName = useNavigationState((state) => state.routes[state.index].name);

  // console.log(tabName);

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#d9d9d9",
        },
        tabBarHideOnKeyboard: true,
        headerShown: route.name === "index" ? false : true,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color}></Ionicons>
          ),
        }}
      />
      <Tabs.Screen
        name="posts"
        options={{
          title: "Posts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color}></Ionicons>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
