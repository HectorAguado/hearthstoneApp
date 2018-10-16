import React, { Component } from 'react'
import { FlatList, View, ActivityIndicator} from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import { HeroeCell } from '../../widgets'

// **** Redux ****
import { connect } from 'react-redux'
import * as HeroesActions from '../../../redux/heroes/actions'

class Heroes extends Component {

    componentDidMount(){
        this.props.fetchHeroesList()
    }

    _selectPlayerClassHeroes(){
        const aux = []
        const { list, playerClass } = this.props
        list.forEach(hero => {
            if (hero.playerClass === playerClass.name) aux.push(hero)
        });
        return aux         
}

    _onHeroeTapped(hero){
        this.props.onHeroTapped(hero)        
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
        // console.log("<heroes/view.js> this.props ==> ", this.props)
        const selectedHeroList = this._selectPlayerClassHeroes()
        return(
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    data={selectedHeroList}  //{this.props.list}
                    extraData={this.state}
                    renderItem={ (item, index) => this._renderItem(item, index) }
                    keyExtractor={ (item, i) => 'cell' + item.cardId}
                />
                {this._renderActivityIndicator()}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isFetching: state.heroes.isFetching,
        list: state.heroes.list,
        playerClass: state.playerClasses.item
    }
}

const mapDispatchToProps = (dispatch, props) => {
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