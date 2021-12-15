import React from 'react'
import { Text, View } from 'react-native'



export const About = () => {


    return (
        
        <View style={{
            flex:1,
            backgroundColor: '#FFA420',
             
        }}>
            <View style={{alignItems: 'center', paddingHorizontal: 15}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    Members:
                </Text>
                <Text style={{alignItems: 'center', marginTop: 20, fontSize: 20}}>
                    Marcos Romero,
                </Text>
                <Text>
                 Favorite movie: Castle in the Sky
                </Text>
                
                <Text style={{alignItems: 'center', marginTop: 20, fontSize: 20}}>
                    Nicolas Cabezas
                </Text>
                <Text>
                 Favorite movie: Porco Rosso
                </Text>
                
                <Text style={{alignItems: 'center', marginTop: 20, fontSize: 20}}>
                    Santiago Calvi
                </Text>
                <Text>
                 Favorite movie: Spirited Away
                </Text>
                
            </View>
        </View>
        
    )
}
