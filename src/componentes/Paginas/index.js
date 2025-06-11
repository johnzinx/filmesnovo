import { View, Text, FlatList, StyleSheet } from "react-native"
import Cabecalho from '../cabecalho/index'
import Pesquisa from '../pesquisa/index'
import Banner from '../banner/index'
import CardFilmes from "../cardsfilmes/index"
import DATA from "../data/movies"
import XBOX from "../data/xbox"
import NINTENDO from "../data/nintendo"

export default function Home() {
  return (

    <View style={styles.container}>
    

      <Cabecalho />

      <Pesquisa />

      <Banner />
      <View style={{ width: "100%", height: 890 }}>
        <Text style={styles.sectionTitle}>PlayStation</Text>
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
              descricao={item.descricao}      
              plataforma={item.plataforma}

            />



          )}
        />
        <Text style={styles.sectionTitle}>Xbox</Text>
        <FlatList

        
          
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={XBOX}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (

            <CardFilmes

              titulo={item.nome}
              nota={item.nota}
              imagem={item.imagem}
              descricao={item.descricao}      
              plataforma={item.plataforma}

            />



          )}
        />
        <Text style={styles.sectionTitle}>Nintendo</Text>
        <FlatList

        
          
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={NINTENDO}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (

            <CardFilmes

              titulo={item.nome}
              nota={item.nota}
              imagem={item.imagem}
              descricao={item.descricao}      
              plataforma={item.plataforma}

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
    backgroundColor: 'white',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
    textAlign: 'center',
  },
});