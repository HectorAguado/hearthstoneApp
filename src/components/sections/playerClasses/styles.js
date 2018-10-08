import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: 'rgb(233,208,169)', 
        // paddingBottom: 20,
    },
    mainText: {
        color: 'rgb(123,92,72)',
        fontFamily: 'Cochin',
        fontSize: 25,
        fontWeight: '900', 
        width: '90%',
        marginLeft: '5%',
        // justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 10,
    },
    mainImage:{
        alignItems:'center',
        justifyContent: 'center',
        resizeMode:'contain',
        // borderWidth: 1, 
        // borderColor: 'blue',
        marginTop: 50,
        marginBottom: 20,
        marginLeft: '5%'
        // paddingHorizontal: 10
    }
})