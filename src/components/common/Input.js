import React from 'react';
import { TextInput, View, Text } from 'react-native';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { containerStyle, inputStyle, labelStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}> {label}</Text>
            <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};
const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 2,
        height: 50,
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        height: 50,

    },
    labelStyle: {
        fontSize: 18,
        flex: 1,
    },
};

export { Input };
