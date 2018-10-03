import React, { Component } from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import styles from './styles'

export default class ClassCell extends Component{
    static defaultProps = {
        playerClass: 'hearthstone-trans',
        onPlayerClassPress: () => {}
    }

    render(){
        // console.log("THIS.PROPS ==> ", this.props)
        // console.log("PlayerClass ==> ", playerClass)
        const { playerClass, onPlayerClassPress } = this.props
        const placeHolder = 'hearthstone-trans'
        const pathPlaceHolder = '../../../resources/logo-' + placeHolder + '.png'
        const pathPlayerClass = '../../../resources/logo-' + playerClass + '.png'
        
        const image = require(pathPlaceHolder)
        
        // const image = playerClass? { uri: playerClass.imgUrl } : require(pathPlaceHolder)
        // const image = playerClass? require(pathPlayerClass) : require(pathPlaceHolder)
        // console.log("PATH PlaceHolder ===> ", pathPlaceHolder)
        // console.log("PATH PlayerClass ===> ", pathPlayerClass)
        
        return (
        <TouchableOpacity 
            onPress={ () => onPlayerClassPress(playerClass)} 
            style={styles.cellContainer}
            activeOpacity={0.6}
        >
            <Image
                source={image}
                style={{width: 45, height: 45}}
                resizeMode={'center'}         
            />
            <Text style={styles.baseText} >
                {playerClass}
            </Text>
        </TouchableOpacity>                                                                                      
        )}
}