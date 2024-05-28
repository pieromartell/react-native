import React, { useState } from 'react'
import { Platform, Pressable, Text, View } from 'react-native'
import { globalStyles } from '../theme/global.styles'
import { FAB } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'


export const CounterM3Screen = () => {
    const [count, setCount] = useState(10)    

  return (
    <View style= {globalStyles.centerContainer}>
        <Text style={globalStyles.tittle}>{count}</Text> 

        <Icon name="accessibility-outline"size={25}></Icon>
        <FAB
          label='Incrementar'
          style={globalStyles.fab}
          onPress={() => setCount(count+1)}
          onLongPress={() => setCount(0)}
          mode={"elevated"}
          icon="add"
        />
    </View>
  )
}

