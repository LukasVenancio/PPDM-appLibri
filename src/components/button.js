import React from "react";

import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import COLORS from "../const/color";

const Button = ({text}) =>{

    return(

        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({

    button:{
        height:55,
        width:'100%',
        backgroundColor:COLORS.blue,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20,
    },
    title:{
        color: COLORS.white,
        fontWeight:'bold',
        fontSize:18
    }

});

export default Button;