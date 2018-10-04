import React, { Component } from 'react'
import { FlatList, View,  Alert, ActivityIndicator} from 'react-native'
import styles from './styles'
import { HeroeCell } from '../../widgets'

// **** Redux ****
import { connect } from 'react-redux'
import * as HeroesActions from '../../../redux/heroes/actions'


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

    _renderActivityIndicator(){
        if(!this.props.isFetching) {
            return null
        }
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
                <ActivityIndicator size={'large'} color={'#0000ff'} animating={true} />
            </View>
        )
    }

    render(){

        return(
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    data={this.props.list}
                    extraData={this.state}
                    renderItem={ value => this._renderItem(value) }
                    keyExtractor={ (item, i) => 'cell' + item.cardId}
                />
                {this._renderActivityIndicator()}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("THIS.PROPS => ", this.props)
    console.log("THIS.STATE => ", this.state)
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