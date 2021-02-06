import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native'

import ImageViewer from 'react-native-image-zoom-viewer';

import ImageList from './ImageList'

import CardInfoIcon from '../components/CardInfoIcon'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AntIcon from 'react-native-vector-icons/AntDesign'

import { MainColor } from '../styles/Colors'

const Overview = ({place}) => {

    const [isImageView, setImageView] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)

    const onClickImages = (index) => {
        setImageIndex(index)
        setImageView(true)
    }

    return (
        <View  >
            <View style={{flexDirection: 'row', marginBottom: 15 }} >
                <CardInfoIcon 
                    title={'Price'}
                    info={`${place.price} $`}
                    icon={
                        <EntypoIcon name='price-tag' size={32} color={MainColor} />
                    }
                    style={{margin: 10}}/>
            </View>

            <Text style={{
                marginBottom: 8,
                fontFamily: 'Gilroy-Bold',
                color: 'rgba(0, 0, 0, 0.5)',
                fontSize: 15,

                marginBottom: 10
            }} >Images</Text>

            <ImageList images={place.images} onPress={(index) => onClickImages(index)} />

            <Modal visible={isImageView} transparent={true}  >
                <ImageViewer
                    index={imageIndex} 
                    imageUrls={place.images} 
                    style={{height: 256}} 
                    enableSwipeDown={true} 
                    onSwipeDown={() => setImageView(false)}
                    onChane={(index) => setImageIndex(index)} /> 
            </Modal>


            <Text style={{
                marginBottom: 8,
                fontFamily: 'Gilroy-Bold',
                color: 'rgba(0, 0, 0, 0.5)',
                fontSize: 15,

                marginTop: 15
            }} >Description</Text>

            <Text style={{
                fontFamily: 'Gilroy-Medium'
            }} >{place.description}</Text>

            <View style={{flexDirection: 'row', marginTop: 10 }} >
                <View style={{flex: 1, flexDirection: 'row'}} >
                    <AntIcon name='user' color={MainColor} />
                    <Text style={{
                        fontFamily: 'Gilroy-Medium',
                        color: MainColor,
                        fontSize: 16,
                        marginTop: -2,
                        marginLeft: 5,
                                    
                    }} >{`${place.authorName}`}</Text>
                </View>
                <View style={{justifyContent: 'center'}} >
                    <Text style={{
                        fontFamily: 'Gilroy-Bold',
                        color: 'rgba(0, 0, 0, 0.5)'
                        }} >{place.dateCreate}</Text>
                    </View>
                </View>

                <View style={{alignItems: 'flex-end', marginTop: 30, marginBottom: 30}} >
                    <TouchableOpacity style={{
                        padding: 7,
                        paddingLeft: 15,
                        paddingRight: 15,

                        backgroundColor: 'rgba(222, 60, 35, 0.3)',
                        borderWidth: 1,
                        borderColor: 'rgba(222, 60, 35, 1)',

                        flexDirection: 'row',

                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 36
                    }} >
                        <AntIcon name='warning' />
                        <Text style={{
                            fontFamily: 'Gilroy-Bold',
                            marginTop: 2,
                            marginLeft: 5
                        }} >Report a place</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default Overview