import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import AntIcon from 'react-native-vector-icons/AntDesign'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import MapMarkerPlace from '../components/MapMarkerPlace'
import { MapStyle, MainColorWithOpacity } from '../styles/MapStyle'

import { LinearGradient } from 'expo-linear-gradient';

const MapPlaces = ({route, navigation}) => {
    const places = route.params.places;
    
    const onClickMapMarker = (place) => {
        navigation.navigate('Place', {
            place: place
        })
    }

    return (
        <View style={{flex: 1}} >

            <View style={{
                position: 'absolute',
                zIndex: 2,
                top: 0,
                left: 0,
                right: 0,
                height: 128,
            }} >
                <LinearGradient
                    colors={['rgba(255, 255, 255, 1.0)', 'rgba(255, 255, 255, 0)']}
                    style={{height: 128, paddingLeft: 15, paddingTop: 30 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <AntIcon name='arrowleft' color={'black'} size={25} />
                    </TouchableOpacity>
                </LinearGradient>
            </View>

            <View style={{
                position: 'absolute',
                zIndex: 2,
                bottom: 0,
                left: 0,
                right: 0,
                height: 128,
            }} >
                <LinearGradient
                    colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
                    style={{height: 128, justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                        <Text style={{
                            fontFamily: 'Gilroy-Bold',

                            marginLeft: 15,
                            marginBottom: 30,

                            fontSize: 26,
                            color: 'rgba(0, 0, 0, 0.5)'
                        }} >
                            Map of places
                        </Text>
                </LinearGradient>
            </View>

            <MapView
                provider={PROVIDER_GOOGLE}
                style={{flex: 1}}
                customMapStyle={MapStyle}>
                {
                    places.map((place) => {
                        return (
                            <View key={place.id} >
                                <MapMarkerPlace place={place} onPress={(place) => onClickMapMarker(place)} />
                            </View>
                        )
                    })
                }
            </MapView>
        </View>
    )
}

export default MapPlaces