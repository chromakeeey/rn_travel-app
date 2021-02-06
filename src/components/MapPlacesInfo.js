import React from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import EntypoIcon from 'react-native-vector-icons/Entypo'
import { MapStyle } from '../styles/MapStyle'

const screenWidth = Dimensions.get('screen').width

const MapPlacesInfo = ({count, onPress}) => {

    const mapImage = require('../images/map.jpg')

    

    return (
        <View style={{
            marginTop: 30,
            paddingRight: 15,

            paddingBottom: 50
        }} >
            <Text style={{
                fontFamily: 'Gilroy-Bold',
                fontSize: 32,

                marginBottom: 15
            }} >Map of places</Text>

            <TouchableOpacity style={{
                height: 256,
                borderRadius: 24,
                backgroundColor: 'rgba(0, 0, 0, 0.1)'
            }} onPress={() => onPress()} >
                <Image source={mapImage} style={{
                    height: 256,
                    width: (screenWidth - 30),
                    borderRadius: 24
                }} />
            </TouchableOpacity>

            <View style={{marginTop: 10}} >
                <View style={{flexDirection: 'row', padding: 15, alignItems: 'center'}} >
                    <View style={{flexDirection: 'row', flex: 1}} >
                        <View style={{justifyContent: 'center', alignItems: 'center', marginRight: 10}} >
                            <EntypoIcon name='map' size={28} />
                        </View>
                        <View>
                            <Text style={{
                                fontFamily: 'Gilroy-Bold'
                            }} >{count}</Text>
                            <Text style={{
                                fontFamily: 'Gilroy-Medium'
                            }} >places</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{
                        borderRadius: 36,
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        padding: 5,
                        paddingLeft: 15,
                        paddingRight: 15,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }} >
                        <EntypoIcon name='plus' size={16} />
                        <Text style={{
                            fontFamily: 'Gilroy-Bold',
                            marginTop: 2,
                            marginLeft: 3
                        }} >Add new place</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default MapPlacesInfo