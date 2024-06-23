import { View, Text, StyleSheet } from 'react-native'




export default function App(){
  return (

    <View style={styles.header}>
      <View style={styles.menu}>
      <Text style={styles.texto}>WasTier</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flex:1,
    backgroundColor: "green",
    fonteSize: 100,
    marginTop: 34
  },

  menu:{

   
    height: 80,

    width: '100%',
    backgroundColor: "black",
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center', // centraliza horizontalmente
    
  },
  texto: {
    color: "white",
    fonteSize: 24,
    
  }

})




