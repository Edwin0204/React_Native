import { Text, SafeAreaView, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ListItem from '../components/ListItem'


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




export default function Upcommingweather() {
    const renderItem = ({ item }) => (
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
    )
    const {container, image} = styles
    return (
        <SafeAreaView style={container}>
            <Text>Upcomming weather</Text>
            <ImageBackground source={require('../../assets/images/bee.jpg')} style={image}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
    }
});
