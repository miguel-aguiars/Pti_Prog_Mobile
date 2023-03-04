import {Text, View, StyleSheet, FlatList
} from 'react-native';

import CardProduto from './components/CardProduto'

import Constants from 'expo-constants';

export default function App() {

  const prod1 = {
    nome: "Beef Burger",
    emoji: "🔥",
    calorias: "70 calories",
    preco: "$12.00",
    poster: {
      uri: 'https://img.freepik.com/fotos-gratis/saboroso-hamburguer-de-carne-com-queijo-e-salada-de-frente-no-fundo-escuro_140725-89597.jpg'
    }
  }

  const prod2 = {
    nome: "Pancakes",
    emoji: "🔥",
    calorias: "60 calories",
    preco: "$15.00",
    poster: {
      uri: 'https://moinhoglobo.com.br/wp-content/uploads/2015/10/panqueca-americana-1.jpg'
    }

  }



  return ( <
    View style = {
      styles.container
    } >
    <
    CardProduto style = {
      styles.prod1
    }
    prod = {
      prod1
    }
    /> <
    CardProduto style = {styles.prod2} prod = { prod2}/> ]
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
  prod2: {
    flex: 1,
  }

});