import React from 'react'
import {View,Text,StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import {AntDesign} from "@expo/vector-icons"
const TodoItem = ({text})=>(
    <View style={styles.todoContainer}>
        <View>
            <View style={styles.lineContainer}>
                <View style={styles.makerow}>
                    
                    <TouchableOpacity>
                        <AntDesign name="checkcircle" size={20} style={styles.checkbtn}/>
                    </TouchableOpacity>
                    <Text style={styles.todoitem}>
                        {text}
                    </Text>
                </View>

                <TouchableOpacity>
                    <AntDesign name="closecircle" size={20}/>    
                </TouchableOpacity>    

            </View>
        </View>
    </View>
);
//여기 바꿈 다시한번  다시한번
const{width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
    todoContainer : {
        padding:5,
        marginTop:20,
        borderBottomWidth:1,
        width : width-40,
    },
    todoitem : {
        fontSize: 20,

    },
    lineContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    makerow:{
        flexDirection:'row',
    },
    checkbtn:{
        marginRight:20,
    }
})

export default TodoItem