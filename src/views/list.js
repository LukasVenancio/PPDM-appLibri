import React from "react";

import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";

import Input from "../components/input";
import Button from "../components/button";

import COLORS from "../const/color";
import capaLivro150 from '../assets/livros/lor150.png';

import apiLivraria from "../services/apiLivraria";
import { useState, useEffect } from "react";

const list = () => {

    const [livros, setLivros] = useState([])

    useEffect(

        () => {
            apiLivraria.get('/livros')
                .then(

                    (data) => {

                        setLivros(data.data)
                        
                    }
                )
        },
        []
    );

    return (

        <ScrollView>

            <View style={styles.container}>

                {
                    livros.map(

                        livro => (

                            <View style={styles.post}>

                                <Image style={styles.image} source={capaLivro150} />

                                <Text style={styles.title}>
                                    {livro.titulo}
                                </Text>

                            </View>

                        ))
                }

                {/* <View style={styles.post}>

                    <Image style={styles.image} source={capaLivro150}/>
                    
                    <Text style={styles.title}>
                        LOR
                    </Text>

                </View> */}

            </View>

        </ScrollView>
    );

}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center'
    },
    post: {
        width: '95%',
        alignItems: 'center',
        backgroundColor: COLORS.gray,
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 5
    },
    image: {
        borderRadius: 5,
        marginVertical: 16,
        marginLeft: 16
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default list;