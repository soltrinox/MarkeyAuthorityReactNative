// @flow

import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/DrawerButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { Colors, Metrics } from '../Themes'

// Example
ExamplesRegistry.add('Drawer Button', () =>
  <DrawerButton
    text='Example left drawer button'
    icon='star'
    onPress={() => window.alert('Your drawers are showing')}
  />
)

type DrawerButtonProps = {
  text: string,
  icon: string,
  onPress: () => void
}

class DrawerButton extends Component {
  props: DrawerButtonProps

  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Icon name={this.props.icon}
              size={Metrics.icons.large}
              color={Colors.snow}
              style={styles.backButton}
        />
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

export default DrawerButton
