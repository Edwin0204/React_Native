import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RawText from '../components/RawText'

export default function CurrentWeather() {
    return (
        <SafeAreaView style={style.wrapper}>
            <View style={style.container}>
                <Feather name='sun' size={100} color={"black"} />
                <Text style={style.temp}>6</Text>
                <Text style={style.feels}>Feels like 5</Text>
                <RawText messageOne = {'High : 8'} messageTwo = {'Low : 6'} containerStyles = {style.highLowWrapper} messageOneStyles = {style.highLow} messageTwoStyles = {style.highLow}/>
            </View>
            <RawText messageOne = {'Its sunny'} messageTwo = {'its perfect Tshirt weather'} containerStyles = {style.bodyWrapper} messageOneStyles = {style.description} messageTwoStyles = {style.message}/>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink',
    },
    container: {
        flex: 1,
        alignItems: 'center', // Centra los elementos horizontalmente
        justifyContent: 'center'
    },
    temp: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        color: 'black',
        fontSize: 30
    },
    highLow: {
        color: 'black',
        fontSize: 20
    },
    highLowWrapper: {
        flexDirection: 'row'
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40
    },
    description: {
        fontSize: 48
    },
    message: {
        fontSize: 30
    }
});
