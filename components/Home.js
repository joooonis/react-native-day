import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('hi');
        }}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Text>Go Detal</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
