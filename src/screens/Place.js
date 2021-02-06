import React, { useState } from 'react'
import { View, Image, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist';

import Rating from '../components/Rating'
import TravelType from '../components/TravelType'

import Overview from '../components/Overview'
import Reviews from '../components/Reviews'

import AntIcon from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import IonIcon from 'react-native-vector-icons/Ionicons'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height



const Place = ({route, navigation}) => {
    const place = route.params.place;
    const [swiperIndex, setSwiperIndex] = useState(0)

    return (
        <View style={{flex: 1}} >
            <Image style={{
                flex: 1,
                

                width: (screenWidth),
                height: (screenHeight)
                
            }} source={place.backgroundImage} />

            


            <View style={{
                position: 'absolute',
                zIndex: 3,
                top: 0,
                left: 0,
                right: 0,
                flexDirection: 'row',

                justifyContent: 'center',
                alignItems: 'center',

                marginTop: 40,

                paddingLeft: 25,
                paddingRight: 25
            }} >
                <View style={{flex: 1}} >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <AntIcon name='arrowleft' color={place.fontColor} size={25} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <AntIcon name={'ellipsis1'} color={place.fontColor} size={25} />
                </TouchableOpacity>
            </View>

            <View style={{
                position: 'absolute',
                zIndex: 3,

                left: 0,
                bottom: 0,
                right: 0,
            }} >
                <View style={{
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 20
                }} >
                    <Rating rating={place.rating} fontColor={place.fontColor} style={{marginLeft: -10, backgroundColor: 'rgba(0, 0, 0, 0)'}} />
                    <Text style={{
                        fontFamily: 'Gilroy-Bold',
                        color: place.fontColor,
                        fontSize: 40
                    }} >{place.name}</Text>
                </View>
                <View style={{
                    paddingTop: 30,
                    paddingLeft: 25,
                    paddingRight: 25,
                    backgroundColor: 'white',

                    maxHeight: (screenHeight / 1.8),

                    borderTopLeftRadius: 36,
                    borderTopRightRadius: 36
                }} >

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom: 10}} >
                            <TravelType title={'Overview'} isPicked={ (swiperIndex === 0) } />
                            <TravelType title={`${place.reviews.length} Reviews`} isPicked={ (swiperIndex === 1) } />
                    </ScrollView>

                    

                    <View style={{height: (screenHeight / 2.5)}} >
                        <SwiperFlatList onChangeIndex={(index) => setSwiperIndex(index.index)} >
                            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 0, width: (screenWidth - 50)}} >
                                <Overview place={place} />
                            </ScrollView>
                            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 0, width: (screenWidth - 50)}} >
                                <Reviews reviews={place.reviews} />
                            </ScrollView>
                        </SwiperFlatList>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Place