import React from 'react'
import {View, Button, TextInput, StyleSheet} from 'react-native';

export default function LoginForm() {
    return (
        <>
            <TextInput style={styles.inputStyles} placeholder='Enter Email'/>
            <TextInput style={styles.inputStyles} placeholder='Enter Password'/>
            <View style={{paddingVertical:10}}/>
            <Button title="Login" />
            <View style={{paddingVertical:5}}/>
            <Button title="FaceBook"/>
        </>
    )
}

const styles = StyleSheet.create({
    inputStyles:{
        backgroundColor:'#eee',
        padding:10,
        borderRadius:5,
        marginVertical:5,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        elevation:3
    }
})
