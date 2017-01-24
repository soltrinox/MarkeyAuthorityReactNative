// @flow

import React from 'react'
import ReactDOM from 'react-dom';
import { ScrollView, Text, Image, View, TextInput } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

import { Container, Content, List, ListItem, Button, Icon,  InputGroup, Input } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid'
import DeviceInfo from 'react-native-device-info'

import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

// Styles
import styles from './Styles/PresentationScreenStyle'


export default class PresentationScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       text: 'Useless Placeholder' ,
       selectedDomain : 'targetdomain.com',
       selectedCategory : 'plumbing',
       selectedState : 'CA',
       selectedCity : 'San Francisco',
       selectedDomainTotal : 0,
       columnTotal2 : 0,
       columnTotal3 : 0,
       columnTotal4 : 0,
       columnTotal5 : 0,
       columnTotal6 : 0,
    };
  }


  render () {

    var items = ['San Jose','San Francisco','Santa Cruz','Sacramento','Los Angeles'];

    var keywords = [
      ['plumbing', '0', '3','2', '2'],
      ['water heater', '2', '2','2', '2'],
      ['broken pipes', '0', '6','2', '2'],
      ['plumbing', '1', '3','2', '2'],
      ['water heater', '2', '4','2', '2'],
      ['broken pipes', '1', '6','2', '2'],
      ['plumbing', '0', '6','2', '2'],
      ['water heater', '1', '5','2', '2'],
      ['broken pipes', '0', '6','2', '2'],
      ['plumbing', '0', '6','2', '2'],
      ['water heater', '1', '5','2', '2'],
      ['broken pipes', '0', '6','2', '2'],
    ];

    var boxes1 = [];
    let rr = 0;

    var selectedDomain = 'targetdomain.com';
    var selectedCategory = 'plumbing';
    var selectedState = 'CA';
    var selectedCity = 'San Francisco';


    var selectedDomainTotal = 0;
    var columnTotal2 = 0;
    var columnTotal3 = 0;
    var columnTotal4 = 0;
    var columnTotal5 = 0;
    var columnTotal6 = 0;

    boxes1.push(
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
              <Text style={styles.sectionText}>{selectedDomain}</Text>

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
      var boxr2 = [];
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

      for(var x = 0;x < iii ; x++){
        boxr2.push(
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


    rr = 99;

    boxes1.push(
      <View style={{ margin:2 }}  key={rr} >
        <Grid key={rr}>
          <Col style={{ backgroundColor: '#00000000', height: 40 }}>
            <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        }} >

              <Text  style={{flex: 1, flexDirection: 'row',
              fontSize: 34, color:'#ABABAB', textAlign: 'left', paddingLeft: 15 }}>_____</Text>

            </View>
          </Col>

          <Col style={{ backgroundColor: '#00000000', height: 40  }}>
            <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        }} >
              <Text  style={{flex: 1, flexDirection: 'row',
              fontSize: 34, color:'#ABABAB', textAlign: 'left', paddingLeft: 15 }}>{selectedDomainTotal}</Text>

            </View>
          </Col>

          <Col style={{ backgroundColor: '#00000000', height: 40  }}>
            <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        }} >
              <Text  style={{flex: 1, flexDirection: 'row',
              fontSize: 34, color:'#ABABAB', textAlign: 'left', paddingLeft: 15 }}>{columnTotal2}</Text>

            </View>
          </Col>

          <Col style={{ backgroundColor: '#00000000', height: 40  }}>
            <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        }} >
              <Text   style={{flex: 1, flexDirection: 'row',
              fontSize: 34, color:'#ABABAB', textAlign: 'left', paddingLeft: 15 }}>{columnTotal3}</Text>

            </View>
          </Col>

        </Grid>
      </View>
    );


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
              <Input  borderType='rounded' placeholder="DOMAIN" style={{ color:'#FFFFFF',}}
                      defaultValue={this.state.selectedDomain}   />
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


          {/*<RoundedButton onPress={NavigationActions.componentExamples}>*/}
            {/*Component Examples Screen*/}
          {/*</RoundedButton>*/}

          {/*<RoundedButton onPress={NavigationActions.usageExamples}>*/}
            {/*Usage Examples Screen*/}
          {/*</RoundedButton>*/}

          {/*<RoundedButton onPress={NavigationActions.apiTesting}>*/}
            {/*API Testing Screen*/}
          {/*</RoundedButton>*/}

          {/*<RoundedButton onPress={NavigationActions.theme}>*/}
            {/*Theme Screen*/}
          {/*</RoundedButton>*/}

          {/*<RoundedButton onPress={NavigationActions.deviceInfo}>*/}
            {/*Device Info Screen*/}
          {/*</RoundedButton>*/}


        </ScrollView>
      </View>
    )
  }
}
