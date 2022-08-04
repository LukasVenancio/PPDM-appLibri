import React from "react";

import {Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import Input from "../components/input";
import Button from "../components/button";
import COLORS from "../const/color";

// Função de redenrização
const Sign = () => {
  
  let name = "SIGN"

  return (

    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>CADASTRO DE LIVROS</Text>
        <View style={styles.view}>
          <Input label="Título"/>
          <Input label="Descrição"/>
          <Input label="Capa"/>
          <Button text="CADASTRAR"/>
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