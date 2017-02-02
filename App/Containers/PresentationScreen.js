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
      selectedDomain : 'targetdomain.com',
      selectedCategory : 'plumbing',
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
      productDomains : 5,
      carouselItems : [],
      boxes1: [],
      boxes2: [],

      car1: {},
      car2: {},
      car3: {}
    };

    this._updateText = this._updateText.bind(this);

    this._updateCarousels = this._updateCarousels.bind(this);

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

  _updateCarouselItems(items) {
    this.setState({ carouselItems: items });
  }

  _updateBoxes1(arrayz){
    this.setState({boxes1 : arrayz});
  }

  _updateBoxes2(arrayz){

    this.setState({boxes2 : arrayz});
    this._updateCarouselItems(arrayz);
  }


  _updateCarousels(carInstance, itemPos){

    ; console.log('@@@@@ '+carInstance + ' ITEM: '+itemPos)

  }


  _renderItem (entry) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={sliderEntryStyles.slideInnerContainer}
      >{entry}</TouchableOpacity>
    );
  }

  // _renderSliderView(){
  get example1 (){
    // return(
    this.state.car1 =
      <Carousel
        items={this.state.carouselItems}
        firstItem={0}
        inactiveSlideScale={0.75}
        inactiveSlideOpacity={0.6}
        renderItem={this._renderItem}
        sliderWidth={250}
        itemWidth={250}
        slideStyle={sliderStyles.slide}
        containerCustomStyle={sliderStyles.slider}
        contentContainerCustomStyle={sliderStyles.sliderContainer}
        showsHorizontalScrollIndicator={false}
        snapOnAndroid={true}
        removeClippedSubviews={false}
        onSnapToItem={(item) => {this._updateCarousels('CAR1',item)}}
      /> ;
      return this.state.car1;
  }

  get example2 (){
    this.state.car2 =
      <Carousel
        items={this.state.carouselItems}
        firstItem={1}
        inactiveSlideScale={0.75}
        inactiveSlideOpacity={0.6}
        renderItem={this._renderItem}
        sliderWidth={250}
        itemWidth={250}
        slideStyle={sliderStyles.slide}
        containerCustomStyle={sliderStyles.slider}
        contentContainerCustomStyle={sliderStyles.sliderContainer}
        showsHorizontalScrollIndicator={false}
        snapOnAndroid={true}
        removeClippedSubviews={false}
        onSnapToItem={(item) => {this._updateCarousels('CAR2',item)}}
      /> ;
    return this.state.car2;
  }


  get example3 (){
    this.state.car3 =
      <Carousel
        items={this.state.carouselItems}
        firstItem={2}
        inactiveSlideScale={0.75}
        inactiveSlideOpacity={0.6}
        renderItem={this._renderItem}
        sliderWidth={250}
        itemWidth={250}
        slideStyle={sliderStyles.slide}
        containerCustomStyle={sliderStyles.slider}
        contentContainerCustomStyle={sliderStyles.sliderContainer}
        showsHorizontalScrollIndicator={false}
        snapOnAndroid={true}
        removeClippedSubviews={false}
        onSnapToItem={(item) => {this._updateCarousels('CAR3',item)}}
      />;
    return this.state.car3;
  }


    componentWillMount() {

      var items = ['San Jose','San Francisco','Santa Cruz','Sacramento','Los Angeles'];

      var keywords = [
        ['plumbing', '0', '1','5', '2'],
        ['water heater', '2', '2','6', '5'],
        ['broken pipes', '0', '5','1', '7'],
        ['plumbing', '1', '10','8', '12'],
        ['water heater', '2', '8','10', '10'],
        ['broken pipes', '1', '1','5', '4'],
        ['plumbing', '0', '3','9', '8'],
        ['water heater', '1', '7','3', '5'],
        ['broken pipes', '0', '1','4', '1'],
        ['plumbing', '0', '6','8', '9'],
        ['water heater', '1', '10','10', '10'],
        ['broken pipes', '0', '9','5', '7'],
      ];

      var firstBoxes = [];
      var secondBoxes = [];
      let rr = 0;

      firstBoxes.push(
        <View style={{ margin:2 }}  key={rr} >
          <Grid key={rr}>
            <Col style={{ backgroundColor: '#00000000', height: 25 }}>
              <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        }} >

                <Text style={styles.sectionText}>KEYWORD</Text>

              </View>
            </Col>

            <Col style={{ backgroundColor: '#00000000', height: 25  }}>
              <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        }} >
                <Text style={styles.sectionText}>{this.state.selectedDomain}</Text>

              </View>
            </Col>

            <Col style={{ backgroundColor: '#00000000', height: 25  }}>
              <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        }} >
                <Text style={styles.sectionText}>DEX ESS</Text>

              </View>
            </Col>

            <Col style={{ backgroundColor: '#00000000', height: 25  }}>
              <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        }} >
                <Text style={styles.sectionText}>DEX PRO</Text>

              </View>
            </Col>

          </Grid>
        </View>
      );

      rr++;

      console.log("Device  inEmulator"  );
      console.log("Device  isTablet" );

      console.log("Test Model", DeviceInfo.getModel());
      console.log("Device ID", DeviceInfo.getDeviceId());
      console.log("System Name", DeviceInfo.getSystemName());


      var ct = 0;

      for(let i = rr; i < keywords.length ; ++i ){

        ct = Math.floor(Math.random() * 10);
        ct = ct + 2;
        var boxr1 = [];

        var boxr3 = [];
        var valCol = parseInt(keywords[i][2]);
        var iii = parseInt(valCol);

        // GENERATE THE SQUARES FOR THE DOMAIN HITS IN TOP 10

        for(var x = 0;x < iii ; x++){
          boxr1.push(
            <Svg height="16" width="17"  key={x} >
              <Rect
                x="0"
                y="0"
                width="15"
                height="15"
                stroke="black"
                strokeWidth="1"
                fill="green"
              />
            </Svg>
          )
        }

        var valKeyName = keywords[i][0];

        firstBoxes.push(
          <View style={{ margin:2 }}  key={i}>
            <Grid key={i}>
              <Col style={{ backgroundColor: '#00000000', height: 25 }}>
                <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        }} >

                  <Text style={styles.sectionText}>{i}] {valKeyName} </Text>

                </View>
              </Col>

              <Col style={{ backgroundColor: '#00000000', height: 25  }}>
                <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        }} >
                  { boxr1 }
                </View>
              </Col>

              <Col style={{ backgroundColor: '#00000000', height: 25  }}>
                <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        }} >
                  { boxr1 }
                </View>
              </Col>

              <Col style={{ backgroundColor: '#00000000', height: 25  }}>
                <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        }} >
                  { boxr1 }
                </View>
              </Col>

            </Grid>
          </View>
        );

      }

      this._updateBoxes1(firstBoxes);



      for(var cll = 1;cll < this.state.productDomains ; cll++) {

        ct = Math.floor(Math.random() * 10);
        ct = ct + 2;

        var boxr2 = [];

        var totalCount = 0;
        var topval = 0;

        boxr2.push(
          <Row style={{ backgroundColor: '#00000000', height: 25 }} key={topval}>
            <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'flex-start',backgroundColor: '#00000000'
                        }} >
              <Text style={{color:'#FFFFFF', backgroundColor: '#00000000'}}> DOMAIN # { cll } </Text>
            </View>
          </Row>
        );


        for(var p = 0;p < keywords.length ; p++){

          var kray = [];

          var fcol = parseInt(keywords[p][cll]);
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
          )
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

        secondBoxes.push(
          <View style={{ width:250, height:400, overflow: 'hidden', borderRadius:0, backgroundColor: '#00000000', padding:0 }}  key={cll } >
            <Grid style={{ flex:1 }} >
              { boxr2 }
            </Grid>
          </View>
        );

      }
      this._updateBoxes2(secondBoxes);
      this._updateCarouselItems(secondBoxes);
    }

    render () {

    return (
      <View style={styles.mainContainer}>
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

            <InputGroup borderType='rounded'  style={{ flex:2,  marginRight:5, marginLeft:5 }}  >
              <Icon name='ios-star' style={{color:'#696969'}}/>
              <Input  borderType='rounded' placeholder="CATEGORY" style={{ color:'#FFFFFF',}}   />
            </InputGroup>

            <InputGroup borderType='rounded'  style={{ flex:1,  marginRight:5, marginLeft:5, width: 50 }}  >
              <Icon name='ios-map' style={{color:'#696969'}}/>
              <Input  borderType='rounded' placeholder="STATE" style={{ color:'#FFFFFF',}}   />
            </InputGroup>

            <InputGroup borderType='rounded'  style={{ flex:2,  marginRight:5, marginLeft:5 }}  >
              <Icon name='ios-map' style={{color:'#696969'}}/>
              <Input  borderType='rounded' placeholder="MARKET" style={{ color:'#FFFFFF',}}   />
            </InputGroup>
          </View>

          <View  style={{ flex:1, marginTop:20 }}  >
            <Text style={{flex:1, flexDirection: 'row', textAlign: 'center' ,
             color:'#ABABAB', margin:10, fontSize: 34 }}  >
                Ranking {this.state.selectedCategory} KW for {this.state.selectedDomain}
            </Text>
          </View>

          <View  style={{ flex:1, marginTop:20 }}  >
            {this.state.boxes1}
          </View>

          <View  style={{ width:750, height:400, overflow:'hidden',flexDirection:'row'   }}  >
            <ScrollView style={{width:250, height:400, overflow:'hidden', backgroundColor: '#00000000',overflow:'hidden'  }}>
              {this.example1}
            </ScrollView>
            <ScrollView style={{width:250, height:400, overflow:'hidden', backgroundColor: '#00000000',overflow:'hidden'  }}>
              {this.example2}
            </ScrollView>
            <ScrollView style={{width:250, height:400, overflow:'hidden', backgroundColor: '#00000000',overflow:'hidden'  }}>
              {this.example3}
            </ScrollView>
          </View>


          {/*<View style={{  width:450, height:400, overflow: 'hidden' }}>*/}
          {/*<View style={{  width:225, height:400, overflow: 'visible'}}>*/}
          {/*<IndicatorViewPager*/}
          {/*style={{ flex:1 }}  >*/}
          {/*{*/}
          {/*this.state.boxes2.map((item, index) => {*/}
          {/*return (*/}
          {/*<View style={{ width:225, overflow:'hidden',padding:2 }} key={index}>*/}
          {/*<TouchableOpacity style={{ width:225  }} key={index}  >*/}
          {/*{item}*/}
          {/*</TouchableOpacity>*/}
          {/*</View>*/}
          {/*)*/}
          {/*})*/}
          {/*}*/}
          {/*</IndicatorViewPager>*/}
          {/*</View>*/}
          {/*</View>*/}

          {/*<View  style={{ flex:1, marginTop:20,  }}  >*/}
              {/*<TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._showAreaPicker.bind(this)}>*/}
                {/*<Text style={{color: '#ABABAB'}}>AreaPicker</Text>*/}
              {/*</TouchableOpacity>*/}
              {/*<TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._toggle.bind(this)}>*/}
                {/*<Text style={{color: '#ABABAB'}}>toggle</Text>*/}
              {/*</TouchableOpacity>*/}
              {/*<TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._isPickerShow.bind(this)}>*/}
                {/*<Text style={{color: '#ABABAB'}}>isPickerShow</Text>*/}
              {/*</TouchableOpacity>*/}
          {/*</View>*/}

        </ScrollView>
      </View>
    )
  }
}
