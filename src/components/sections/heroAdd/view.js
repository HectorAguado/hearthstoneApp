import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'
import { AppTextInput } from '../../widgets/'

export default class extends Component {
    
    constructor(props){
            super(props)
            this.state = {
                name: '',
                cost: '0',
                armor: '0',
                health: '0',
                flavor: ""
            }
    }

    render(){
        return(
            <View style={styles.container} >
                <AppTextInput 
                        label= {'Nombre del héroe:'}
                        value= {this.state.name}
                        placeHolder={'Ej. Reshaka'}
                        onChangeText= { name => this.setState({ name })}
                        placeholderTextColor='black'
                /> 
                <AppTextInput 
                        label= {'Coste del héroe:'}
                        value= {this.state.cost}
                        placeHolder={'0'}
                        onChangeText= { cost => this.setState({ cost })}
                        placeholderTextColor='black'
                />      
                <AppTextInput 
                        label= {'Armadura del héroe:'}
                        value= {this.state.armor}
                        placeHolder={'0'}
                        onChangeText= { armor => this.setState({ armor })}
                        placeholderTextColor='black'
                /> 
                <AppTextInput 
                        label= {'Puntos de vida del héroe:'}
                        value= {this.state.health}
                        placeHolder={'0'}
                        onChangeText= { health => this.setState({ health })}
                        placeholderTextColor='black'
                /> 
                <AppTextInput 
                        label= {'Frase del héroe:'}
                        value= {this.state.flavor}
                        placeHolder={'Ej. Uno para todos y todos para uno'}
                        onChangeText= { flavor => this.setState({ flavor })}
                        placeholderTextColor='black'
                />       
            </View>
        )
    }
}