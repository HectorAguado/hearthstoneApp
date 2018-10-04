import React, { Component } from 'react'
import { FlatList, View,  Alert} from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import * as HeroesActions from '../../../redux/heroes/actions'

import { HeroeCell } from '../../widgets'

class Heroes extends Component {

    componentDidMount(){
        // console.log("HEROES PROPS => ", this.props)
        this.props.fetchHeroesList()
    }

    _onHeroeTapped(heroe){
        Alert.alert('HEROE NAME ', heroe.name)
        console.log("HEROE ITEM ==> ", heroe)
    }

    // de value, tomamos sólo los valores que necesitamos, usando llaves
    _renderItem({ item, index}){
        return <HeroeCell heroe={item} onHeroePress={ () => this._onHeroeTapped(item)} />
    }

    render(){
        console.log("THIS.PROPS => ", this.props)
        console.log("THIS.STATE => ", this.state)
        return(
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    data={this.props.list}
                    extraData={this.state}
                    renderItem={ value => this._renderItem(value) }
                    keyExtractor={ (item, i) => 'cell' + item.cardId}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isFetching: state.heroes.isFetching,
        list: state.heroes.list,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHeroesList: () => {
            dispatch(HeroesActions.fetchHeroesList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes)