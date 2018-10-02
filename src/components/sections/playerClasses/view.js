import React, { Component } from 'react'
import { FlatList, Image, View, Text } from 'react-native'
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

    _renderItem({ item, index}){
        console.log("ITEM VALUE ==> ", item)
        return (
            <ClassCell playerClass={item}  />
        )
    }


    render(){
        return(
            <View style={styles.container}>
                <Image 
                    source={require('../../../resources/Hearthstone-Logo.png')}
                    style={{width: '90%', height: 120}}
                    alignItems='center'
                    justifyContent='center'
                    resizeMode='contain'
                    // borderWidth={1} 
                    // borderColor={'blue'} 
                    marginTop={50}
                    marginBottom={20}
                    marginLeft='5%'
                    // paddingHorizontal={10}
                />
                <Text style={styles.mainText}>Listado de los distintos Héroes para cada clase</Text>
                <FlatList
                numColumns={1}
                    data={this.state.classesList}
                    renderItem={ value => this._renderItem(value) }
                    keyExtractor={ (item, i) => 'cell' + item}
                />
            </View>
        )
    }

}