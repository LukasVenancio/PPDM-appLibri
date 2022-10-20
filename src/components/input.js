import React from "react";

import {View, Text, TextInput, StyleSheet} from "react-native";
import COLORS from "../const/color";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({label,iconName, value, error, onFocus = () =>{}, ...props}) => {

    return(
        
        <View style={style.formContainer}>
            <Text style={style.label}>{label}</Text>
            <View style={[style.inputContainer, 
                            {borderColor: error ? COLORS.red : COLORS.darkBlue}]}>
                <Icon name={iconName}/>
                <TextInput 
                        value={value}
                        style={style.textInput} 
                        {...props} 
                        onFocus={() => {onFocus()}}/>
            </View>

            <Text>{error}</Text>

        </View>
    );
}

const style = StyleSheet.create({

    formContainer: {
        marginBottom: 20,
    },
    label: {
        marginVertical: 5,
        fontSize: 15,
        color: COLORS.gray,
    },
    inputContainer:{
        height: 55,
        backgroundColor: COLORS.light,
        flexDirection:'row',
        paddingHorizontal:15,
        borderWidth: 0.5,
        alignItems:'center',
    },
    textInput:{
        color: COLORS.darkBlue,
        flex: 1,
    },
    icon:{
        fontSize: 22,
        color: COLORS.darkBlue,
        marginRight: 10,
    }
});

export default Input;