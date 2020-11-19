import React, {useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Header from './component/Header';
import Color from './constant/Color';
import GamePlay from './screen/GamePlay';
import GameStart from './screen/GameStart';
import GameWinner from './screen/GameWinner';

export default function App() {
  const [toguessNumber, setToguessNumber] = useState(0);
  const [totalGuess, setTotalGuess] = useState(0);
  const [isconfirm, settConfirm] = useState(false);

  const handleConfrim = () => settConfirm(true);

  const handlePress = (number) => {
    setToguessNumber(+number);
  };

  const handleWinner = (guessTimes) => {
    setTotalGuess(+guessTimes);
  };

  const handlereplay = () => {
    setToguessNumber(0);
    setTotalGuess(0);
    settConfirm(false);
  };

  let gameScreen = <GameStart handlePress={handlePress} />;

  if (parseInt(toguessNumber) > 0 && isconfirm === false && totalGuess <= 1) {
    gameScreen = (
      <GamePlay
        number={toguessNumber}
        handleWinner={handleWinner}
        handleConfrim={handleConfrim}
      />
    );
  } else if (isconfirm) {
    gameScreen = (
      <GameWinner
        count={totalGuess}
        number={toguessNumber}
        replay={handlereplay}
      />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" backgroundColor={Color.primary} />
      <Header />
      {gameScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
