import React from 'react'
import { View, Text } from 'react-native'

import EntypoIcon from 'react-native-vector-icons/Entypo'

const Rating = ({rating, fontColor, style, starColor='yellow'}) => {
    return (
        <View style={[{
            borderRadius: 36,
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }, style]} >
            <EntypoIcon name={'star'} color={starColor} size={14} />
            <Text style={{
                marginLeft: 5,
                fontFamily: 'Gilroy-Bold',
                fontSize: 12,
                color: fontColor,
                marginTop: 2
            }} >{rating}</Text>
        </View>
    )
}

export default Rating