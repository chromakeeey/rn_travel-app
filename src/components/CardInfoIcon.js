import React from 'react'
import { View, Text } from 'react-native'

const CardInfoIcon = ({title, info, icon, style}) => {
    return (
        <View style={[{flexDirection: 'row' }, style]} >
            <View style={{justifyContent: 'center', alignItems: 'center', marginRight: 10}} >
                {icon}
            </View>
            <View>
                <Text style={{
                    color: 'rgba(0, 0, 0, 0.5)',
                    fontFamily: 'Gilroy-Medium'
                }} >
                    {title}
                </Text>
                <Text style={{
                    fontFamily: 'Gilroy-Bold',
                    fontSize: 24
                }} >
                    {info}
                </Text>
            </View>
        </View>

    )
}

export default CardInfoIcon