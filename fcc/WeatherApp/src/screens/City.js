import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet, ImageBackground, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText'

export default function City() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/images/city.jpg')} style={styles.imageLayout}>
                <Text style={[styles.cityName, styles.cityText]}>London</Text>
                <Text style={[styles.countryName, styles.cityText]}>UK</Text>
                <View style={[styles.populationWrapper, styles.rowLayout]}>
                    <IconText iconName = {'user'} iconColor = {'red'} bodyText = {'8000'} bodyTextStyles = {styles.populationText}/>
                </View>
                <View style={[styles.riseSetWrapper, styles.rowLayout]}>
                <IconText iconName = {'sunrise'} iconColor = {'white'} bodyText = {'10:46:58 am'} bodyTextStyles = {styles.riseSetText}/>
                <IconText iconName = {'sunset'} iconColor = {'white'} bodyText = {'17:28:16 pm'} bodyTextStyles = {styles.riseSetText}/>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        color: 'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems:'center'
    }
});