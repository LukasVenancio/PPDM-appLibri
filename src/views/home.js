import React from "react";
import {Text, View, StyleSheet} from "react-native";

// Função de redenrização
const Home = () => {
  
  let name = "HOME"

  return (
    <View>
      {/* Sempre que usamos JS dentro de um componente
       precisamos o cercar com chaves */}
      <Text>{name}</Text>
    </View>
  );
}

export default Home;