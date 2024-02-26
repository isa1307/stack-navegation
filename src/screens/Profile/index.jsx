import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export default function Profile() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Perfil</Text>

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Home')}
            >
                <Text>Go to home</Text>
            </TouchableOpacity>
        </View>
    )
}