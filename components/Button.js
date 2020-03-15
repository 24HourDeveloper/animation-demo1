import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function Button({title, onPress}) {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.button}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#ADEFD1FF',
        marginVertical:5,
        padding:10,
        borderRadius:5,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        elevation:3
    },
    button:{
        textAlign:'center',
        fontSize:18,
        color:'#000'
    }
})
