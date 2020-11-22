import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {Icon_backstackManipulation} from '../../assests';

const {width, height} = Dimensions.get('window');

const Header = ({title, navigation}) => {
  return (
    <View style={styles.Header}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Icon_backstackManipulation />
      </TouchableOpacity>
      <Text style={styles.HeaderFont}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  Header: {
    paddingHorizontal: 10,
    width,
    height: 56,
    backgroundColor: '#005690',
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderFont: {
    marginLeft: 10,
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    lineHeight: 21,
  },
});
