import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(20, 26, 41, 0.85)', // fundo escuro semitransparente
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#1c2433',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 20,
  },
  image: {
    width: 260,
    height: 360,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: -100, // faz ela "flutuar"
    zIndex: 1,
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      },
    }),
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  nota: {
    fontSize: 18,
    color: '#aaa',
    textAlign: 'center',
  },
  backButton: {
  position: 'absolute',
  top: 40,
  left: 20,
  zIndex: 10,
  padding: 10,
  backgroundColor: 'rgba(0,0,0,0.5)',
  borderRadius: 30,
},

});

export default styles;
