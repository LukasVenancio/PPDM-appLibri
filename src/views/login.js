import React from "react";
import {Text, View, StyleSheet} from "react-native";

// Função de redenrização
const Login = () => {
  
  let name = "LOGIN00000s"

  return (
    <View>
      {/* Sempre que usamos JS dentro de um componente
       precisamos o cercar com chaves */}
      <Text>{name}</Text>
    </View>
  );

}

export default Login;