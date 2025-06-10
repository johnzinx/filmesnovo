import { Text, View, Image } from "react-native"
import styles from './style';


export default function Banner(){
    return (

        <>
            <Text style={styles.textBanner}>Jogos Disponiveis </Text>

            <Image style={styles.imageBanner} source={require(`../../../assets/cinemaLOGOGPT.png`)} />
            
        </>
    );
}