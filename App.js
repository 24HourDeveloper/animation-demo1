import React, {useState, useEffect} from 'react';
import { StyleSheet, Image, View , Animated, Dimensions} from 'react-native'
import {AppLoading} from 'expo'
import {Asset} from 'expo-asset'

import LogInForm from './components/LoginForm'
import Button from './components/Button'


const {height, width} = Dimensions.get('window');

const cacheImages = (images) => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function App() {
  const [fadeOut] = useState(new Animated.Value(.4))
  const [buttonFade] = useState(new Animated.Value(1))
  const [riseUp] = useState(new Animated.Value(-300))
  const [isReady, setIsReady] = useState(false)

  useEffect(()=>{

  },[])

  const _loadAssetsAsync = async() => {
    const imageAssets = cacheImages([
      require('./assets/family-bg2.png'),
      require('./assets/family-bg.png'),
      require('./assets/baby1.jpg'),
      require('./assets/family-feet-sand.jpg')
    ]);

    await Promise.all([...imageAssets]);
  }


  /*Animation functions start here  */
  const fadeOutButton = () =>{
    Animated.parallel([
      Animated.timing(fadeOut,{
        toValue:0,
        duration:800
      }).start(),

      Animated.timing(buttonFade,{
        toValue:0,
        duration:800
      }).start(),

      Animated.spring(riseUp, {
        toValue:height / 3,
        duration:1000
      }).start()
    ])
  }
  return (
    <View style={styles.container}>
      { !isReady ? 
        <>
          <AppLoading
              startAsync={_loadAssetsAsync}
              onFinish={() => setIsReady(true)}
              onError={console.warn}
          />
        </>:
        <>
          <View style={{...StyleSheet.absoluteFill, backgroundColor:'#eee'}}>
            <Animated.Image
              source={require('./assets/family-feet-sand.jpg')}
              style={{width:null,
              height:null, flex:1, opacity:fadeOut}}
            />
          </View>
          <Animated.View style={{...styles.animatedViews, opacity:buttonFade, height:height/3, width:width}}>
            <View style={styles.buttonContaner}>
              <Button title="Sign In" onPress={fadeOutButton}/>
            </View>
          </Animated.View>
          <Animated.View style={{...styles.animatedViews, bottom:riseUp, width:width}}>
            <View style={styles.buttonContaner}>
              <LogInForm />
            </View>
          </Animated.View>
        </> 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end',
    backgroundColor: '#fff'
  },
  animatedViews:{ position:'absolute', alignItems:'center'},
  buttonContaner:{
    width:'80%',
  }
});
