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
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager'
import Svg,{ Circle, Ellipse, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Use, Defs, Stop
} from 'react-native-svg'

// Styles
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
      productDomains : 5
    };

    this._updateText = this._updateText.bind(this);
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





  render () {



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

    var boxes1 = [];
    var boxes2 = [];
    let rr = 0;


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

      boxes1.push(
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
                        alignItems: 'flex-start',
                        }} >
            <Text style={{color:'#FFFFFF'}}> DOMAIN # { cll } </Text>
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

      boxes2.push(
        <View style={{ margin:2 }}  key={cll } >
          <Grid >
            { boxr2 }
          </Grid>
        </View>
      );
    }


    rr = 99;




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

            {/*<TextInput  borderType='rounded' placeholder="CATEGORY"   style={{ flex:2,padding: 4, height:30,backgroundColor:'#FFFFFF', color:'#000000', marginRight:5  }}  />*/}
            {/*<TextInput borderType='rounded' placeholder="MARKET"   style={{ flex:2,padding: 4, height:30,backgroundColor:'#FFFFFF', color:'#000000', marginRight:5   }}  />*/}

          </View>


          <View  style={{ flex:1, marginTop:20 }}  >
            <Text style={{flex:1, flexDirection: 'row', textAlign: 'center' ,
             color:'#ABABAB', margin:10, fontSize: 34 }}  >
                Top 10 Searches for {this.state.selectedCategory} in {this.state.selectedDomain}
            </Text>
          </View>



          <View  style={{ flex:1, marginTop:20 }}  >
            {boxes1}
          </View>


          <View style={{margin:15, flex:0, width:400, height:400, overflow:'hidden'}}>
            <IndicatorViewPager
              style={{flex:1}}
              indicator={this._renderDotIndicator()} >
              {
                boxes2.map((item, index) => {
                  return (
                    <View style={{ }} key={index}>
                      <TouchableOpacity  >
                        {item}
                      </TouchableOpacity>
                    </View>
                  )
                })
              }
            </IndicatorViewPager>
          </View>

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
