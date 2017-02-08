// @flow

import React, { PropTypes }  from 'react'
import ReactDOM from 'react-dom';
import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  TextInput,
  AppRegistry,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { Colors, Fonts, Images, Metrics } from '../Themes'
import Picker from 'react-native-picker'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Container, Content, List, ListItem, Button, Icon,  InputGroup, Input } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import R from 'ramda'
import RoundedButton from '../Components/RoundedButton'
import area from './area.json';
import _ from 'lodash'

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
      categories: [],
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

     _createAreaData() {
    let data = [];
    let len = area.length;
    for(let i=0;i<len;i++){
      let city = [];
      for(let j=0,cityLen=area[i]['county'].length;j<cityLen;j++){
        let _city = {};
        _city[area[i]['county'][j]['name']] = area[i]['county'][j]['ccity'];
        city.push(_city);
      }

      let _data = {};
      _data[area[i]['name']] = city;
      data.push(_data);
    }
    return data;
  }

  _showAreaPicker() {
    Picker.init({
      pickerData: this._createAreaData(),
      selectedValue: ['CA', 'SAN FRANCISCO', 'SAN FRANCISCO'],
      pickerTitleText: 'Select A Market',
      pickerFontSize: 20,
      pickerConfirmBtnText:'Cancel',
      pickerCancelBtnText:'Select',
      onPickerConfirm: pickedValue => {
        console.log('ccity', pickedValue);
      },
      onPickerCancel: pickedValue => {
        console.log('ccity', pickedValue);
      },
      onPickerSelect: pickedValue => {
        console.log('ccity', pickedValue);
      }
    });
    Picker.show();
  }


  componentWillMount() {

    this.state.testJSON = require('../Fixtures/LAS.001.json')

    var rawArr =  this.state.testJSON;
    var test = _.orderBy(rawArr, ['CAT', 'KEY'], ['asc', 'asc']);

    console.log('ORDERBY JSON: '+  JSON.stringify(test));

    var categoriesArr = [...new Set(rawArr.map(item => item.CAT))];
    categoriesArr.sort();
    this.setState({categories: categoriesArr }) ;

    var keywordArr = [...new Set(rawArr.map(item => item.KEY))];
    keywordArr.sort();
    this.setState({keywords: keywordArr }) ;

    var dataObjects = [];

    for(var j = 0; j < this.state.categories.length; j++){
      var trr = [];
      trr = _.filter(rawArr, { 'CAT': this.state.categories[j]  });
      var catName = this.state.categories[j];
      var ggr = {  catName : trr};
      dataObjects.push(grr);
    }
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

      this.setState({resultsDomains : searchResult});
//      this.state.resultsDomains = JSON.stringify(this.state.domainMatches);
//       console.log('FOUND: '+  JSON.stringify(searchResult));
    }
  }

  returnResults(){
    var retObj = [];
      for(var p = 0; p < this.state.domainMatches.length; p++){
        var thisObj = this.state.domainMatches[p];
        retObj.push(<View style={{ flex:1, backgroundColor:'#FFFFFF' }} key={p}>
              <Text style={{ flex:1, color:'#000000'}} >
                {p}] {thisObj}
              </Text>
            </View>);
      }
        this.setState({resultsDomains : retObj});
  }



  render () {
    return (


      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section} key='colors-header'>
            <Text style={styles.sectionText} key='colors'>Data Test</Text>

            <TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._showAreaPicker.bind(this)}>
              <Text style={{color: '#ABABAB'}}>AreaPicker</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>JSON</Text>
          </View>
          <View style={{ flex:1, flexDirection:'row', alignItems:'flex-start', backgroundColor:'#000000'}}>
            <ScrollView style={{ flex:1, flexDirection:'column', width:400, height:700}}
              horizontal={false}  showsHorizontalScrollIndicator={ false } >
              <View
                    style={{  height:30,  width:400,
                      backgroundColor: "rgba(0,0,0,1)",
                    }}>
                     <Text
                        style={{ height:30,  width:400,
                          color: "rgba(255,255,255,1)",
                          fontSize: 24,
                               }}>KEYWORDS
                </Text></View>
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
            </ScrollView>

            <ScrollView style={{ flex:1, flexDirection:'column', width:400, height:700}}
              horizontal={false}  showsHorizontalScrollIndicator={ false } >
              <View
                    style={{  height:30,  width:600,
                      backgroundColor: "rgba(0,0,0,1)",
                    }}>
                     <Text
                        style={{ height:30,  width:600,
                          color: "rgba(255,255,255,1)",
                          fontSize: 24,
                               }}>DOMAINS FOR KEYWORDS
                </Text></View>
              {
                this.state.resultsDomains.map((item, index) => {
                  var itemString = JSON.stringify(item);
                return (
                  <View key={index}
                    style={{  height:30,  width:600,
                      backgroundColor: "rgba(0,0,0,1)",
                    }}>
                     <Text
                        style={{ height:30,  width:600,
                          color: "rgba(255,255,255,1)",
                          fontSize: 14,
                               }}>#{index}  <Text style={{fontWeight: 'bold', color: "rgba(0,0,255,1)" }}>
                       @{item.DOM}</Text>  { item.CAT  }:{item.KEY}  <Text style={{fontWeight: 'bold'}}>[{item.SCORE}]</Text> </Text>
                  </View>
                  )
                }
                )
              }
            </ScrollView>

          </View>

        </ScrollView>
      </View>
    )
  }
}
