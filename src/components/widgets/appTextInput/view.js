import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from './styles'
import { themeColors } from '../../../commons/'

export default class extends Component{

    static defaultProps = {
        label: '',
        value: '',
        placeHolder: 'pon algo',
        onChangeText: () => {},
        containerStyle: {},
        labelStyle: {},
        inputStyle: {},
    }

    render(){
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                <Text style={[styles.label, this.props.labelStyle]}>
                    {this.props.label}
                </Text>
                <TextInput
                    onChangeText={ v => this.props.onChangeText(v)}
                    value={this.props.value}
                    style={[styles.textInput, this.props.style]}
                    placeholder={this.props.placeHolder}
                    placeholderTextColor={themeColors.primaryLight}
                />
            </View>
        )
    }
}