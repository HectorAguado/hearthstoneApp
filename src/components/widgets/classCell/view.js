import React, { Component } from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import styles from './styles'
import * as Animatable from 'react-native-animatable';

export default class ClassCell extends Component{
    static defaultProps = {
        playerClass: 'Paladin',  // hearthstone-trans
        onPlayerClassPress: () => {}
    }

    render(){
        // console.log("THIS.PROPS ==> ", this.props)
        const { playerClass, index, onPlayerClassPress } = this.props
        // console.log("PlayerClass ==> ", playerClass.imgUrl)
        const placeHolder = 'hearthstone-trans'
        const pathPlaceHolder = '../../../resources/logo-' + placeHolder + '.png'
        const pathPlayerClass = '../../../resources/logo-' + playerClass + '.png'

        const image = require(pathPlaceHolder)
        
        // const image = {uri: 'logo-Paladin.png'}  //(pathPlaceHolder)

        // const image = playerClass? require(playerClass.imgUrl) : require(pathPlaceHolder)
        // const image = playerClass? require(pathPlayerClass) : require(pathPlaceHolder)
        // console.log("PATH PlaceHolder ===> ", pathPlaceHolder)
        // console.log("PATH PlayerClass ===> ", pathPlayerClass)
        
        const animation = index % 2 ? 'bounceInLeft' : 'bounceInRight'
        return (
        <Animatable.View animation={animation}>
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
                    {playerClass.name}
                </Text>
            </TouchableOpacity>                                                                                      
        </Animatable.View>
        )}
}