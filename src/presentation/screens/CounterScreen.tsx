import React, { useState } from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '../components'
import { Button } from 'react-native-paper'

export const CounterScreen = () => {
    const [count, setCount] = useState(10)    

  return (
    <View style= {styles.container}>
        <Text style={styles.tittle}>{count}</Text> 


       {/* <PrimaryButton
       label='Incrementar'
       onPress={()=> setCount(count+1)}
       onLongPress={() => setCount(0)}>
       </PrimaryButton> */}
        <Button
       onPress={()=> setCount(count+1)}
       onLongPress={() => setCount(0)}
       mode='contained'>
        Incrementar
       </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tittle:{
        fontSize: 80,
        color: 'black',
        fontWeight: '300',
    },
    button:{
        backgroundColor: Platform.OS == 'android'? '#5856D6': 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonPressed:{
        backgroundColor: Platform.OS == 'android'? '#4746AB': 'white'
    }
})
