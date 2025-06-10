import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons'; 

export default function Detalhes() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.overlay}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: route.params.imagem }} />
        <Text style={styles.titulo}>{route.params.titulo}</Text>
        <Text style={styles.nota}>Preço: {route.params.nota}</Text>
      </View>
    </View>
  );
}
