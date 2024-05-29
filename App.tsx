import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen'
import { CounterScreen } from './src/presentation/screens/CounterScreen'
import { PaperProvider } from 'react-native-paper'
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen'

import IonIcon from 'react-native-vector-icons/Ionicons'
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen'
import { DimensionScreen } from './src/presentation/screens/DimensionScreen'

export const App = () => {
  return (

    <PaperProvider
    settings={{
      icon: (props) => <IonIcon{...props}/>
    }}>
    

      <SafeAreaView style={{flex:1}}>
        {/* <CounterScreen></CounterScreen> */}
        {/* <HelloWorldScreen name='Piero Martell Falcon'></HelloWorldScreen> */}
        {/*<CounterM3Screen></CounterM3Screen>*/}
        {/* <BoxObjectModelScreen></BoxObjectModelScreen>*/}
        <DimensionScreen></DimensionScreen>
      </SafeAreaView>
    </PaperProvider>
  )
}
