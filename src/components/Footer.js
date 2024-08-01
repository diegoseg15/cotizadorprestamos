import React from 'react';
import {StyleSheet, Button, View, Text, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';

export default function Footer(props) {
  const {calcular} = props;
  return (
    <View style={stylses.viewFooter}>
      <TouchableOpacity style={stylses.button} onPress={calcular}>
        <Text style={stylses.text}>CALCULAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const stylses = StyleSheet.create({
  viewFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.PRIMARY_COLOR,
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    padding: 16,
    borderRadius: 20,
    width: '75%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
