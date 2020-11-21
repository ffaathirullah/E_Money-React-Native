import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  Icon_home,
  Icon_home_active,
  Icon_transaction,
  Icon_transaction_active,
  Icon_profile,
  Icon_profile_active
} from '../../assets';
import {WarnaDisable, WarnaUtama} from '../../utils';

const TabsItems = ({label, isFocused, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <Icon_home_active /> : <Icon_home />;
    }
    if (label === 'Transaction') {
      return isFocused ? <Icon_transaction_active /> : <Icon_transaction />;
    }
    if (label === 'Profile') {
      return isFocused ? <Icon_profile_active /> : <Icon_profile />;
    }
    return <icon_home />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabsItems;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (isFocused) => ({
    fontSize: 13,
    marginTop: 8,
    color: isFocused ? WarnaUtama : WarnaDisable,
  }),
});
