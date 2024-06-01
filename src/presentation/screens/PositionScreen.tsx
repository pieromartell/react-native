import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.purpleBox}></View>
        <View style={styles.orangeBox}></View>


        <View style={styles.greenBox}></View>

    </View>
  )
}
  const styles = StyleSheet.create({
    container:{
         flex:1,
        // height:200,
        // width:300,
        backgroundColor: '#28c4b9',
        // justifyContent: 'center',
        // alignItems:'center'
    },
    purpleBox:{
        width:100,
        height:100,
        backgroundColor:'#5856D6',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        bottom:0,
    },

    orangeBox:{
        width:100,
        height:100,
        backgroundColor:'#f0A23B',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        right:0
    },

    greenBox:{
      // flex:1,
      // width:100,
      // height:100,
      backgroundColor:'green',
      borderWidth:10,
      borderColor:'white',
      position:'absolute',
      // bottom:0,
      // right:0,
      // top:0,
      // left:0
      ...StyleSheet.absoluteFillObject
  },
})