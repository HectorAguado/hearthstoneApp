import React, { Component } from 'react'
import { FlatList, Image, View, Text, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import { ClassCell } from '../../widgets'

const classes = ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'];

export default class extends Component {
    constructor(props){
        super(props)
        this.state = {
            classesList: []
        }
    }

    componentDidMount(){
        this.setState({
            classesList: classes
        })
    }

    _onPlayerClassTapped(playerClass){
        // Alert.alert('CLASE ', playerClass)
        // console.log("PLAYER CLASS ITEM ==> ", playerClass)
        Actions.heroes({title: playerClass, playerClass})
    }

    _renderItem({ item, index}){
        console.log("ITEM VALUE ==> ", item)
        return (
            <ClassCell playerClass={item} onPlayerClassPress={ () => this._onPlayerClassTapped(item)} />
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <Image 
                    source={require('../../../resources/Hearthstone-Logo.png')}
                    style={[{width: '90%', height: 120}, styles.mainImage]}
                />
                <Text style={styles.mainText}>Listado de los distintos Héroes para cada clase</Text>
                <FlatList
                    paddingTop={20}
                    numColumns={1}
                    data={this.state.classesList}
                    renderItem={ value => this._renderItem(value) }
                    keyExtractor={ (item, i) => 'cell' + item}
                />
            </View>
        )
    }

}