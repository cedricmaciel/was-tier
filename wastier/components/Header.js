import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.menuItem}>Menu 1</Text>
      <Text style={styles.menuItem}>Menu 2</Text>
      <Text style={styles.menuItem}>Menu 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuItem: {
    fontSize: 18,
  },
});

export default Header;
