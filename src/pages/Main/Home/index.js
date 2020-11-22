import React from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';

import {HomeComponents} from '../../../components';

const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.ContainerSaldo}>
        <Text style={{fontSize: 17, color: '#484848'}}>Saldo Anda: </Text>
        <Text
          style={{fontFamily:  'Roboto', fontWeight: '500', fontSize: 36, lineHeight: 42 }}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          RP.123.456.000,00
        </Text>
      </View>
      <HomeComponents navigation={navigation} />
      <View style={{marginHorizontal: 21, marginTop: 38}}>
        <Text>Transaksi Terakhir</Text>

          <FlatList
        data={[...Array(5)]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(a, i) => i + 'a'}
        renderItem={({item, index}) => (
          <View
            style={{
              height: 72,
              backgroundColor: '#fff',
              elevation: 1,
              marginVertical: 8,
              flexDirection: 'row',
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}>
            <View style={{flex: 1, paddingHorizontal: 6}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 7,
                }}>
                <Text>{index * 1100 + 2000} </Text>
                <Text>20/08/2020</Text>
              </View>
              <View>
                <Text>Transfer ke 082240206861</Text>
              </View>
            </View>
          </View>
        )}
      />
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  Container: {},

  ContainerSaldo: {
    width,
    height: 138,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  ContainerNavigasi: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    width: width - 80,
    height: 89,
    backgroundColor: '#4982C1',
  },
  Rectangle: {
    height: 48,
    width: 48,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
