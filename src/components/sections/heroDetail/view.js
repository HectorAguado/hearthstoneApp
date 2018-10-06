import React from 'react'
import { View, Image,  Text, ScrollView } from 'react-native'
import styles from './styles';


// const hero = {
//     armor: "5",
//     artist: "Wayne Reynolds",
//     cardSet: "Knights of the Frozen Throne",
//     cost: 8,
//     dbfId: "43408",
//     flavor: '"I will tell you what Velen never taught me. Whosoever stands before the Light… inevitably casts a shadow."',
//     health: 30,
//     img: "http://media.services.zam.com/v1/media/byName/hs/cards/enus/ICC_830.png",
//     imgGold: "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/ICC_830_premium.gif",
//     name: "Shadowreaper Anduin",
//     playerClass: "Priest",
//     text: "<b>Battlecry:</b> Destroy all minions with 5 or more_Attack.",
//     type: "Hero",
//     }

export default class extends React.Component {
    render(){
        const { hero } = this.props  // añadido a props en mapDispatchToProps
        console.log("Hero => ", hero)
        const image = hero && hero.img ? { uri: hero.img } : null
        // const image = hero && hero.imgGold ? { uri: hero.imgGold } : null
        return(
            <ScrollView style={styles.container}>
                <Image 
                        source={image}
                        resizeMode={'contain'}
                        style={styles.image}
                />
                <View style={styles.row}>
                    <Image style={styles.icon} 
                        source={require('../../../resources/icon-cost.png')}
                        resizeMode={'contain'}
                        />
                    <Text style={styles.text}>
                        Coste: {hero.cost}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Image style={styles.icon} 
                        source={require('../../../resources/icon-health.png')}
                        resizeMode={'contain'}
                        />
                    <Text style={styles.text}>
                        Salud: {hero.health}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Image style={styles.icon} 
                        source={require('../../../resources/armor-icon.png')}
                        resizeMode={'contain'}
                        />
                    <Text style={styles.text}>
                        Armadura: {hero.armor}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Image style={styles.icon} 
                        source={require('../../../resources/logo-hearthstone-trans.png')}
                        resizeMode={'contain'}
                        />
                    <Text style={styles.text}>
                        Frase: 
                    </Text>
                </View>
                    <Text style={styles.flavor}>
                        {hero.flavor}
                    </Text>
            </ScrollView>
        )
    }
}


