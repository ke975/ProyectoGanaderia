import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Calculator from "../screens/Calculator";
const Stack = createStackNavigator();

export default function CalculatorStak() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Calculator"
        component={Calculator}
        options={{ title: "Calculator" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
