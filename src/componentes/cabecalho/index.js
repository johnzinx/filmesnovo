import { Text, View, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import styles from './style';

export default function Cabecalho() {
    return (
        <View style={styles.viewHeader}>
            <TouchableOpacity>
                <Feather style={styles.icon} name="menu" size={36} />
            </TouchableOpacity>
            <Text style={styles.textHeader}>DJW MOVIES</Text>
        </View>
    );
}