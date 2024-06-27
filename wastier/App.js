import { CameraView, useCameraPermissions, Camera } from 'expo-camera';
import { useState , useRef} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

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

const takePhoto =  async() => {
  if(cameraRef.current){
    try{
    const{ uri } = await cameraRef.current.takePictureAsync();
  console.log('foto tirada', uri);
  setCapturedImage(uri);
  } catch (error) {
    console.error('Erro ao tirar foto:', error);
  }
}
}

const deletePhoto = () => {
  setCapturedImage(null);
}

  return (

    <ImageBackground source={require('./assets/dream.jpg')} style={styles.container}>
    
      <View style={styles.header}>
        <View style={styles.menu}>
          <Text style={styles.texto}>BICHODEX</Text>
        </View>
      </View>
  
    <View style={styles.cont}>

           <CameraView style={styles.cameraContainer} facing={facing}  isActive={true} orientation={"portrait"} resizeMode={"cover"} >
           <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={takePhoto}>
                   <Text style={styles.text}></Text>
                </TouchableOpacity>
           </View>
        </CameraView>
    </View>

    {capturedImage && (
        <View style={styles.preview}>
          <Image source={{ uri: capturedImage }} style={styles.previewImage} />
          <TouchableOpacity style={styles.deleteButton} onPress={deletePhoto}>
            <Text style={styles.deleteText}>Excluir Foto</Text>
          </TouchableOpacity>
        </View>
      )}

    <View style={styles.previewAnimals}>
         <Text>Algo vai surgir aqui </Text>
    </View>
      

    <View style={styles.header2}>
          <Text style={styles.texto2}>v 1.0.0 Beta</Text>
    </View>
    
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  container: {
    
    flex: 1,
    
    justifyContent: 'flex',
    alignItems: 'center',
  
    
  },

  header: {
    
    width: '100%',
    height: 100,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  menu: {
   
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  texto: {

    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    backgroundColor: 'black',
    
  },

  cont: {
    
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
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
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    marginTop: 50,

  },

  texto2: {
    color: 'white'

  }, 
 preview: {
  width: "80%", 
  height: 400,
  top: 30,

 }
 ,
  previewImage: {
    width: "80%", 
    height: 300,
    top: 30,

  }
});
