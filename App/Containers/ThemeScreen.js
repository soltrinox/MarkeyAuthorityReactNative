// @flow

import React, { PropTypes }  from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Colors, Fonts, Images, Metrics } from '../Themes'
import R from 'ramda'
import RoundedButton from '../Components/RoundedButton'


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
      testJSON : {},
      domainMatches: [],
      resultsDomains:[]
    }

    this.handlePressKeyword = this.handlePressKeyword.bind(this);
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
    this.state.testJSON = require('../Fixtures/basic.001.json')

    var array =  this.state.testJSON;
    var unique = [...new Set(array.map(item => item.KEY))];
    unique.sort();
    this.state.keywords = unique;
    return unique;
  }

  myFunction(item, index) {
    var sst = index + " : " + item ;
    console.log(index + '] ' +item );
    return sst;
  }


  componentWillMount() {

    this.state.testJSON = require('../Fixtures/LAS.001.json')

    var array =  this.state.testJSON;
    var unique = [...new Set(array.map(item => item.KEY))];
    unique.sort();
    this.state.keywords = unique;

    // this.state.keywords = unique.map(this.myFunction);

  }

  handlePressKeyword(index, item){
    console.log('KEY: ' +item+' = '+ this.state.keywords[index] );
    // ; this.handlePressKeyword(index, item)
    // () => window.alert('KEY: ' +item+' = '+ this.state.keywords[index])

    var searchResult = [];
    searchResult = this.state.testJSON.filter(function( obj ) {
      return obj.KEY == item;
    });

    if(searchResult.length < 1){
      console.log('NONE FOUND: ');
    }else{
      this.state.domainMatches = searchResult;
      this.returnResults();
      console.log('FOUND: '+ JSON.stringify(this.state.domainMatches));
    }
  }

  returnResults(){
    this.state.resultsDomains =
      this.state.domainMatches.map((item, index) => {
        return (

            <View style={{ flex:1, backgroundColor:'#FFFFFF' }} key={index}>
              <Text style={{ flex:1, color:'#000000'}} >
                {index}] {item}
              </Text>
            </View>

        )
      });
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
          <View style={{ flex:1, flexDirection:'row', alignItems:'flex-start'}}>

            <View style={{ flex:1, flexDirection:'column', width:400, overflow:'hidden'}}>

              {
                this.state.keywords.map((item, index) => {
                return (
                  <TouchableOpacity style={{width:400, height:46,margin:2 }} onPress={ () => this.handlePressKeyword(index, item) } key={index} >
                    <View style={{ flex:1 }} key={index}>
                      <Text style={{ flex:1, color:'#FFFFFF'}} >
                        {index}] {item}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )
                })
              }
            </View>

            <View style={{ flex:1, flexDirection:'column', width:600, backgroundColor:'#ABABAB'}} >
              {this.state.resultsDomains}
            </View>

          </View>

        </ScrollView>
      </View>
    )
  }
}
