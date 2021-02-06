import React from 'react'
import { View, ScrollView, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ImageTouchable = ({image, index, width, height, onPress}) => {

    

    return (
        <TouchableOpacity style={{
            height: height,
            width: width,

            marginRight: 10,
            
        }}  onPress={() => onPress(index)} >
            <Image style={{
                height: height,
                width: width,
                borderRadius: 5
            }} 
            source={image}/>
        </TouchableOpacity>
    )
}

export default ImageTouchable