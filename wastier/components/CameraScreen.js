import React from 'react';
import { View, Button, StyleSheet, Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Webcam from 'react-webcam';

const CameraScreen = () => {
  let cameraRef = null;

  const takePicture = async () => {
    if (cameraRef) {
      if (Platform.OS === 'web') {
        const screenshot = cameraRef.getScreenshot();
        // Enviar a imagem para o backend
      } else {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.takePictureAsync(options);
        // Enviar a imagem para o backend
      }
    }
  };

  return (
    <View style={styles.container}>
      {Platform.OS === 'web' ? (
        <Webcam
          audio={false}
          ref={(ref) => {
            cameraRef = ref;
          }}
          screenshotFormat="image/jpeg"
          style={styles.preview}
        />
      ) : (
        <RNCamera
          ref={(ref) => {
            cameraRef = ref;
          }}
          style={styles.preview}
        />
      )}
      <Button title="Capture" onPress={takePicture} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    width: '100%',
  },
});

export default CameraScreen;
