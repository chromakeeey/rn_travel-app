import React from 'react'
import { View, TextInput, Text } from 'react-native'

const CustomTextInput = ({title, titleAlign='flex-start', isSecure=false, boxStyle, onValueChanged, icon }) => {
    return (
        <View style={boxStyle}>
            <View style={{alignItems: titleAlign, justifyContent: 'center'}} >
                <Text style={{
                    fontFamily: 'Gilroy-Bold',
                    color: 'gray',

                    marginLeft: titleAlign === 'center' ? 0 : 10,
                    marginBottom: 5

                }} >{title}</Text>
            </View>
            <View style={{
                backgroundColor: '#ededed',
                borderRadius: 10,
                padding: 15,
                flexDirection: 'row'
            }} >
                <TextInput onValueChanged={(value) => onValueChanged(value)} secureTextEntry={isSecure} style={{
                    fontFamily: 'Gilroy-Bold',
                    flex: 1
                }} />
                {icon}
            </View>
        </View>
    )
}

export default CustomTextInput