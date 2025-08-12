import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from "./style";
import { useNavigation } from '@react-navigation/native';


export default function CardFilmes({titulo,nota,imagem,descricao,plataforma}) {
    const navigation = useNavigation();

    return (
        <>
            <TouchableOpacity style={styles.containerFilmes} onPress={()=> navigation.navigate('Detalhes', {titulo, nota, imagem, descricao, plataforma})}>

                <Image style={styles.images} source={{uri:`https://image.tmdb.org/t/p/original${imagem}`}} />
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.textNota}>{nota}</Text>
                <Text style={styles.descricao}>{descricao}</Text>
                <Text style={styles.plataforma}>{plataforma}</Text>
                
            </TouchableOpacity>

        </>

    )
}

