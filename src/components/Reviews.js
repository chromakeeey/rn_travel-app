import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import Review from './Review'
import { MainColor } from '../styles/Colors'

import AntIcon from 'react-native-vector-icons/AntDesign'

const Reviews = ({reviews}) => {
    return (
        <View >
            <View>
                
            </View>
            <View>
            {
                reviews.map(review => {
                    return (
                        <View key={Math.random()} >
                            <Review review={review} />
                        </View>
                    )

                })
            }
            </View>
        </View>
    )
}

export default Reviews