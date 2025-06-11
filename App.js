import { StyleSheet, ScrollView } from 'react-native';
import Rotas from './src/componentes/rotas';

export default function App() {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <Rotas />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    alignItems: 'center',
  },
});
