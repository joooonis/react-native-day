import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';

function Home() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('hi');
        }}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
