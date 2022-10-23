import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from '../styles';

import axios from 'axios';

const url = 'http://qa2.ringleserver.com/api/v4/student/landing/webinar';

function WebinarList({ navigation }) {
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

  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('WebinarDetail', { webinar: item })
          }>
          <Text>{item.id}</Text>
          <Text>{item.title}</Text>
          <Image
            style={styles.customImage}
            source={{
              uri: item.image_url,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={webinars}
        renderItem={renderItem}
        keyExtractor={webinars.id}
      />
    </View>
  );
}

export default WebinarList;
