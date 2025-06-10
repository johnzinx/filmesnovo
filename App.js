import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import Rotas from './src/componentes/rotas';


export default function App() {
  const imagem = Math.floor(Math.random());

  return (


    <Rotas />

   
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
  },


});