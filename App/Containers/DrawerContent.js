// @flow

import React, { Component } from 'react'
import { ScrollView, View, Image, BackAndroid } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'


class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressComponents = () => {
    this.toggleDrawer()
    NavigationActions.componentExamples()
  }

  handlePressUsage = () => {
    this.toggleDrawer()
    NavigationActions.usageExamples()
  }

  handlePressAPI = () => {
    this.toggleDrawer()
    NavigationActions.apiTesting()
  }

  handlePressTheme = () => {
    this.toggleDrawer()
    NavigationActions.theme()
  }

  handlePressDevice = () => {
    this.toggleDrawer()
    NavigationActions.deviceInfo()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        {/*<Image source={Images.logo} style={styles.logo} />*/}
        <DrawerButton icon='window-maximize' text='Google PageOne' onPress={this.handlePressComponents} />
        <DrawerButton icon='print' text='Print' onPress={this.handlePressUsage} />
        <DrawerButton icon='tachometer' text='Site Gaps' onPress={this.handlePressAPI} />
        <View style={{marginBottom: 90}} ></View>
        <DrawerButton icon='play-circle' text='Send' onPress={this.handlePressTheme} />
        <DrawerButton icon='cog' text='Settings' onPress={this.handlePressDevice} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
