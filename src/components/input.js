import React from "react";

import {View, Text, TextInput, StyleSheet} from "react-native";
import COLORS from "../const/color";

const Input = ({label, ...props}) => {

    return(
        
        <View style={style.formContainer}>
            <Text style={style.label}>{label}</Text>
            <View style={style.inputContainer}>
                <TextInput style={style.textInput} {...props}/>
            </View>
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
    }
});

export default Input;