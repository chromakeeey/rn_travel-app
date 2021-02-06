import React from 'react'
import { View, ScrollView, Image, Text } from 'react-native'

import { MainColor } from '../styles/Colors'
import MenuButton from '../components/MenuButton'

import EntypoIcon from 'react-native-vector-icons/Entypo'
import FeatherIcon from 'react-native-vector-icons/Feather'
import AntIcon from 'react-native-vector-icons/AntDesign'
import AwesomeIcon5 from 'react-native-vector-icons/FontAwesome5'

const MenuScreen = ({route, navigation}) => {
    const user = route.params.user
    const places = route.params.places

    console.log(user)

    return ( 
        <View style={{flex: 1, backgroundColor: 'white'}} >
            <View style={{flexDirection: 'row', marginTop: 30, paddingRight: 15, paddingLeft: 15, paddingBottom: 15, borderBottomWidth: 1, borderColor: 'rgba(0,0,0, 0.05)' }} >
                <View>
                    <View style={{borderRadius: 30, width: 60, height: 60}} >
                        <Image source={user.avatar} style={{borderRadius: 30, width: 60, height: 60}} />
                    </View>
                </View>
                <View style={{flex: 1, paddingLeft: 20, justifyContent: 'center'}} >
                    <Text style={{
                        fontFamily: 'Gilroy-Bold'
                    }} >{user.surname} {user.name}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10}} >
                        <EntypoIcon name='map' color={MainColor} size={16}  />
                        <Text style={{fontFamily: 'Gilroy-Bold', marginTop: 3, marginLeft: 3, color: 'gray'}} >{user.places}</Text>
                        <AwesomeIcon5 name='pen' color={MainColor} size={16} style={{marginLeft: 15}} />
                        <Text style={{fontFamily: 'Gilroy-Bold', marginTop: 3, marginLeft: 3, color: 'gray'}} >{user.reviews}</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={{backgroundColor: 'rgba(0, 0, 0, 0.02)'}} >

                <MenuButton title={'Main page'} icon={<EntypoIcon name='home' color={MainColor} size={24}  />} onPress={() => {
                    navigation.goBack()
                }} />

                <MenuButton title={'My places'}  icon={<EntypoIcon name='map' color={MainColor} size={24}  />} onPress={() => {

                }}/>

                <MenuButton title={'My requests'}  icon={<EntypoIcon name='back-in-time' color={MainColor} size={24}  />} onPress={() => {

                }} />


                <MenuButton title={'Settings'}  icon={<FeatherIcon name='settings' color={MainColor} size={24}/>} onPress={() => {

                }}/>

            </ScrollView>

            <View style={{
                position: 'absolute',
                zIndex: 3,

                bottom: 0,
                left: 0,
                right: 0,

                backgroundColor: 'white'
            }} >
                <MenuButton title={'Logout'}  icon={<AntIcon name='logout' color={MainColor} size={24}/>} onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{
                            name: 'Login',
                            params: { 
                                places: places, 
                                user: user 
                            }
                        }]
                    })
                }}/>
            </View>

        </View>
    )
}

export default MenuScreen