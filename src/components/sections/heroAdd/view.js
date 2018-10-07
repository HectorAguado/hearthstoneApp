import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native'
import styles from './styles'
import { AppTextInput } from '../../widgets/'
import ImagePicker from 'react-native-image-picker'
import {themeColors} from '../../../commons/index';

export default class extends Component {
    
    constructor(props){
            super(props)
            this.state = {
                name: '',
                cost: '0',
                armor: '0',
                health: '0',
                flavor: "",
                image: null,
            }

            this.options = {
                title: 'Seleccionar imagen',
                storageOptions: {
                    skipBackup: true,
                    path: 'images'
                }
            }
    }

    _onSubmit(){

    }

    _onImagePickerTapped() {
        ImagePicker.showImagePicker(this.options, (response) => {
            if (response.uri && response.data) {
              let preview = { uri: response.uri };
              let data = 'data:image/jpeg;base64,' + response.data 
              this.setState({
                image: { preview, data }
              });
            }
          });
    }

    _renderTextInput(label, key, placeholder = '') {
        return (
            <AppTextInput 
                label={label}
                value={this.state[key]}
                onChangeText={ v => this.setState({ [key]: v }) }
                placeholder={placeholder}
            />
        )
    }

    _renderImageInput() {
        const imageUri = this.state.image ? this.state.image.preview : null
        const imageLabel = this.state.image ? 'Pulsa para escoger otra imagen' : 'Pulsa para elegir imagen *'
        return (
            <View style={styles.imagePicker}>
                <TouchableOpacity onPress={() => this._onImagePickerTapped()}>
                    <Image source={imageUri} style={styles.image} resizeMode={'cover'} />
                    <Text style={styles.imageText}>{imageLabel}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _renderButton(){
        return(
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={ () => this._onPress() }>
                    <Text style={styles.buttonText}>GUARDAR</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        return(
            <ScrollView style={styles.container} >
                { this._renderTextInput('Nombre del héroe:', 'name', 'Ej. Reshaka' )}
                { this._renderImageInput()}  
                { this._renderTextInput('Coste del héroe:', 'cost', '0' )}
                { this._renderTextInput('Armadura del héroe:', 'armor', '0' )}
                { this._renderTextInput('Puntos de vida del héroe:', 'health', '0' )}
                { this._renderTextInput('Frase del héroe:', 'flavor', 'Ej. Uno para todos y todos para uno' )}
                { this._renderButton() }
                

            </ScrollView>
        )
    }
}