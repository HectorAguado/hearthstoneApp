import React, { Component } from 'react'
import { FlatList, Image, View, Text, Alert, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import { ClassCell } from '../../widgets'

// **** Redux ****
import * as PlayerClassesActions from '../../../redux/playerClasses/actions'
import { connect } from 'react-redux'
class PlayerClasses extends Component {

    componentDidMount(){
        this.props.fetchPlayerClassesList()
    }

    _onPlayerClassTapped(playerClass){
        this.props.onPlayerClassTapped(playerClass)
        // Actions.heroes({title: playerClass.name, playerClass})
    }

    _renderItem({ item, index}){
        // console.log("ITEM VALUE ==> ", item)
        return (
            <ClassCell 
                playerClass={item} 
                index={index}
                onPlayerClassPress={ () => this._onPlayerClassTapped(item)} />
        )
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
        // console.log("this.props.playerClass => ", this.props)
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
                    // marginBottom={10}
                    // data={this.stateclassesList}
                    data={this.props.list}
                    extraData={this.props}
                    renderItem={ (item, i) => this._renderItem(item, i) }
                    keyExtractor={ (item, i) => 'playerClass' + i}
                />
                {this._renderActivityIndicator()}
            </View>
        )
    }

}
const mapStateToProps = (state) => {
    console.log("Player clases state => ", state)
    return{
        isFetching: state.playerClasses.isFetching,
        list: state.playerClasses.list,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchPlayerClassesList: () => {
            dispatch(PlayerClassesActions.fetchPlayerClassesList())
        },
        onPlayerClassTapped: playerClass => {
            dispatch(PlayerClassesActions.setItem(playerClass))
            Actions.heroes({title: playerClass.name})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerClasses)