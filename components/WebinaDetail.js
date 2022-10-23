import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { useRecoilState } from 'recoil';
import { appliedAtom } from '../recoilStates';

function WebinarDetail({ route }) {
  const { webinar } = route.params;
  const { tutor, id, title, formatted_start_time, thumbnail_url } = webinar;
  const { image_url: tutorImageUrl, name: tutorName } = tutor;
  const [applied, setApplied] = useRecoilState(appliedAtom);

  const applyWebinar = () => {
    setApplied((prev) => {
      const cp = { ...prev };
      cp[id] = true;
      return cp;
    });
  };
  a;

  const cancelWebinar = () => {
    setApplied((prev) => {
      const cp = { ...prev };
      cp[id] = false;
      return cp;
    });
  };

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
      {applied[id] ? (
        <TouchableOpacity onPress={cancelWebinar} style={styles.customButton}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={applyWebinar} style={styles.customButton}>
          <Text>Apply</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default WebinarDetail;
