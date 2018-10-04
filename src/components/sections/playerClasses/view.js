import React, { Component } from 'react'
import { FlatList, Image, View, Text, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import { ClassCell } from '../../widgets'

// **** Redux ****
import * as PlayerClassesActions from '../../../redux/playerClasses/actions'
import { connect } from 'react-redux'
class PlayerClasses extends Component {

    componentDidMount(){
        this.props.fetchPlayerClassesList()
        // console.log("PlayerClassArray => ", PlayerClassArray)
        // this.setState({
        //     classesList: PlayerClassArray
        // })
    }

    _onPlayerClassTapped(playerClass){
        Actions.heroes({title: playerClass.name, playerClass})
    }

    _renderItem({ item, index}){
        // console.log("ITEM VALUE ==> ", item)
        return (
            <ClassCell playerClass={item} onPlayerClassPress={ () => this._onPlayerClassTapped(item)} />
        )
    }

    render(){
        console.log("PlayerClasese.State => ", this.state)
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
                    // data={this.stateclassesList}
                    data={this.props.list}
                    extraData={this.state}
                    renderItem={ value => this._renderItem(value) }
                    keyExtractor={ (item, i) => 'cell' + item}
                />
            </View>
        )
    }

}
const mapStateToProps = (state) => {
    return{
        isFetching: state.playerClasses.isFetching,
        list: state.playerClasses.list,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchPlayerClassesList: () => {
            dispatch(PlayerClassesActions.fetchPlayerClassesList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerClasses)