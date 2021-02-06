import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import EntypoIcon from 'react-native-vector-icons/Entypo'

const CardPlace = ({place, isFavorite, onPress}) => {

    const borderRadius = 15
    const cardHeight = 300
    const cardWidth = 220   


    return (
        <TouchableOpacity style={[{
            height: cardHeight,
            backgroundColor: 'black',
            borderRadius: borderRadius,
            width: cardWidth,

            marginRight: 20
        }, styles.shadow]} onPress={() => onPress(place)} >
            
            <Image source={place.backgroundImage} style={{
                height: cardHeight,
                width: cardWidth, 
                borderRadius: borderRadius}} />

            <View style={{
                position: 'absolute',
                zIndex: 3,
            
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,

                borderRadius: borderRadius,

                padding: 15
            }} >
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end' }} >
                    <View style={{
                        borderRadius: 36,
                        padding: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',

                        backgroundColor: 'rgba(0, 0, 0, 0.2)'
                    }} >
                        <EntypoIcon name={'star'} color={'yellow'} size={14} />
                        <Text style={{
                            marginLeft: 5,
                            fontFamily: 'Gilroy-Bold',
                            fontSize: 12,
                            color: place.fontColor,
                            marginTop: 2
                        }} >{place.rating}</Text>
                    </View>
                </View>

                <View>
                    <Text style={{
                        fontFamily: 'Gilroy-Bold',
                        color: place.fontColor,
                        fontSize: 28
                    }}  >{place.name}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}} >
                        <AwesomeIcon name={'map-marker'} color={place.fontColor} size={18} />
                        <Text style={{
                            color: place.fontColor,
                            fontFamily: 'Gilroy-Medium',
                            fontSize: 18,
                            marginLeft: 5,
                            marginTop: 2
                        }} >{place.location}</Text>
                    </View>
                </View>

            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.58,
        shadowRadius: 0.00,
        
        elevation: 24,
    }
})

export default CardPlace