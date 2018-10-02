import { StyleSheet } from 'react-native'

export default StyleSheet.create({ 
    cellContainer: {
        height: 60,
        width: '100%', 
        borderWidth: 1, 
        borderColor: 'rgb(235,190,97)', 
        alignItems:'center', 
        justifyContent:'flex-start',
        paddingLeft: '20%',
        paddingVertical: 5,
        flexDirection: 'row',
        // marginVertical: 0,
    },
    baseText: {
        fontFamily: 'Cochin',
        fontSize: 35,
        fontWeight: 'bold', 
        color: 'rgb(90,84,70)',  
        paddingHorizontal: 15 
    }

})