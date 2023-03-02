
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Titulo(props) {
  return (
     <Text styles={styles.titulo}>{props.texto}</Text>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: "#000000"
  }
});

