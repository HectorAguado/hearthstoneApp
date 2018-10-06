import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: 'rgb(233,208,169)',
    },
    image: {
        width:'100%',
        height: 380,
        // marginLeft: '20%',
        // borderWidth: 1, 
        // borderColor: 'blue',
        marginTop: -30,
    },
    icon: {
        width: 35,
        height: 35,
        marginLeft: '10%',
        // borderWidth: 1, 
        // borderColor: 'blue',
    },
    row: {
        flexDirection: 'row',
        width: '100%', 
        // borderWidth: 1, 
        // borderColor: 'blue', 
        alignItems:'center', 
        justifyContent:'flex-start',
        paddingVertical: 8
    },
    text: {
        fontFamily: 'Cochin',
        fontSize: 24,
        fontWeight: 'bold', 
        color: 'rgb(90,84,70)',  
        paddingHorizontal: 15,
        
    },
    flavor: {
        // fontFamily: 'Cochin',
        fontSize: 16,
        // fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'rgb(90,84,70)',  
        paddingHorizontal: '15%',
        paddingVertical: 8
        // marginLeft: '20%'
    }

})