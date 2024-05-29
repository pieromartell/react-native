import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native'
import { Dimensions } from 'react-native';
import { Text } from 'react-native-paper';

// const {width,height} = Dimensions.get('window');


export const DimensionScreen = () => {
    const { width, height } = useWindowDimensions()

    return (


        <View>
            <View style={style.container}>
                <View style={{
                    ...style.purpleBox,
                    width: width * 0.8,
                }}>

                </View>
            </View>
            <Text style={style.Title}>w: {width}, h: {height} </Text>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'red'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        width: '50%'
    },
    Title: {
        fontSize: 20,
        textAlign: 'center'

    }
})