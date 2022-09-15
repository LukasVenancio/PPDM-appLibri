import React from "react";
import {StyleSheet} from "react-native";

//import Login from "./src/views/login";
import Sign from "./src/views/sign";
import List from "./src/views/list";

// Função de redenrização
const App = () => {

  return (
    // <View>
    //   {/* Sempre que usamos JS dentro de um componente
    //    precisamos o cercar com chaves */}
    //   <Text style={style.title}>{name}</Text>
    // </View>
    //<Sign/>
    <List/>

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