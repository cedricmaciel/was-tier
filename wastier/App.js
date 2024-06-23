import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Menu 1</Text>
        <Text style={styles.headerText}>Menu 2</Text>
        <Text style={styles.headerText}>Menu 3</Text>
        <Text style={styles.headerText}>Menu 4</Text>
      </View>
      {/* Conteúdo da página pode ser adicionado aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#f0f0f0',
    paddingTop: 20, // Para ajustar a altura do status bar no iOS
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
