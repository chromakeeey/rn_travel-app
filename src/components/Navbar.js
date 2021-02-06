import React from 'react'
import { View, ImageBackground, Text, Image, TouchableOpacity } from 'react-native'

import FeatherIcon from 'react-native-vector-icons/Feather'

const Navbar = ({image, onClickMenu}) => {
    return (
        <View style={{
            
            top: 0,
            left: 0,
            right: 0,
            flexDirection: 'row',

            paddingLeft: 15,
            paddingRight: 15,
            
            paddingTop: 32,
            paddingBottom: 15
        }} >
            <View>
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                    
                    borderRadius: 20,
                    backgroundColor: 'red'
                }} onPress={() => onClickMenu()} >
                    <Image source={image} style={{width: 40, height: 40, borderRadius: 20}} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end' }} >
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                    borderRadius: 25,

                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    padding: 10,

                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                    <FeatherIcon name='search' size={16} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Navbar