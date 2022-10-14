import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import Login from "./src/views/login";
import Sign from "./src/views/sign";
import List from "./src/views/list";
import Details from "./src/views/details";

const Stack = createNativeStackNavigator()

// Função de redenrização
const App = () => {

  return (
    
    // <NavigationContainer>

    //   <Stack.Navigator>

    //       <Stack.Screen
    //         name="Sign"
    //         component={Sign}
    //         options={{title: 'Cadastro de livros'}}
    //       />

    //       <Stack.Screen
    //         name="List"
    //         component={List}
    //         options={{title: 'Listagem de livros'}}/>

    //   </Stack.Navigator>

    // </NavigationContainer>
    // <List/>
    <Details/>
  );

}
//Torna a função App visível em todo o projeto
export default App;