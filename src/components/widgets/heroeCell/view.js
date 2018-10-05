import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './styles'

export default class HeroeCell extends Component{
    static defaultProps = {
        heroe: null,
        onHeroePress: () => {}
    }

    render(){
        const { heroe, img, onHeroePress } = this.props
        name = heroe? heroe.name : 'Sin Nombre'
        image = heroe? {uri: heroe.img } : null
        
        return (
        <TouchableOpacity 
            onPress={ () => onHeroePress(heroe)} 
            style={styles.cellContainer}
        >
            <Image
                source={image}
                style={{width: '100%', height: '100%'}}
                resizeMode={'cover'}
            />
        </TouchableOpacity>                                                                                      
        )}
}