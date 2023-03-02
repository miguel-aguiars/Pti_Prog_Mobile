import { Text, View, StyleSheet, Image } from 'react-native';

export default function CardProduto(props) {
  return (
    <View>
    <Text 
      style={styles.nome}> 
      {props.filme.nome}</Text>
     <Text>{props.filme.calorias}</Text>
     <Text
     style={styles.preco}>
     {props.filme.preco}</Text>
     <Image 
     style={styles.poster} 
     source = {props.filme.poster}>
     </Image>
    </View>
  );
}

const styles = StyleSheet.create({
  poster: {
    height: 200,
    width: 120,
  },
  nome: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  preco : {
  }
  });
