import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
} from 'react-native';
import Card from '../component/Card';
import ExitGame from '../component/ExitGame';
import GuessNumberConfrim from '../component/GuessNumberConfirm';
import Color from '../constant/Color';

function GameStart({handlePress}) {
  const [number, setNUmber] = useState('');
  const [confirm, setConfirm] = useState(false);

  const numberHandleChange = (text) => {
    setNUmber(text.replace(/[^0-9]/g, ''));
    setConfirm(false);
  };

  const handleReset = () => {
    setNUmber('');
    setConfirm(false);
  };

  const handleSelect = () => {
    let paseNumber = +number;
    if (isNaN(paseNumber) || paseNumber <= 0 || paseNumber > 99) {
      Alert.alert('Invaild number', 'Plese enter valid number', [
        {text: 'cancel', onPress: handleReset},
      ]);
      return;
    }
    setConfirm(true);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.gamestartcontainer}>
        <Text style={styles.gameinfotitle}>Start Game</Text>
        <Card styles={styles.card}>
          <Text>Please Select a Number</Text>
          <TextInput
            style={styles.textinput}
            autoCompleteType="off"
            autoCorrect={false}
            blurOnSubmit
            autoCapitalize="none"
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberHandleChange}
            value={number}
          />
          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.resetbtn}
              activeOpacity={0.6}
              onPress={handleReset}>
              <Text style={styles.btntext}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.selectbtn}
              activeOpacity={0.6}
              onPress={handleSelect}>
              <Text style={styles.btntext}>Select</Text>
            </TouchableOpacity>
          </View>
        </Card>
        {confirm && (
          <GuessNumberConfrim
            number={number}
            handlePress={handlePress && handlePress}
          />
        )}
        <ExitGame />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  gamestartcontainer: {
    alignItems: 'center',
    marginVertical: 30,
    flex: 1,
  },
  gameinfotitle: {
    paddingVertical: 5,
    alignItems: 'center',
    fontSize: 18,
  },
  card: {
    width: 300,
  },
  textinput: {
    width: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginVertical: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 1,
  },
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  resetbtn: {
    backgroundColor: Color.secondary,
    padding: 6,
    width: '40%',
    borderRadius: 8,
  },
  selectbtn: {
    backgroundColor: Color.primary,
    padding: 6,
    width: '40%',
    borderRadius: 8,
  },
  btntext: {
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
  },
});

export default GameStart;
