import { StyleSheet } from 'react-native'
import { themeColors } from '../../../commons/'

export default StyleSheet.create({
    container: { 
        // flex: 1, 
        // backgroundColor: 'rgb(233,208,169)',
        padding: 20,
        paddingBottom: 0,
        // borderWidth: 1, 
        // borderColor: 'blue',
    },
    label: {
        color:'black', 
        paddingBottom: 5,
    },
    textInput: {
        backgroundColor: 'white', 
        padding: 8,
        color: themeColors.dark,
        borderRadius: 10,
    }
})