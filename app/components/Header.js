import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = ()=>(
    <View style = {styles.headerContainer}>
        <Text style = {styles.headerText}>
            MyTodoApp
        </Text>
    </View>
);

const styles = StyleSheet.create({
    headerContainer : {
        marginTop:70,
        marginBottom:40,
        borderWidth:2,
        borderColor:'orange',
    },
    headerText : {
        fontSize:26,
        fontWeight:'bold',
        color:'#3f4e66',
    }

})
export default Header;