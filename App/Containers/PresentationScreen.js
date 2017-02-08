// @flow

import React from 'react'
import ReactDOM from 'react-dom';
import { StyleSheet, ScrollView, Text, Image, View, TextInput, AppRegistry, TouchableOpacity, Dimensions } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Picker from 'react-native-picker'
import { Container, Content, List, ListItem, Button, Icon,  InputGroup, Input } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import DeviceInfo from 'react-native-device-info'
import Carousel from 'react-native-snap-carousel'
import {IndicatorViewPager,  PagerDotIndicator} from 'rn-viewpager'
import Svg,{ G, Rect, Symbol, Use, Defs, Stop} from 'react-native-svg'
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

// Styles

import sliderStyles from './Styles/Slider.style'
import { sliderWidth, itemWidth } from './Styles/SliderEntry.style'
import sliderEntryStyles from './Styles/SliderEntry.style'
import styles from './Styles/PresentationScreenStyle'

// State county city data
import area from './area.json';

export default class PresentationScreen extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedDomain : 'www.default.com',
      selectedCategory : 'keywords',
      selectedState : 'CA',
      selectedCity : 'San Francisco',
      selectedDomainTotal : 2,
      columnTotal2 : 4,
      columnTotal3 : 6,
      columnTotal4 : 0,
      columnTotal5 : 0,
      columnTotal6 : 0,
      domain1: 'test 1',
      domain2: 'test 1',
      domain3: 'test 1',
      productDomains : 4,
      clientColumnItems : [],
      domainItems2 : [],
      domainItems3 : [],
      keywordGridColumns: [],
      domainGridColumns: [],
      carouselPosition2: 0,
      carouselPosition3: 0,
      car1: {},
      car2: {},
      car3: {},
      message: 'Try clicking the top-right menus',
      firstMenuDisabled: false,
      dropdownSelection: '-- Choose --',
      dataObjects:{},
      rawArr:[],
      categoriesArr:[],
      keywordArr:[]
    };

    this._updateText = this._updateText.bind(this);

    this._updateCarousels = this._updateCarousels.bind(this);
    this._productCarouselChange2 = this._productCarouselChange2.bind(this);
    this._productCarouselChange3 = this._productCarouselChange3.bind(this);

    // this.car2.snapToItem = this.car2.snapToItem.bind(this);
    // this.car3.snapToItem = this.car3.snapToItem.bind(this);

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

  _toggle() {
    Picker.toggle();
  }

  _isPickerShow(){
    Picker.isPickerShow(status => {
      alert(status);
    });
  }

  _renderDotIndicator(){
    return <PagerDotIndicator pageCount={this.state.productDomains - 1} />;
  }

  _updateText(ddomain) {
     this.setState({ selectedDomain: ddomain });
  }

  _updateText(ddomain) {
    this.setState({ selectedDomain: ddomain });
  }

  _updateClientColumn(items) {
    this.setState({ clientColumnItems: items });
  }

  _updateKeywords(arrayz){
    this.setState({keywordGridColumns : arrayz});
  }

  _updateDomainColumns(arrayz){
    this.setState({domainGridColumns : arrayz});
  }

  _updateCarousels(carInstance, itemPos){

    console.log('@@@@@ Change ON '+carInstance + ' POS: '+itemPos);
    if(carInstance === 'CAR1') {

    }
  }

  _productCarouselChange2(carInstance, itemPos){

    if(this._myCarousel3.currentIndex === itemPos){
      console.log('@@@@@ NO Change ON '+carInstance + ' POS: '+itemPos + ' @'+ this._myCarousel2.currentIndex);
    }else{
      if(this._myCarousel3.currentIndex === this._myCarousel2.currentIndex ){
        console.log('INDEX MATCH ');
      }else{
        this._myCarousel3.snapToItem(this._myCarousel2.currentIndex);
      }
    }
  }

  _productCarouselChange3(carInstance, itemPos){

    if(this._myCarousel2.currentIndex === itemPos){
      console.log('@@@@@ NO Change ON '+carInstance + ' POS: '+itemPos + ' @'+ this._myCarousel3.currentIndex);
    }else{
      if(this._myCarousel2.currentIndex === this._myCarousel3.currentIndex ){
        console.log('INDEX MATCH ');
      }else{
        this._myCarousel2.snapToItem(this._myCarousel3.currentIndex);
      }
    }
  }

  _renderItem (entry) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={sliderEntryStyles.slideInnerContainer}
      >{entry}</TouchableOpacity>
    );
  }

  setMessage(value) {
    if (typeof value === 'string') {
      this.setState({ message: `You selected "${value}"` });
    } else {
      this.setState({ message: `Woah!\n\nYou selected an object:\n\n${JSON.stringify(value)}` });
    }
    return value !== 'do not close';
  }

  setFirstMenuDisabled(disabled) {
    this.setState({
      message: `First menu is ${disabled ? 'disabled' : 'enabled'}`,
      firstMenuDisabled: disabled
    });
    return false;
  }

  get example1 (){

    this.state.car1 =
      <Carousel
        items={this.state.clientColumnItems}
        firstItem={0}
        inactiveSlideScale={0.75}
        inactiveSlideOpacity={0.6}
        renderItem={this._renderItem}
        sliderWidth={350}
        itemWidth={350}
        slideStyle={sliderStyles.slide}
        containerCustomStyle={sliderStyles.slider}
        contentContainerCustomStyle={sliderStyles.sliderContainer}
        showsHorizontalScrollIndicator={false}
        snapOnAndroid={true}
        removeClippedSubviews={false}
        onSnapToItem={(item) => {this._updateCarousels('CAR1',item)}}
        ref={(myCarousel1) => { this._myCarousel1 = myCarousel1; }}
      /> ;
      return this.state.car1;
  }

  get example2 (){


    var carItems = [];
    carItems = this.state.domainGridColumns;
    // .slice(0,-1);
    this.state.domainItems2 = carItems;
    this.state.car2 =
      <Carousel
        items={this.state.domainItems2}
        firstItem={0}
        inactiveSlideScale={0.75}
        inactiveSlideOpacity={0.6}
        renderItem={this._renderItem}
        sliderWidth={350}
        itemWidth={350}
        slideStyle={sliderStyles.slide}
        containerCustomStyle={sliderStyles.slider}
        contentContainerCustomStyle={sliderStyles.sliderContainer}
        showsHorizontalScrollIndicator={false}
        snapOnAndroid={true}
        removeClippedSubviews={false}

        ref={(myCarousel2) => { this._myCarousel2 = myCarousel2; }}
      /> ;
    // onSnapToItem={(item) => {this._productCarouselChange2('CAR2',item)}}
    return this.state.car2;
  }

  _domainData(){
    var testJSON = require('../Fixtures/LAS.001.json')
    this.state.dataObjects = {
      CATEGORY1: [
        {KEY: 'First Title', DOM: 'DEX PLUS'},
        {KEY: 'First Title', DOM: 'DEX PREM'},
        {KEY: 'First Title', DOM: 'www.xxxxx.com'},
        {KEY: 'First Title', DOM: 'www.yyyy.com'},
        {KEY: 'First Title', DOM: 'First Description'},
        {KEY: 'Second Title', DOM: 'Second Description'},
        {KEY: 'Third Title', DOM: 'Third Description'},
        {KEY: 'Fourth Title', DOM: 'Fourth Description'},
        {KEY: 'Fifth Title', DOM: 'Fifth Description'},
        {KEY: 'Sixth Title', DOM: 'Sixth Description'},
        {KEY: 'Seventh Title', DOM: 'Seventh Description'},
        {KEY: 'Eighth Title', DOM: 'Eighth Description'},
        {KEY: 'Ninth Title', DOM: 'Ninth Description'},
        {KEY: 'Tenth Title', DOM: 'Tenth Description'}
      ],
      CATEGORY2: [
        {KEY: 'Eleventh Title', DOM: 'Eleventh Description'},
        {KEY: '12th Title', DOM: '12th Description'},
        {KEY: '13th Title', DOM: '13th Description'},
        {KEY: '14th Title', DOM: '14th Description'},
        {KEY: '15th Title', DOM: '15th Description'},
        {KEY: '16th Title', DOM: '16th Description'},
        {KEY: '17th Title', DOM: '17th Description'},
        {KEY: '18th Title', DOM: '18th Description'},
        {KEY: '19th Title', DOM: '19th Description'},
        {KEY: '20th Title', DOM: '20th Description'},
        {KEY: 'BLACKJACK!', DOM: 'BLACKJACK! Description'}
      ]
    }

    this.state.rawArr =  testJSON;
    var test = _.orderBy(this.state.rawArr, ['CAT', 'KEY', 'SCORE'], ['asc', 'asc','desc']);
    // console.log('@@@@@@@@@@@@@@ ORDERBY JSON: '+  JSON.stringify(test));

    this.state.categoriesArr = [...new Set(test.map(item => item.CAT))];
    this.state.categoriesArr.sort();
    // console.log('@@@@@@@@@@@@@@ categoriesArr : '+  JSON.stringify(categoriesArr));

    this.state.keywordArr = [...new Set(test.map(item => item.KEY))];
    this.state.keywordArr.sort();
    // console.log('@@@@@@@@@@@@@@ keywordArr : '+  JSON.stringify(keywordArr));

    for(var j = 0; j < this.state.categoriesArr.length; j++){
      var trr = [];
      var catName  = _.toString(this.state.categoriesArr[j]);
      trr =  _.filter(test, { "CAT" : catName });
      // console.log('%%%%%%%%%%% SORTED KEYWORDS ON '+ catName +': '+  JSON.stringify(trr));
      _.set(this.state.dataObjects, catName, trr);
    }

    console.log('88888888 SORTED KEYWORDS ON : '+  JSON.stringify(this.state.dataObjects));
    return this.state.dataObjects;
  }


    componentWillMount() {

      console.log("Test Model", DeviceInfo.getModel());
      console.log("Device ID", DeviceInfo.getDeviceId());
      console.log("System Name", DeviceInfo.getSystemName());


      var clientDomains = ['www.default.com','www.generic.com'];
      var keywordsClients = [
        ['keyword1', '0', '1'],
        ['keyword2', '2', '2'],
        ['keyword3', '0', '1'],
        ['keyword4', '1', '2'],
        ['keyword5', '2', '0'],
        ['keyword6', '1', '1'],
        ['keyword7', '0', '3'],
        ['keyword8', '1', '0'],
        ['keyword9', '0', '1'],
        ['keyword10', '0', '2'],
      ];

      var products =  ['DEX BASIC','DEX PLUS','DEX PRO','DEX PREMIUM'];
      var keywordsProducts = [
        ['keyword1', '5', '2','7', '9'],
        ['keyword2', '6', '5','9', '12'],
        ['keyword3', '1', '7','6', '10'],
        ['keyword4', '8', '7','8', '9'],
        ['keyword5', '10', '10','10', '10'],
        ['keyword6', '5', '4','8', '11'],
        ['keyword7', '9', '8','5', '9'],
        ['keyword8', '3', '5','9', '12'],
        ['keyword9', '4', '1','6', '9'],
        ['keyword10', '8', '9','11', '11'],
      ];
      this.state.productDomains = products.length;



      var keywordColumnArray = [];
      var productColumnArray = [];

      let rr = 0;

      keywordColumnArray.push(

            <Row style={{ backgroundColor: '#00000000', height: 25 }} key={rr}>
              <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        }} >
                <Text style={styles.sectionText}>KEYWORD</Text>
              </View>
            </Row>

      );

      for(let i = 0; i < keywordsProducts.length ; ++i ){

        var valKeyName = keywordsProducts[i][0];
        var iKey = i + 1;

        keywordColumnArray.push(
              <Row style={{ backgroundColor: '#00000000', height: 25 }} key={iKey}>
                <View style={{
                        flex: 1,
                        flexDirection: 'row',

                        alignItems: 'flex-start',
                        }} >

                  <Text style={styles.sectionText}>{i} ] {valKeyName} </Text>
                </View>
              </Row>
        );
      }

      this._updateKeywords(keywordColumnArray);

      // CREATE THE GRIDS FOR EACH CAROUSEL COLUMN

      for(var cll = 0;cll < this.state.productDomains ; cll++) {

        var boxr2 = [];

        var totalCount = 0;
        var topval = 0;

        var columnName = products[cll];

        boxr2.push(
          <Row style={{ backgroundColor: '#00000000', height: 25 }} key={topval}>
            <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'flex-start',backgroundColor: '#00000000'
                        }} >
              <Text style={{color:'#FFFFFF', backgroundColor: '#00000000'}}>  {columnName} </Text>
            </View>
          </Row>
        );


        for(var p = 0;p < keywordsProducts.length ; p++){

          var kray = [];
          let frp = cll + 1;
          var fcol = parseInt(keywordsProducts[p][frp]);
          var ggg = parseInt(fcol);

          for(var k = 0; k < ggg; k++){
            kray.push(<Svg height="16" width="17"  key={k} >
              <Rect
                x="0"
                y="0"
                width="15"
                height="15"
                stroke="black"
                strokeWidth="1"
                fill="green"
              />
            </Svg>);
            totalCount++;
          }

          boxr2.push(
            <Row style={{ backgroundColor: '#00000000', height: 25 }} key={p+1}>
              <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        }} >
                { kray }
              </View>
            </Row>
          );
          topval++;
        }
        topval++;

        boxr2.push(
          <Row style={{ backgroundColor: '#00000000', height: 25 }} key={topval}>
            <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        }} >
              <Text style={{color:'#FFFFFF', fontSize: 20, textAlign: 'center'}}> {totalCount} </Text>
            </View>
          </Row>
        );

        productColumnArray.push(
          <View style={{ width:350, height:400, overflow: 'hidden', borderRadius:0, backgroundColor: '#00000000', padding:0 }}  key={cll } >
            <Grid style={{ flex:1 }} >
              { boxr2 }
            </Grid>
          </View>
        );

      }
      this._updateDomainColumns(productColumnArray);

      // NOW REBUILD THE OTHER DOMAINS

      this._domainData();
      this._updateClientColumn(productColumnArray);
    }

    render () {

    return (
      <View style={styles.mainContainer}>
        <MenuContext style={{ flex: 1 }}>
          {/*<Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />*/}
          <ScrollView style={styles.container}>

            <View style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          }} >

              <InputGroup borderType='rounded'  style={{ flex:2,  marginRight:5, marginLeft:5 }}  >
                <Icon name='ios-home' style={{color:'#696969'}}/>
                <Input borderType='rounded'
                       style={{height: 40, color: '#FFFFFF'}}
                  defaultValue={this.state.selectedDomain}
                  placeholder="Type domain"
                  onChangeText={this._updateText}
                />
              </InputGroup>

              {/*<InputGroup borderType='rounded'  style={{ flex:2,  marginRight:5, marginLeft:5 }}  >*/}
                {/*<Icon name='ios-star' style={{color:'#696969'}}/>*/}
                {/*<Input  borderType='rounded' placeholder="CATEGORY" style={{height: 40, color: '#FFFFFF'}}*/}
                        {/*defaultValue={this.state.selectedCategory}  />*/}
              {/*</InputGroup>*/}

              <RoundedButton text='CATEGORY' onPress={NavigationActions.listviewSectionsExample} />

              <View borderType='rounded'  style={{ flex:2, flexDirection:'row',  marginRight:5, marginLeft:5 }}  >
                <Text  borderType='rounded'  style={{ fontSize:30 , fontWeight:'bold',color:'#FF0000',}} >
                    PHOENIX, AZ
                </Text>
              </View>
            </View>

            <View style={styles2.content}>
              <Menu style={styles2.dropdown} onSelect={(value) => this.setState({ dropdownSelection: value })}>
                <MenuTrigger>
                  <Text style={{ color:'#FFFFFF', backgroundColor:'#000000'}}>{this.state.dropdownSelection}</Text>
                </MenuTrigger>
                <MenuOptions optionsContainerStyle={styles2.dropdownOptions} style={{ marginLaeft:300, color:'#FFFFFF', backgroundColor:'#000000'}}
                             renderOptionsContainer={(options) => <ScrollView>
                             <Text style={{ color:'#FFFFFF', backgroundColor:'#000000'}} >
                                 SELECT CATEGORY</Text>
                             {options}</ScrollView>} >
                            {
                              this.state.categoriesArr.map((item, index) => {
                                return ( <MenuOption value={item} key={index} >
                                    <Text style={{ backgroundColor:'#000000', color:'#FFFFFF', }} >{item}</Text>
                                  </MenuOption> )
                              })
                            }
                </MenuOptions>
              </Menu>
            </View>

            <View  style={{ flex:1, marginTop:20 }}  >
              <Text style={{flex:1, flexDirection: 'row', textAlign: 'center' ,
               color:'#ABABAB', margin:10, fontSize: 28 }}  >
                  Ranking {this.state.selectedCategory}  for {this.state.selectedDomain}
              </Text>
            </View>

            <View  style={{ flex:1, flexDirection:'row', alignItems:'flex-start', marginTop:20 }}  >
              <View style={{ width:250, height:400, overflow: 'hidden', borderRadius:0, backgroundColor: '#00000000', padding:0 }}   >
                <Grid style={{ flex:1, flexDirection:'column' }} >
                  {this.state.keywordGridColumns}
                </Grid>
              </View>
              <View  style={{ width:750, height:400, overflow:'hidden',flexDirection:'row'   }}  >
                <ScrollView style={{width:350, height:400, overflow:'hidden', backgroundColor: '#00000000',overflow:'hidden'  }}>
                  {this.example1}
                </ScrollView>
                <ScrollView style={{width:350, height:400, overflow:'hidden', backgroundColor: '#00000000',overflow:'hidden'  }}>
                  {this.example2}
                </ScrollView>
                {/*<ScrollView style={{width:350, height:400, overflow:'hidden', backgroundColor: '#00000000',overflow:'hidden'  }}>*/}
                  {/*{this.example3}*/}
                {/*</ScrollView>*/}
              </View>
            </View>

          </ScrollView>
        </MenuContext>
      </View>
    )
  }
}

const styles2 = StyleSheet.create({

  menuTrigger: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  menuTriggerText: {
    color: 'lightgrey',
    fontWeight: '600',
    fontSize: 20
  },
  disabled: {
    color: '#ccc'
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  content: {
    flex:1,
    flexDirection:'row',
    alignItems: 'flex-end',
    backgroundColor: '#00000000',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  contentText: {
    fontSize: 18
  },
  dropdown: {
    backgroundColor: '#00000000',
    width: 300,
    borderColor: '#999',
    borderWidth: 1,
    padding: 5,
    marginLeft: 300
  },
  dropdownOptions: {
    backgroundColor: '#000000',
    marginTop: 30,
    borderColor: '#ccc',
    borderWidth: 2,
    width: 300,
    height: 200,
    marginLeft: 300
  }
});

