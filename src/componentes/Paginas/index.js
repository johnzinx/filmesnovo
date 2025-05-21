import { View,Text, FlatList, StyleSheet } from "react-native"
import Cabecalho from '../cabecalho/index'
import Pesquisa from '../pesquisa/index'
import Banner from '../banner/index'
import CardFilmes from "../cardsfilmes/index"
import DATA from "../data/movies"

export default function Home(){
return (

    <View style={styles.container}>

      <Cabecalho />

      <Pesquisa />

      <Banner />
      <View style={{width:"90%",height:300 }}>

      <FlatList

        showsHorizontalScrollIndicator={false}


        horizontal={true}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <CardFilmes

            titulo={item.nome}
            nota={item.nota}
            imagem={item.imagem}

          />



        )}

      />

    </View>

    </View>
)


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
  },


});