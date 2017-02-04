// @flow

import React from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { Colors, Fonts, Images } from '../Themes'
import R from 'ramda'



// Styles
import styles from './Styles/ThemeScreenStyle'

// Colors
const colors = R.keys(Colors)
// Font Types
const types = R.keys(Fonts.type)
// Font Styles
const fontStyles = R.keys(Fonts.style)

export default class ThemeScreen extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      keywords: [],
    }
  }

  renderColor (color: string) {
    return (
      <View style={styles.colorContainer} key={`${color}Container`}>
        <View style={styles.backgroundContainer} key={`${color}BackgroundContainer`}>
          <Image style={styles.backerImage} source={Images.tileBg} key={`${color}BackgroundImage`} />
          <View style={[styles.colorSquare, {backgroundColor: Colors[color]}]} key={`${color}Square`} />
        </View>
        <Text style={styles.colorName} key={`${color}Text`}>{color}</Text>
      </View>
    )
  }

  renderColors () {
    return colors.map((color) => this.renderColor(color))
  }

  renderFont (font: string) {
    return (
      <Text style={[styles.fontRow, {fontFamily: Fonts.type[font]}]} key={font}>{
        `${font}: ${Fonts.type[font]}`
      }</Text>
    )
  }

  renderFonts () {
    return types.map((font) => this.renderFont(font))
  }

  renderStyle (fontStyle: string) {
    return (<Text style={[styles.fontRow, {...Fonts.style[fontStyle]}]} key={fontStyle}>{`This is ${fontStyle} style`}</Text>)
  }

  renderStyles () {
    return fontStyles.map((fontStyle) => this.renderStyle(fontStyle))
  }

  parseJSON(){
    var testJSON = require('../Fixtures/basic.001.json')

    var array =  testJSON;
    var unique = [...new Set(array.map(item => item.KEY))];
    this.state.keywords = unique;
    return unique;
  }


  componentWillMount() {

    var testJSON = require('../Fixtures/basic.001.json')

    var array =  testJSON;
    var unique = [...new Set(array.map(item => item.KEY))];
    this.state.keywords = unique;

    console.log('UNIQUES: '+JSON.stringify(unique));

  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section} key='colors-header'>
            <Text style={styles.sectionText} key='colors'>Data Test</Text>
          </View>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>JSON</Text>
          </View>
          <View style={{ flex:1, flexDirection:'column', width:225}}>

            {
              this.state.keywords.map((item, index) => {
              return (
                <View style={{ width:225, height:26,margin:2 }} key={index}>
                <Text style={styles.sectionText} >
                  {index}] {item}
                </Text>
                </View>
              )
              })
            }
          </View>



        </ScrollView>
      </View>
    )
  }
}
