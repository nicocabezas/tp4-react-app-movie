import React from 'react'
import { Text, View } from 'react-native'


export const About = () => {
    

    return (
        <View style={{flex:1 ,marginTop: 20}}>
            <View style={{alignItems: 'center', paddingHorizontal: 15}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    Integrantes:
                </Text>
                <Text style={{alignItems: 'center', marginTop: 20, fontSize: 20}}>
                    Marcos Romero
                </Text>
                <Text style={{alignItems: 'center', marginTop: 20, fontSize: 20}}>
                    Nicolas Cabezas
                </Text>
                <Text style={{alignItems: 'center', marginTop: 20, fontSize: 20}}>
                    Santiago Calvi
                </Text>
            </View>
        </View>
    )
}
