import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native';

import Button from './Button'

export default function LoginForm() {
    return (
        <>
            <TextInput style={styles.inputStyles} placeholder={`${'Enter Email'.toLocaleUpperCase()}`}/>
            <TextInput style={styles.inputStyles} placeholder={`${'Enter Password'.toLocaleUpperCase()}`}/>
                <View style={{paddingVertical:15}}/>
            <Button title="Log in" />
            <Button title="FaceBook"/>
        </>
    )
}

const styles = StyleSheet.create({
    inputStyles:{
        backgroundColor:'#fff',
        padding:10,
        borderRadius:5,
        marginVertical:5,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        elevation:3,
        fontSize:18
    }
})
