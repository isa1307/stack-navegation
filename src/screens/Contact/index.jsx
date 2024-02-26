import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Contact() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Contato</Text>

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Home')}
            >
                <Text>Go to home</Text>
            </TouchableOpacity>
        </View>
    )
}