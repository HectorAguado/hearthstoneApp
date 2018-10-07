import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from './styles'

export default class extends Component {
    
    constructor(props){
            super(props)
            this.state = {
                name: '',
                cost: 0,
                armor: 0,
                health: 0,
                flavor: ""
            }
    }

    render(){
        this.props.title="Hola"
        return(
            <View style={styles.container} >
                <View style={{padding:20}}>
                    <Text style={{ color:'black', paddingBottom:5}}>
                        Nombre del héroe:
                    </Text>
                    <TextInput
                        onChangeText={ name => this.setState({name})}
                        value={this.state.name}
                        placeholder='Ej.: Reshaka'
                        style={{backgroundColor: 'white', padding: 5}}
                    />
                </View>
                <View style={{padding:20}}>
                    <Text style={{ color:'black', paddingBottom:5}}>
                        Coste:
                    </Text>
                    <TextInput
                        onChangeText={ cost => this.setState({cost})}
                        value={this.state.cost}
                        placeholder='Ej.: 0'
                        style={{backgroundColor: 'white', padding: 5}}
                    />
                </View>
                <View style={{padding:20}}>
                    <Text style={{ color:'black', paddingBottom:5}}>
                        Armadura:
                    </Text>
                    <TextInput
                        onChangeText={ armor => this.setState({armor})}
                        value={this.state.name}
                        placeholder='Ej.: Reshaka'
                        style={{backgroundColor: 'white', padding: 5}}
                    />
                </View>
                <View style={{padding:20}}>
                    <Text style={{ color:'black', paddingBottom:5}}>
                        Nombre del héroe:
                    </Text>
                    <TextInput
                        onChangeText={ name => this.setState({name})}
                        value={this.state.name}
                        placeholder='Ej.: Reshaka'
                        style={{backgroundColor: 'white', padding: 5}}
                    />
                </View>
            </View>
        )
    }
}