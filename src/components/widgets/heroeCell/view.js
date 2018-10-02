import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './styles'

export default class HeroeCell extends Component{
    static defaultProps = {
        heroe: null,
        onHeroePress: () => {}
    }

    render(){
        const { heroe, onHeroePress } = this.props
        const name = heroe? heroe.name : 'Sin Nombre'
        // const cost = heroe? heroe.cost : 'Gratis'
        return (
        <TouchableOpacity 
            onPress={ () => onHeroePress(heroe)} 
            style={styles.cellContainer}
        >
        <Image
            source={{uri: heroe.img }}
            style={{width: '100%', height: '100%'}}
            resizeMode={'cover'}
        />
        </TouchableOpacity>                                                                                      
        )}
}