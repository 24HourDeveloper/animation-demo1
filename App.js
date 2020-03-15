import React, {useState, useEffect} from 'react';
import { StyleSheet, Image, View , Animated, Button} from 'react-native'
import LogInForm from './components/LoginForm'

export default function App() {
  const [fadeOut] = useState(new Animated.Value(1))
  const [riseUp] = useState(new Animated.Value(-200))

  useEffect(()=>{

  },[fadeOut])

  const fadeOutButton = () =>{
    Animated.parallel([
      Animated.timing(fadeOut,{
        toValue:0,
        duration:800
      }).start(),

      Animated.spring(riseUp, {
        toValue:100,
        duration:1000
      }).start()
    ])
  }
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./assets/family-bg.png')}
        style={{width:'100%',
        height:'100%', flex:1, justifyContent:"flex-end", opacity:fadeOut}}
      />
      <Animated.View style={{width:"100%", opacity:fadeOut}}>
        <Button title="Sign In" onPress={fadeOutButton}/>
      </Animated.View>
      <Animated.View style={{width:'80%', position:'absolute', bottom:riseUp}}>
        <LogInForm />
      </Animated.View>
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
});
