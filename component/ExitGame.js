import React from "react";
import { TouchableOpacity, StyleSheet, Text, BackHandler } from "react-native";
import Color from "../constant/Color";

function ExitGame() {
  return (
    <TouchableOpacity
      style={styles.exitbtn}
      activeOpacity={0.6}
      onPress={() => BackHandler.exitApp()}
    >
      <Text style={styles.exitbtntxt}>Exit</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  exitbtn: {
    backgroundColor: Color.textColor,
    width: 100,
    borderRadius: 8,
  },
  exitbtntxt: {
    textAlign: "center",
    padding: 10,
  },
});

export default ExitGame;
