import { Text, View} from 'react-native';

export default function RawText (props) {
    const {messageOne, messageTwo, containerStyles, messageOneStyles, messageTwoStyles} = props
    return (

        <View style={containerStyles}>
                    <Text style={messageOneStyles}>{messageOne}</Text>
                    <Text style={messageTwoStyles}>{messageTwo}</Text>
                </View>

    );
}

