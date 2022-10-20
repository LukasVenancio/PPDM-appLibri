import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import Input from "../components/input";
import Button from "../components/button";

import COLORS from "../const/color";

import apiLivraria from "../services/apiLivraria";

// Função de redenrização
const Edit = ({ route, navigation }) => {

  /*Captura de dados com o uso de State que armazena os dados digitados.*/
  const [inputs, setInputs] = React.useState({

    titulo: '',
    descricao: '',
    imagem: ''

  });

  const { cod_livro } = route.params;

  useEffect(
    () => {

      apiLivraria.get(`/livros/${cod_livro}`)
        .then(

          (data) => {

            setInputs(data.data[0])
          }
        )
    }, []
  )

  /*Função que manipula a entrada de dados na State no método onChangeText */
  const handlerOnChange = (text, input) => {

    /**Prev State : estado atual da State */
    setInputs((prevState) => (

      //console.log(text)

      /*Injeção de dados na State */
      //console.log(text)
      { ...prevState, [input]: text }
    ));

    //console.log(inputs);
  };

  /*State de erro de preenchimento*/
  const [errors, setErrors] = React.useState({});

  /*Função handler(manipuladora) que configura as mensagens de erro na state. */
  const handlerErrors = (errorMesage, input) => {

    /*Podemos trocar o par de chaves do corpo de uma função quando 
    esta tem somente uma linha, para fazermos o retorno */
    setErrors((prevState) => ({ ...prevState, [input]: errorMesage }));
  }

  /*Validação dos dados*/
  const validate = () => {

    let result = true;

    if (!inputs.titulo) {

      result = false;

      handlerErrors('Informe o título do livro.', 'titulo');
    }

    if (!inputs.descricao) {

      result = false;

      handlerErrors('Informe a descrição do livro.', 'descricao');

    }

    if (!inputs.imagem) {

      result = false;

      handlerErrors('Informe a capa do livro.', 'imagem')

    }

    if (result) {

      editar()

      console.log('Editou')

    }

    console.log(errors);

  }

  const editar = () => {

    try {

      apiLivraria.put('/livros', {

        titulo: inputs.titulo,
        descricao: inputs.descricao,
        imagem: inputs.imagem,
        cod_livro: inputs.cod_livro

      })

      navigation.goBack();

    } catch (error) { }

  }

  return (

    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>EDIÇÃO DE LIVROS</Text>
        <View style={styles.view}>
          <Input
            label="Título"
            iconName="book-outline"
            onChangeText={(text) => { handlerOnChange(text, 'titulo') }}
            error={errors.titulo}
            onFocus={() => { handlerErrors(null, 'titulo') }}
            value={inputs.titulo}
          />
          <Input
            label="Descrição"
            iconName="card-text-outline"
            onChangeText={(text) => { handlerOnChange(text, 'descricao') }}
            error={errors.descricao}
            onFocus={() => { handlerErrors(null, 'descricao') }}
            value={inputs.descricao} />
          <Input
            label="Capa"
            iconName="image-outline"
            onChangeText={(text) => { handlerOnChange(text, 'imagem') }}
            error={errors.imagem}
            onFocus={() => { handlerErrors(null, 'capa') }}
            value={inputs.imagem} />
          <Button text="EDITAR" onPress={validate} />
        </View>
      </ScrollView>
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scroll: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    color: COLORS.black,
    fontSize: 25,
    fontWeight: 'bold',
  },
  view: {
    marginVertical: 20,

  }

});

export default Edit;