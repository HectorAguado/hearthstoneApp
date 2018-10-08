import { StyleSheet } from 'react-native'
import { themeColors } from '../../../commons/'

export default StyleSheet.create({
    container: { 
        // flex: 1, 
        backgroundColor: 'rgb(233,208,169)',
    },
    imagePicker:{
        // marginTop: 20,
        marginBottom: 0,
        margin: 20,
        // padding: 20,
        backgroundColor: themeColors.primaryLight, 
        borderWidth: 6, 
        borderColor: themeColors.dark,
        borderRadius: 20,
        width: '100%' - 20,
        height: 200,
    },
    imageText: {
        color: themeColors.dark,
        backgroundColor: themeColors.primaryLight,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'absolute',
        top: '45%',
        left: 0,
        right: 0,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 14,
    },
    buttonContainer: { 
        // marginTop: 20,
        marginBottom: 0,
        margin: 20,
        padding: 20,
        backgroundColor: themeColors.dark, 
        borderRadius: 20,
        // borderWidth: 1, 
        // borderColor: 'blue',
        // height: 50,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})