import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

const Input = ({value,changeText,addTodo}) =>(
    <TextInput
        value = {value}
        style={styles.input}
        placeholder={"오늘 할 일"}
        maxLength={30}
        onChangeText={changeText}
        onEndEditing = {addTodo}
        returnKeyType="done"/>
)

const styles = StyleSheet.create({
    input:{
        fontSize:25,
        paddingTop:15,
        paddingBottom:15,
        borderWidth : 1,
        borderColor:'black',
    }
})

export default Input;