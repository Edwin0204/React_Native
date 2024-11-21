import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'

const DATA = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55,
        },
        weather: [
            {
                main: "Clear",
            },
        ],
    },
    {
        dt_txt: "2023-02-19 12:00:00",
        main: {
            temp_max: 10.25,
            temp_min: 6.75,
        },
        weather: [
            {
                main: "Cloudy",
            },
        ],
    },
    {
        dt_txt: "2023-02-20 12:00:00",
        main: {
            temp_max: 12.85,
            temp_min: 9.35,
        },
        weather: [
            {
                main: "Rain",
            },
        ],
    },
];


const Item = (props) => {
    const { dt_txt, min, max, condition } = props;
    return (
        <View>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>
        </View>
    );
};

export default function Upcommingweather() {
    const renderItem = ({ item }) => (
        <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
    )
    return (
        <SafeAreaView style={styles.container}>
            <Text>Upcomming weather</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
