import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

const MenuButton = ({title, icon, onPress}) => {
    return (
        <TouchableOpacity style={{flexDirection: 'row', marginTop: 15, marginBottom: 15}} onPress={() => onPress()}>
            <View style={{padding: 10, paddingLeft: 20}} >
                {icon}
            </View>
            <View style={{
                justifyContent: 'center'
            }} >
                <Text style={{
                    fontFamily: 'Gilroy-Bold',
                    padding: 10,
                    fontSize: 16,
                    marginTop: 2
                }} >{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MenuButton