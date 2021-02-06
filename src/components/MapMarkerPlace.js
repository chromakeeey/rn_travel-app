import React from 'react'
import { View, TouchableOpacity, Text, Image  } from 'react-native'
import MapView from 'react-native-maps'

import { MainColor, MainColorWithOpacity } from '../styles/Colors'

const MapMarkerPlace = ({place, onPress}) => {



    return (
        <MapView.Marker coordinate={place.coordinate} opacity={1}
            onPress={() => onPress(place)} >
            <View style={{
                backgroundColor: MainColor, 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: 3,
                borderRadius: 10 }} >
                <Image source={place.backgroundImage} style={{width: 50, height: 50, borderRadius: 10}} />
            </View>
        </MapView.Marker>
    )
}

export default MapMarkerPlace