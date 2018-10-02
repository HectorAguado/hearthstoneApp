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
        const path = '../../../resources/logo-hearthstone-trans.png'
        const path2 = '../../../resources/logo-' + playerClass + '.png'
        console.log("PATH ===> ", path2)
        return (
        <TouchableOpacity 
            onPress={ () => onHeroePress(playerClass)} 
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