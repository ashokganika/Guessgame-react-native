import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constant/Color";
function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Guess the Number Game !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.primary,
    width: "100%",
    padding: 45,
    height: 90,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 18,
  },
});

export default Header;
