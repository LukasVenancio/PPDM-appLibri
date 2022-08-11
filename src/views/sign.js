import React from "react";

import {Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import Input from "../components/input";
import Button from "../components/button";
import COLORS from "../const/color";

// Função de redenrização
const Sign = () => {
  
  /*Captura de dados com o uso de State que armazena os dados digitados.*/
  const [inputs, setInputs] = React.useState({

    titulo: '',
    descricao: '',
    capa: ''

  });

  /*Função que anipula a entrada de dados na State no método onChangeText */
  const handlerOnChange = (text, input) =>{

    setInputs((prevState) =>(

      //console.log(text)

      /*Injeção de dados na State */
      //console.log(text)
      {...prevState, [input]:text} 
    ));

    //console.log(inputs);
  };

  /*Validação dos dados*/
  const validate = ()=>{

    let result = true;

    if(!inputs.titulo){

      result = false;
      console.log('chssata')
      
    }

    if(!inputs.descricao){

      result = false;
      console.log('chata')
      
    }

    if(!inputs.capa){

      result = false;
      console.log('chata')
      
    }

  };

  return (

    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>CADASTRO DE LIVROS</Text>
        <View style={styles.view}>
          <Input label="Título" onChangeText = {(text) => {handlerOnChange(text,'titulo')} }/>
          <Input label="Descrição" onChangeText = {(text) => {handlerOnChange(text,'descricao')} }/>
          <Input label="Capa" onChangeText = {(text) => {handlerOnChange(text,'capa')} }/>
          <Button text="CADASTRAR" onPress={validate}/>
        </View>
      </ScrollView>
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  safe:{
    flex:1,
    backgroundColor: COLORS.white,
  },
  scroll:{
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title:{
    color:COLORS.black,
    fontSize: 25,
    fontWeight: 'bold',
  },
  view:{
    marginVertical: 20,

  }

});

export default Sign;