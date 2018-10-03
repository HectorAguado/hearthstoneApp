export class PlayerClass {  
    constructor(name){
        this.name = name
        this.imgUrl = '../../../resources/logo-' + name + '.png'
    }
}

const classesTypes = ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'];

// function transformArray(array){
//     array.map(v => {
//         v = new PlayerClass(v)
//     })
// }

function transformArray(array){
    const aux = []
    array.forEach(element => {
        aux.push(new PlayerClass(element))
    });
    return aux
}

const PlayerClassArray = transformArray(classesTypes)

export default PlayerClassArray

// componentDidMount(){
//     // classesList? (this.setState({classesList: transformArray(classes)})) : []
//     this.setState({
//         classesList: [PlayerClassArray]
//     })
//     // console.log("CLASESLIST ==> ", classesList? classesList : "No Definido aun")
//     console.log("Component Did Mount => ", PlayerClassArray)
// }