import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function CurrentWeather() {
    return (
        <SafeAreaView style={style.wrapper}>
            <View style={style.container}>
                <Feather name='sun' size={100} color={"black"} />
                <Text style={style.temp}>6</Text>
                <Text style={style.feels}>Feels like 5</Text>
                <View style={style.highLowWrapper}>
                    <Text style={style.highLow}>High: 8</Text>
                    <Text style={style.highLow}>Low: 6</Text>
                </View>
            </View>
            <View style={style.bodyWrapper}>
                <Text style={style.description}>Its sunny</Text>
                <Text style={style.message}>Its perfect t-shirt weather</Text>
            </View>

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
