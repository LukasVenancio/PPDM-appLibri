import React from "react";
import {Text, View, StyleSheet} from "react-native";

import Login from "./src/views/login";
import Sign from "./src/views/sign";

// Função de redenrização
const App = () => {

  let name = "SENAI - JANDIRA"

  return (
    // <View>
    //   {/* Sempre que usamos JS dentro de um componente
    //    precisamos o cercar com chaves */}
    //   <Text style={style.title}>{name}</Text>
    // </View>
    <Sign/>

  );

}

const style = StyleSheet.create({
  
  container:{},

  title:{

    width:"100%",
    backgroundColor:"#f00",
    textAlign:"center",
    fontSize:16,
    lineHeight:26,
    color:"#FFF",
    fontWeight:"bold",
    padding:16
  
  }
});

//Torna a função App visível em todo o projeto
export default App;