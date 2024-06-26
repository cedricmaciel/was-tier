import { CameraView, useCameraPermissions } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const view = CameraView('back');
  const { hasPermission, requestPermission  } = useCameraPermissions();
  const [ permission, setPermission ]= useState< null | boolean>(bull);

  useEffect(() => {
    (async ()= > {

    })()
  }, [])

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.menu}>
          <Text style={styles.texto}>WasTier</Text>
        </View>
      </View>

      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006400',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 110,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 50,
    marginTop: 10,
  },
  cameraContainer: {
    
    width: '90%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 2,
    overflow: 'hidden', 
  },
  preview: {
    
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
