import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerFilmes: {
        paddingTop:20,
        paddingBottom:16,
        paddingRight:16,
        width:140,
        height:28,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 16,
     
      },
      titulo: {
        color: 'black',
        fontSize:12,
        paddingTop:8,
      },
      textNota:{
        fontSize:10,
        color: 'black',
        paddingLeft: 4
      },
      images:{
        width:'100%',
        height:170,
        borderRadius:8,
      },
      descricao: {
        color: 'black',
        fontSize:12,
        paddingTop:8,
      },
      plataforma: {
        color: 'black',
        fontSize:12,
        paddingTop:8,
      },
})

export default styles