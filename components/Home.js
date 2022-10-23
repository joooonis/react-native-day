import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';

const url = 'http://qa2.ringleserver.com/api/v4/student/landing/webinar';

import axios from 'axios';
import { useState } from 'react';

function Home({ navigation }) {
  const [webinars, setWebinars] = useState([]);

  useEffect(() => {
    // http requset
    axios
      .get(url)
      .then(function (response) {
        // handle success
        const { success, webinars: _webinars } = response.data;

        console.log(_webinars);
        if (success) {
          setWebinars(_webinars);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>webinars[0].title</Text>
      <Text>webinars[0].title</Text>
      <Text>webinars[0].title</Text>
    </View>
  );
}

export default Home;
