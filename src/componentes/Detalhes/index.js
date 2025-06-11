import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons'; 

export default function Detalhes() {
  const navigation = useNavigation();
  const route = useRoute();

  const { imagem, titulo, nota, descricao, plataforma } = route.params;

  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Image style={styles.image} source={{ uri: imagem }} />

          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.preco}>{nota}</Text>

          <Text style={styles.subtitulo}>Descrição</Text>
          <Text style={styles.descricao}>{descricao}</Text>

          <Text style={styles.subtitulo}>Plataforma</Text>
          <Text style={styles.plataforma}>{plataforma}</Text>

          <TouchableOpacity style={styles.botaoCompra}>
            <Text style={styles.textoBotao}>Comprar agora</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoCarrinho}>
            <Text style={styles.textoBotaoSecundario}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
