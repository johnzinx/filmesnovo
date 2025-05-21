import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from "./style";
import { useNavigation } from '@react-navigation/native';


export default function CardFilmes({titulo,nota,imagem}) {
    const navigation = useNavigation();

    return (
        <>
            <TouchableOpacity style={styles.containerFilmes} onPress={()=> navigation.navigate('Detalhes', {titulo, nota, imagem})}>

                <Image style={styles.images} source={{uri:(imagem)}} />
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.textNota}>{nota}</Text>
                


            </TouchableOpacity>

        </>

    )
}

