import React, { Component } from 'react'
import { FlatList, View,  Alert, ActivityIndicator} from 'react-native'
import { Actions } from 'react-native-router-flux'
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

    _onHeroeTapped(hero){
        this.props.onHeroTapped(hero)
        // Alert.alert('HEROE NAME ', heroe.name)
        
    }

    // de value, tomamos sólo los valores que necesitamos, usando llaves
    _renderItem({ item, index}){
        // return <HeroeCell heroe={item} onHeroePress={ () => this._onHeroeTapped(item)} />
        return <HeroeCell 
                    heroe={item} 
                    index={index}
                    onHeroePress={ this.props.onHeroTapped} 
                />
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
                    renderItem={ (item, index) => this._renderItem(item, index) }
                    keyExtractor={ (item, i) => 'cell' + item.cardId}
                />
                {console.log("this.state ==> ", this.state)}
                {this._renderActivityIndicator()}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("heroes state => ", state)
    return{
        isFetching: state.heroes.isFetching,
        list: state.heroes.list,
        // playerClass: state.heroes.item
    }
}

const mapDispatchToProps = (dispatch, props) => {
    // console.log("Heroes THIS.PROPS => ", props)
    return {
        fetchHeroesList: () => {
            dispatch(HeroesActions.fetchHeroesList())
        },
        onHeroTapped: hero => {
            dispatch(HeroesActions.setItem(hero))
            Actions.heroDetail({title: hero.name})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes)