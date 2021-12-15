import React from 'react';
import FilmDetail from '../components/FilmDetail';
import { View } from 'react-native'
export const FilmDetailScreen = ({ route }) => {
    

    const film = route.params;

    return (
        <View style={{flex:1 ,marginTop: 20, backgroundColor: '#FFA420' }}>
        <FilmDetail film={film}  />
        </View>
    )
}
