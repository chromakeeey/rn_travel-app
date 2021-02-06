import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import Rating from './Rating'
import AntIcon from 'react-native-vector-icons/AntDesign'

const Review = ({review}) => {
    return (
        <View style={{marginBottom: 10, borderBottomWidth: 1, paddingBottom: 10, borderColor: 'rgba(0, 0, 0, 0.1)' }} >
            <View style={{flexDirection: 'row'}} >
                <View>
                    <View style={{
                        width: 40,
                        height: 40,

                        borderRadius: 20,
                    }} >
                        <Image source={review.user.avatar} style={{
                            height: 40,
                            width: 40,

                            borderRadius: 20
                        }} />
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'center', marginLeft: 10 }} >
                    <Text style={{
                        fontFamily: 'Gilroy-Bold',
                        marginTop: -2
                    }} >{`${review.user.surname} ${review.user.name}`}</Text>
                    <Text style={{
                        fontFamily: 'Gilroy-Medium',
                        fontSize: 12,

                        color: 'rgba(0, 0, 0, 0.3)'
                    }} >{review.dateCreate}</Text>
                </View>
                <TouchableOpacity>
                    <AntIcon name='ellipsis1' size={25}  />
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 15}} >
                <Rating rating={review.rating} style={{ alignSelf: 'flex-start', backgroundColor: 'rgba(0,0,0,0)', paddingLeft: 0 }} starColor={'orange'} />

                <Text style={{
                    fontFamily: 'Gilroy-Medium'
                }} >
                    {review.comment}
                </Text>

            </View>

        </View>
    )
}

export default Review