import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.styles }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    maxWidth: "100%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    alignItems: "center",
    marginVertical: 10,
  },
});

export default Card;
