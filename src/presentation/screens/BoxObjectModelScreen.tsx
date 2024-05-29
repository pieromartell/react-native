import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper'
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const BoxObjectModelScreen = () => {
  return (
    <View style= {styles.container}>
        {/* <Text style={styles.title}>BoxObjectModelScreen</Text> */}
        <View style={styles.purpleBox}>
          <Text style={{color:'white'}}>Hola Mundo</Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'red',
        flex:1
    },
    title:{
        fontSize:30,
        paddingHorizontal:30,
        paddingVertical:10,
        borderWidth:10,
    },
    purpleBox:{
      height:30,
      backgroundColor:'purple',
      // margin:20
      marginHorizontal:20,
      marginVertical:50,
      padding:5
    }

})
