import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { MainColor } from '../styles/Colors'

const TravelType = ({title, isPicked=false}) => {
    return (
        <TouchableOpacity style={{
            padding: 3,
            paddingRight: 20,

            justifyContent: 'center',
            alignItems: 'center'
        }} >
            <Text style={{
                fontFamily: 'Gilroy-Bold',
                color: isPicked ? MainColor : 'rgba(0, 0, 0, 0.2)'
            }} >
                {title}
            </Text>
            <View style={{
                width: 6,
                height: 6,
                borderRadius: 4,
                marginTop: 7,

                backgroundColor: isPicked ? MainColor : 'rgba(0, 0, 0, 0)'
            }} />
        </TouchableOpacity>
    )
}

export default TravelType