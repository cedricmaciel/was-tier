import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import CameraScreen from './CameraScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CameraScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
