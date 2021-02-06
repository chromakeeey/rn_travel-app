import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import CustomTextInput from '../components/CustomTextInput'
import { MainColor } from '../styles/Colors'
import Main from './Main'

const LoginScreen = ({route, navigation}) => {
    const places = route.params.places;
    const user = route.params.user;

    return (
        <View style={{backgroundColor: 'white', flex: 1, padding: 25, paddingBottom: 15, paddingTop: 30}} >
            <StatusBar style='dark' />

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{
                    fontFamily: 'Gilroy-Bold',
                    fontSize: 64
                }} >
                    Travel</Text>
                <Text style={{
                    fontFamily: 'Gilroy-Bold',
                    fontSize: 32,
                    color: MainColor
                }} >Go</Text>
            </View>

            <View>
                <Text style={{
                    alignSelf: 'center',
                    fontFamily: 'Gilroy-Bold',
                    fontSize: 16,
                    marginBottom: 32,
                    color: 'gray'
                }} >Authorization</Text>

                <CustomTextInput title={'Email'} onValueChanged={(value) => console.log(value)}  boxStyle={{marginBottom: 30}} />
                <CustomTextInput title={'Password'} onValueChanged={(value) => console.log(value)}  />

                <TouchableOpacity style={{
                    backgroundColor: MainColor,

                    justifyContent: 'center',
                    alignItems: 'center',

                    padding: 15,

                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 60,

                    borderRadius: 5
                }} onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{
                            name: 'Main',
                            params: { 
                                places: places, 
                                user: user 
                            }
                        }]
                    })
                }} >
                    <Text style={{
                        color: 'white',
                        fontFamily: 'Gilroy-Bold'
                    }} >Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 15
                }} >
                    <Text style={{
                        fontFamily: 'Gilroy-Bold',
                        color: 'gray'
                    }}> Create an account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 50
                }} >
                    <Text style={{
                        fontFamily: 'Gilroy-Medium',
                        color: 'gray'
                    }}> Need help?</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default LoginScreen