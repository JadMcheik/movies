import { Stack } from "expo-router";
import React from "react";
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index" options={{}} />
    </Stack>
  );
}
