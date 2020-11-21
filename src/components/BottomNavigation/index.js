import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const BottomTabsNavigation = ({}) => (
  <View style={styles.container}>
    <Text>I'm BottomTabsNavigation </Text>
  </View>
);

export default BottomTabsNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
