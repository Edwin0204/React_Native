import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

export default function Upcommingweather () {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Upcomming weather</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
