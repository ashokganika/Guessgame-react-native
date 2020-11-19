import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Color from "../constant/Color";
import Card from "./Card";

function GuessNumberConfrim({ number, handlePress }) {
  const handlePressFinal = () => {
    handlePress(number);
  };

  return (
    <View style={styles.confrimcontainer}>
      <Card styles={{ width: 250 }}>
        <Text style={styles.confirmTextTitle}>Your Final Input Number</Text>
        <View style={styles.confrimedNumber}>
          <Text>{number}</Text>
        </View>
        <TouchableOpacity
          style={styles.startgamebtn}
          activeOpacity={0.6}
          onPress={handlePressFinal}
        >
          <Text style={styles.startgametext}>Select</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  confrimcontainer: {
    marginVertical: 30,
  },
  confirmTextTitle: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
  },
  confrimedNumber: {
    backgroundColor: Color.secondary,
    marginVertical: 15,
    padding: 15,
    borderRadius: 10,
  },
  startgamebtn: {
    backgroundColor: Color.primary,
    borderRadius: 8,
    width: "50%",
  },
  startgametext: {
    textAlign: "center",
    padding: 8,
    fontSize: 18,
    color: "white",
  },
});

export default GuessNumberConfrim;
