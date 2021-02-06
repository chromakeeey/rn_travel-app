import React from 'react'
import { View, ScrollView, Image } from 'react-native'

import ImageTouchable from './ImageTouchable'

const ImageList = ({images, onPress}) => {

    let loopIndex = -1;

    const onClickImage = (index) => {
        onPress(index)
    }

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {
                

                images.map((image) => {
                    loopIndex ++;

                    return (
                        <View key={Math.random()} >
                            <ImageTouchable 
                                image={image.props.source} 
                                index={loopIndex} 
                                width={150} height={150} 
                                onPress={onClickImage} />
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

export default ImageList