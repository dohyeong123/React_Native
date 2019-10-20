import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Subtitle = ({title})=>(
    <View>
        <Text style={styles.subTitleText}>
            {title}
        </Text>
    </View>
);

styles = StyleSheet.create({
    subTitleText:{
        color : "#3f4e66",
        fontSize: 18,
        fontWeight: "bold",
    }
})

export default Subtitle;