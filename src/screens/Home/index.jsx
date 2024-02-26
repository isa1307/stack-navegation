import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>HOME</Text>
            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Profile')}
            >
                <Text>Go to Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Contact')}
            >
                <Text>Go to Contact</Text>
            </TouchableOpacity>
        </View>
    );
}