import { View, StyleSheet, Text } from 'react-native';
import CurrentWeather from '../../src/screens/CurrentWeather'
import UpcommingWeather from '../../src/screens/UpcommingWeather'
import City from '../../src/screens/City'


export default function Index() {
  return (
    <View style={styles.container}>
      {/* <UpcommingWeather /> */}
      {/* <City/> */}
      {/* <CurrentWeather/> */}
      <Text>Hola!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff'
  }
})
