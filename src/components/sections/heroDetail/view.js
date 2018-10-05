import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles';
import { heroes } from '../../../redux';

const hero = {
    armor: "5",
    artist: "Wayne Reynolds",
    cardId: "ICC_830",
    cardSet: "Knights of the Frozen Throne",
    collectible: true,
    cost: 8,
    dbfId: "43408",
    elite: true,
    flavor: '"I will tell you what Velen never taught me. Whosoever stands before the Light… inevitably casts a shadow."',
    health: 30,
    img: "http://media.services.zam.com/v1/media/byName/hs/cards/enus/ICC_830.png",
    imgGold: "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/ICC_830_premium.gif",
    locale: "enUS",
    name: "Shadowreaper Anduin",
    playerClass: "Priest",
    rarity: "Legendary",
    text: "<b>Battlecry:</b> Destroy all minions with 5 or more_Attack.",
    type: "Hero",
    }

class HeroDetail extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text>{hero.name}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        // isFetching: state.heroes.isFetching,
        // item: state.,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    // console.log("Heroes THIS.PROPS => ", props)
    return {
        // fetchHeroesList: () => {
        //     dispatch(HeroesActions.fetchHeroesList())
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail)
