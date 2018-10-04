class PlayerClass {  
    constructor(name){
        this.name = name
        this.imgUrl = '../../../resources/logo-' + name + '.png'
    }
}

const classesTypes = ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'];

const classesArray = [
        {name: "Druid", imgUrl: "../../../resources/logo-Druid.png"},
        {name: "Hunter", imgUrl: "../../../resources/logo-Hunter.png"},
        {name: "Mage", imgUrl: "../../../resources/logo-Mage.png"},
        {name: "Paladin", imgUrl: "../../../resources/logo-Paladin.png"},
        {name: "Priest", imgUrl: "../../../resources/logo-Priest.png"},
        {name: "Rogue", imgUrl: "../../../resources/logo-Rogue.png"},
        {name: "Shaman", imgUrl: "../../../resources/logo-Shaman.png"},
        {name: "Warlock", imgUrl: "../../../resources/logo-Warlock.png"},
        {name: "Warrior", imgUrl: "../../../resources/logo-Warrior.png"},
]


function transformArray(array){
    const aux = []
    array.forEach(element => {
        aux.push(new PlayerClass(element))
    });
    return aux
}

const PlayerClassArray = transformArray(classesTypes)

// const PlayerClassArray = classesArray

export default PlayerClassArray