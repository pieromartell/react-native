import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper'

export const BoxObjectModelScreen = () => {
  return (
    <View style= {styles.container}>
        <Text style={styles.title}>BoxObjectModelScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'red',
        flex:1
    },
    title:{
        fontSize:40,
        paddingHorizontal:30,
        paddingVertical:10,
        borderWidth:10,
    },

})
