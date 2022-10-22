import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';

function Detail() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('detail');
        }}>
        <Text>Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Detail;
