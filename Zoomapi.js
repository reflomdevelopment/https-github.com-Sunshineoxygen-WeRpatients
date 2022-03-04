import React ,{useState,useEffect}from 'react';
import {  View,StyleSheet,AppRegistry,ActivityIndicator,Text } from 'react-native'  
import {WebView} from 'react-native-webview'  
import {
  PermissionsAndroid
} from 'react-native';


const SignupPatholodgy = ({navigation,route}) => {
    const {urlmeeting} = route.params;
    
    cameraPermission = async () => {

      let granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message:
            "App needs access to your camera " +
            "so others can see you.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
  }
  
  micPermission = async () => {
  
  let granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    {
      title: "Audio Permission",
      message:
        "App needs access to your audio / microphone",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK"
    }
  );
  
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log("You can use the Microphone");
  } else {
    console.log("Microphone permission denied");
  }  
  }

  
  micPermission = async () => {
      let granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: "Audio Permission",
          message:
            "App needs access to your audio / microphone",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
  
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the Microphone");
      } else {
        console.log("Microphone permission denied");
      }    
  }


  useEffect(() => { 
    cameraPermission();
  micPermission();
  })








//   const [isLoading1, setLoading1] = useState(true);   
  function LoadingIndicatorView() {
    return <ActivityIndicator color='#009b88' size='large' />
  }
  const ActivityIndicatorElement = () => {
    //making a view to show to while loading the webpage
    return (
        <View style={{ flex: 1, paddingTop: '0%' }}>
        <ActivityIndicator animating={true} color={'#253A79'} />
        <Text style={{ color: '#253A79', fontSize: 15, textAlign: 'center' }}>Please wait as we load your data</Text>
      </View>
    );
 }

return (
    <View style = {styles.container}>  
   
    <WebView  
    useWebKit
    originWhitelist={['*']}
    bounces={true}
    allowsInlineMediaPlayback={true}
    mediaPlaybackRequiresUserAction={false}
    renderLoading={ActivityIndicatorElement}
    startInLoadingState={true}
    javaScriptEnabled={true}
    // onLoadStart={setLoading1(true)}
    //  onLoad={setLoading1(false)}
     userAgent={"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0"}   
     useref={"WEBVIEW"}
     automaticallyAdjustContentInsets={false}
        source = {{ uri:urlmeeting}}  
    />  
        
</View>  
);
}
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
})  
  


export default SignupPatholodgy;

