import React, { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "../component/Card";
import Color from "../constant/Color";

function GamePlay({ number, handleWinner, handleConfrim }) {
  const guessNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const [guessedNumber, setGuessedNumber] = useState(
    guessNumber(1, 99, number)
  );
  const [guessTimeCount, setGUessedTimeCount] = useState(1);

  const minRef = useRef(1);
  const maxRef = useRef(99);

  useEffect(() => {
    if (guessedNumber == number) {
      handleWinner(guessTimeCount);
      handleConfrim();
    }
  }, [guessedNumber, number, handleWinner]);

  const handleUP = (up) => {
    if (up === "up" && guessedNumber > number) {
      Alert.alert("You cheated");
      return;
    }
    minRef.current = guessedNumber;
    setGuessedNumber((prev) => {
      return guessNumber(prev, maxRef.current);
    });
    setGUessedTimeCount((prev) => prev + 1);
  };

  const handleDown = (down) => {
    if (down === "down" && guessedNumber < number) {
      Alert.alert("You cheated");
      return;
    }
    maxRef.current = guessedNumber;
    setGuessedNumber((prev) => {
      return guessNumber(minRef.current, prev);
    });
    setGUessedTimeCount((prev) => prev + 1);
  };

  return (
    <View style={styles.gamePlayContainer}>
      <Card>
        <Text style={styles.header}>Guess The Number !!!</Text>
        <View style={styles.guessedNumberContainer}>
          <Text style={styles.guessedNumber}>{guessedNumber}</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.btn}
            onPress={() => handleUP("up")}
          >
            <Text style={styles.btnxtx}>UP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.btn}
            onPress={() => handleDown("down")}
          >
            <Text style={styles.btnxtx}>Down</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  gamePlayContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  header: {
    fontSize: 20,
    color: Color.textColor,
  },
  guessedNumberContainer: {
    marginVertical: 20,
    borderWidth: 4,
    borderColor: Color.secondary,
  },
  guessedNumber: {
    color: "black",
    padding: 15,
    fontSize: 16,
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  btn: {
    backgroundColor: Color.primary,
    width: "40%",
    borderRadius: 8,
  },
  btnxtx: {
    padding: 10,
    textAlign: "center",
    fontSize: 16,
  },
});

export default GamePlay;
