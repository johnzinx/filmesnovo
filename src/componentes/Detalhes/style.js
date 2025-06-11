import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#f0f0f0', // cinza bem claro
    paddingTop: 40,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#e6e6e6', // cartão cinza médio
    borderRadius: 20,
    padding: 20,
    width: '90%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    marginTop: 20,
  },
  image: {
    width: 260,
    height: 360,
    borderRadius: 20,
    marginBottom: 20,
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
    }),
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
    textAlign: 'center',
  },
  preco: {
    fontSize: 20,
    color: '#27ae60',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitulo: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  descricao: {
    color: '#555',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 15,
    textAlign: 'justify',
  },
  plataforma: {
    color: '#444',
    fontSize: 14,
    marginBottom: 25,
  },
  botaoCompra: {
    backgroundColor: '#27ae60',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  botaoCarrinho: {
    backgroundColor: '#2980b9',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textoBotaoSecundario: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 30,
  },
});

export default styles;
