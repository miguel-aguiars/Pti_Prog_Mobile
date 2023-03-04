import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

export default function CardProduto(props) {
  return ( <
    View >
    <
    Text style = {
      styles.nome
    } > {
      props.prod.nome
    } < /Text> <
    Text > {
      props.prod.calorias
    } < /Text> <
    Text > {
      props.prod.emoji
    } < /Text> <
    Text style = {
      styles.preco
    } > {
      props.prod.preco
    } < /Text> <
    Image style = {
      styles.poster
    }
    source = {
      props.prod.poster
    } >
    <
    /Image> <
    /View>
  );
}

const styles = StyleSheet.create({

  poster: {
    height: 200,
    width: 120,
    flexDirection: 'row',
  },
  nome: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  preco: {}
});