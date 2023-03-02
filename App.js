
import { Text, View, StyleSheet } from 'react-native';

import CardProduto from './components/CardProduto'

import Constants from 'expo-constants';

export default function App() {

    const filme1 = {
    nome:"Beef Burger",
    calorias : "🔥 70 calories",
    preco: "$12.00",
    poster: {uri: 'https://img.freepik.com/fotos-gratis/saboroso-hamburguer-de-carne-com-queijo-e-salada-de-frente-no-fundo-escuro_140725-89597.jpg'}
  }

    const filme2 = {
    nome: "Pancakes",
    calorias : "🔥60 calories",
    preco: "$15.00",
    poster: {uri: 'https://moinhoglobo.com.br/wp-content/uploads/2015/10/panqueca-americana-1.jpg'}

  }



  return (
    <View style={styles.container}>
    <CardProduto filme={filme1}/>
    <CardProduto filme={filme2}/>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#eeeeee',
    padding: 8,
  },
    
});
