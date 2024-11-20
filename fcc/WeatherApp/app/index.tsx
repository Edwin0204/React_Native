import { View, StyleSheet } from 'react-native';
import CurrentWeather from '../src/components/CurrentWeather'
import UpcommingWeather from '../src/components/UpcommingWeather'


export default function Index() {
  return (
    <View style={styles.container}>
      <UpcommingWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
