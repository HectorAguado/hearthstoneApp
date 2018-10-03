import React, { Component } from 'react'
import { FlatList, View,  Alert} from 'react-native'
import styles from './styles'

import * as api from '../../../api'
import { HeroeCell } from '../../widgets'

class Heroes extends Component {

    constructor(props){
        super(props)
        this.state = {
            heroesList: [],
            playerClass: 'Shaman'
        }
    }

    componentDidMount(){
        this.setState({
            playerClass: this.props.playerClass
        })
        console.log("HEROES PROPS => ", this.props)
        this._fetchHeroesLIst()
    }

    _fetchHeroesLIst(){

        api.fetchHeroes().then( response => {
            if (response) {
                const allHeroreslist = response.data
                const aux = []
                allHeroreslist.forEach(hero => {
                    if (hero.playerClass === this.state.playerClass) aux.push(hero)
                });
                
                this.setState({ heroesList: aux }) 
            }else{
                this.setState({ heroesList: null }) 
            }

        }).catch( error => {
            console.log("Fect Heroes List ERROR ==> ", error)
            this.setState({ heroesList: [] })
        })

        // api.fetchHeroes().then( response => {
        //     this.setState({ heroesList: response? response.data : null}) 
    }

    _onHeroeTapped(heroe){
        Alert.alert('HEROE NAME ', heroe.name)
        console.log("HEROE ITEM ==> ", heroe)
    }

    // de value, tomamos sólo los valores que necesitamos, usando llaves
    _renderItem({ item, index}, playerClass){
        return <HeroeCell heroe={item} onHeroePress={ () => this._onHeroeTapped(item)} />
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    data={this.state.heroesList}
                    renderItem={ value => this._renderItem(value, "Paladin") }
                    keyExtractor={ (item, i) => 'cell' + item.cardId}
                />
            </View>
        )
    }
}

export default Heroes