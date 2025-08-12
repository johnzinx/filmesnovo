import { View, Text, FlatList, StyleSheet } from "react-native"
import Cabecalho from '../cabecalho/index'
import Pesquisa from '../pesquisa/index'
import Banner from '../banner/index'
import CardFilmes from "../cardsfilmes/index"
import DATA from "../data/movies"
import XBOX from "../data/xbox"
import NINTENDO from "../data/nintendo"
import {useState, useEffect } from 'react';

export default function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{


      async function buscarFilmes(){
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTg5YmMxZjRjYjgxMjMwMjM2ZjIxNGM2Y2RlYWE4MCIsIm5iZiI6MTc1NTAyMTU3OC41MTYsInN1YiI6IjY4OWI4MTBhMmY3NjBiMTQ5ZDFhMzIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iwvvtebdC32yXRl-9lTdlvBIOTV17dpcwD4OouxtlJ4'
          }
        };
        
        const responses = await fetch (url, options)
        const data = await responses.json();
        console.log(data);
        
        setMovies(data.results)


      }

      buscarFilmes()


  
  },[])

  return (


    <View style={styles.container}>

      <Cabecalho />

      <Pesquisa />

      <Banner />
      <View style={{ width: "100%", height: 1000 }}>
        <Text style={styles.sectionTitle}>PlayStation</Text>
        <FlatList



          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={movies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (

            <CardFilmes

              titulo={item.title}
              nota={item.note_average}
              imagem={item.poster_path}
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
  sidebar: {
    width: 100,
    backgroundColor: '#1f2a44',
    paddingTop: 50,
    alignItems: 'center',
  },
  sidebarItem: {
    color: 'white',
    marginVertical: 15,
    fontSize: 14,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 50,
  },

});