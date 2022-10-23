import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

function WebinarDetail({ route }) {
  const { webinar } = route.params;
  const { tutor, id, title, formatted_start_time, thumbnail_url } = webinar;
  const { image_url: tutorImageUrl, name: tutorName } = tutor;

  return (
    <View>
      <Text>{title}</Text>
      <Text>{formatted_start_time}</Text>
      <Image
        style={styles.customImageDetail}
        source={{
          uri: thumbnail_url,
        }}
      />
      <Text>tutor : {tutorName}</Text>
      <Image
        style={styles.customImage}
        source={{
          uri: tutorImageUrl,
        }}
      />
    </View>
  );
}

export default WebinarDetail;
