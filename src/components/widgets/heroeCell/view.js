import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import * as Animatable from 'react-native-animatable';
export default class HeroeCell extends Component{
    static defaultProps = {
        index: 0,
        heroe: null,
        onHeroePress: () => {}
    }

    render(){
        const { heroe, img, index, onHeroePress } = this.props
        name = heroe? heroe.name : 'Sin Nombre'
        image = heroe? {uri: heroe.img } : null
        
        const animation = 'zoomIn'
        return (
            <TouchableOpacity 
                onPress={ () => onHeroePress(heroe)} 
                style={styles.cellContainer}
            >
                <Animatable.Image
                    animation={animation}
                    source={image}
                    style={{width: '100%', height: '100%'}}
                    resizeMode={'cover'}
                />
            </TouchableOpacity>                                                                                  
        )}
}