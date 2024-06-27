import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    
    return <View />;
  }

  if (!permission.granted) {
    
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

const photo = () => {
  console.log('foto tirada');
}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.menu}>
          <Text style={styles.texto}>BICHODEX</Text>
        </View>
      </View>

      <View style={styles.cont}>
      

        <CameraView style={styles.cameraContainer} facing={facing}  isActive={true} orientation={"portrit"} resizeMode={"cover"} >
           <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={photo}>
                   <Text style={styles.text}></Text>
                </TouchableOpacity>
           </View>
        </CameraView>
      </View>

      <View style={styles.previewAnimals}>
         <Text>Algo vai surgir aqui </Text>
      </View>

      <View style={styles.header2}>
          <Text style={styles.texto2}>v 1.0.0 Beta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#2F4F4F',
    justifyContent: 'flex',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    
    
  },

  header: {
    
    width: '100%',
    height: 100,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },

  menu: {
   
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  texto: {

    textAlign: 'center',
    color: 'white',
    fontSize: 50,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    
  },

  cont: {
    
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 300,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    
    

  },

  cameraContainer: {
   
    
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', 
  },

  buttonContainer:{

    marginTop: 100,

  },

  button: {

    marginTop: 100,
    backgroundColor: '#1E90FF',
    borderRadius: 99,
    height: 75,
    width: 75,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: '#FFFFFF',
      
  },

  text: {
     color: 'black',
     fontSize: 28,
  },

  previewAnimals: {

    width: "92%", 
    height: 300,

    top: 30,

    backgroundColor: "#FFE4B5",

  },

  header2: {

    backgroundColor: 'black',
    height: 30,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    marginTop: 40,

  },

  texto2: {

    color: 'white'

  }
});
