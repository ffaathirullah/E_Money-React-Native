import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Icon_backstackManipulation} from '../../../assests';

const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [ViewPass, setViewPass] = useState(false);

  return (
    <View style={styles.Container}>
      <Text style={styles.Emoney}>e-money</Text>
      <TextInput placeholder="Email" style={styles.TextInput} />
      <View style={styles.TextInputPassword}>
        <TextInput
          style={{width: width - 120}}
          placeholder="Password"
          secureTextEntry={!ViewPass ? true : false}
        />
        <TouchableOpacity onPress={() => setViewPass((prev) => !prev)}>
          <Icon_backstackManipulation/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        style={styles.ButtonLogin}
        activeOpacity={0.6}>
        <Text style={{fontSize: 16, color: '#fff'}}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Register')}>
        <Text
          style={{
            marginTop: 27,
            color: '#4E4E4E',
            fontSize: 14,
            lineHeight: 16,
          }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  ButtonLogin: {
    backgroundColor: '#4982C1',
    height: 48,
    width: width - 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  Container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  Emoney: {
    fontSize: 24,
    lineHeight: 28,
    color: '#4982C1',
    fontWeight: 'bold',
    marginBottom: 19,
  },
  TextInput: {
    width: width - 80,
    height: 48,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 25,
  },
  TextInputPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    width: width - 80,
    height: 48,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 25,
  },
});
