import React from "react";
import { View, Text, Button } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import Login from "./src/views/login";
import Sign from "./src/views/sign";
import Edit from "./src/views/edit";
import List from "./src/views/list";
import Details from "./src/views/details";

const Stack = createNativeStackNavigator()

// Função de redenrização
const App = () => {

  return (
    
    <NavigationContainer>

      <Stack.Navigator>

          {/* <Stack.Screen
            name="Sign"
            component={Sign}
            options={{title: 'Cadastro de livros'}}
          /> */}

          <Stack.Screen
            name="List"
            component={List}
            options={{title: 'Listagem de livros'}}
          />

          <Stack.Screen
            name="Details"
            component={Details}
            options={{title: 'Detalhes'}}
          />

          <Stack.Screen
            name="Edit"
            component={Edit}
            options={{title: 'Edit'}}
          />

      </Stack.Navigator>

    </NavigationContainer>

    // <List/>
    // <Details/>
  
);

}

export default App;