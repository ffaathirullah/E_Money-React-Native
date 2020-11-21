import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';


const {width, height} = Dimensions.get('window');

export default function homeComp1({navigation}) {
  return (
    <View style={styles.ContainerNavigasi}>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.push('topup')}>
        <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
          Top Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.push('qrpay')}>
        <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
          QR Pay
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.push('transfer')}>
        <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
          Transfer
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerNavigasi: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    width: width - 40,
    height: 89,
    backgroundColor: '#4982C1',
    borderRadius: 10,
  },
  Rectangle: {
    height: 48,
    width: 48,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
