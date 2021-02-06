import React from 'react'
import { View, Text, StatusBar, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Navbar from '../components/Navbar'
import TravelType from '../components/TravelType'
import CardPlace from '../components/CardPlace'
import MapPlacesInfo from '../components/MapPlacesInfo'

import FeatherIcon from 'react-native-vector-icons/Feather'
import EntypoIcon from 'react-native-vector-icons/Entypo'




const Main = ({route, navigation}) => {
    const avatarImage = require('../images/avatar.jpeg')

    const places = route.params.places;
    const user = route.params.user;

    const onClickCard = (place) => {
        navigation.navigate('Place', {place: place})
    }

    const onClickMenu = () => {
        navigation.navigate('MenuScreen', {
            user: user,
            places: places
        })
    }

    return (
        <View style={{flex: 1, backgroundColor: 'white'}} >
            <StatusBar barStyle='dark-content' />
            <Navbar image={avatarImage} onClickMenu={onClickMenu} />

            <ScrollView style={{
                padding: 15,
                paddingRight: 0,
                
                
            }} showsVerticalScrollIndicator={false} >
                <Text style={{
                    fontFamily: 'Gilroy-Bold',
                    fontSize: 32,

                    marginBottom: 15
                }} >{`Hi, ${user.name}`}</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <TravelType title={'Most viewed'} isPicked={true} />
                    <TravelType title={'Recommended'} />
                    <TravelType title={'Favorite'} />
                </ScrollView>

                <ScrollView style={{
                    
                    marginTop: 15,
                    padding: 10,
                    paddingLeft: 0,
                    marginLeft: 0
                }} horizontal={true} showsHorizontalScrollIndicator={false} >
                    {
                        places.map((place) => {
                            return (
                                <View key={Math.random()} >
                                    <CardPlace place={place} isFavorite={false} onPress={onClickCard} />
                                </View>
                            )
                        })
                    }
                </ScrollView>

                <MapPlacesInfo count={places.length} onPress={() => {
                    navigation.navigate('MapPlaces', {
                        places: places
                    })
                }}/>



            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    }
})

export default Main