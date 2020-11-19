import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ExitGame from "../component/ExitGame";
import Color from "../constant/Color";

function GameWinner({ count, number, replay }) {
  return (
    <View style={styles.scrn}>
      <Text>The Game is Over !</Text>
      <Text>You accomplished in {count} rounds.</Text>
      <Text>The number was : {number}</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.btn} onPress={replay}>
        <Text style={styles.btntxt}>Play Again</Text>
      </TouchableOpacity>
      <ExitGame />
    </View>
  );
}

const styles = StyleSheet.create({
  scrn: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    width: "50%",
    backgroundColor: Color.primary,
    borderRadius: 8,
  },
  btntxt: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
});

export default GameWinner;
