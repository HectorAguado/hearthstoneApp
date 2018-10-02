import React, { Component } from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import styles from './styles'

export default class ClassCell extends Component{
    static defaultProps = {
        playerClass: null,
        onPlayerClassPress: () => {}
    }

    render(){
        const { playerClass, onPlayerClassPress } = this.props
        var path = '../../../resources/logo-hearthstone-trans.png'
        const path2 = '../../../resources/logo-' + playerClass + '.png'
        // if(path2 !== null){
        //     path = path2
        // }
        console.log("PATH ===> ", path2)
        console.log("PlayerClass ==> ", playerClass)
        return (
        <TouchableOpacity 
            onPress={ () => onPlayerClassPress(playerClass)} 
            style={styles.cellContainer}
        >
            <Image
                source={require(path)}
                style={{width: 45, height: 45}}
                resizeMode={'center'}         
            />
            <Text style={styles.baseText} >
                {playerClass}
            </Text>
        </TouchableOpacity>                                                                                      
        )}
}
//playerClass? {`../../../resources/logo-${playerClass}.png'`} : 
/// {`../../../resources/logo-${playerClass}.png'`}