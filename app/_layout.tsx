import { Stack } from "expo-router";
import React from "react";
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{}} />
      

      <Stack.Screen
        name="search"
        options={{
        }}
      />
      <Stack.Screen name="details" options={{}} />
    </Stack>
  );
}
