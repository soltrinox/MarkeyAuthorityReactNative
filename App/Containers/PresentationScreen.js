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
    ];

    var boxes1 = [];
    var dimensionsString = '  ';

    // dimensionsString.concat("Device Model" + DeviceInfo.getModel());
    // dimensionsString.concat("App is running in emulator" + DeviceInfo.isEmulator());
    // dimensionsString.concat("App is running on a tablet" + DeviceInfo.isTablet());
if(DeviceInfo.isEmulator()){
  console.log("Device Model inEmulator"  );
  var mod1 = DeviceInfo.getModel();
  console.log("Device Model", JSON.stringify(mod1));
  console.log("Test Model", DeviceInfo.getModel());
  console.log("Device ID", DeviceInfo.getDeviceId());
  console.log("System Name", DeviceInfo.getSystemName());
}

if(DeviceInfo.isTablet()){
  console.log("Device Model isTablet" );
  var mod1 = DeviceInfo.getModel();
  console.log("Device Model", JSON.stringify(mod1));
  console.log("Test Model", DeviceInfo.getModel());
  console.log("Device ID", DeviceInfo.getDeviceId());
  console.log("System Name", DeviceInfo.getSystemName());
}



    // dimensionsString.concat("App is running in emulator" + DeviceInfo.isEmulator());
    // dimensionsString.concat("App is running on a tablet" + DeviceInfo.isTablet());

    var ct = 0;

    for(let i = 0; i < keywords.length ; i++){

      ct = Math.floor(Math.random() * 10);
      ct = ct + 2;
      var boxr1 = [];
      var valCol = parseInt(keywords[i][2]);
      var iii = parseInt(valCol);


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

                <Text style={styles.sectionText}>{valKeyName} {i}</Text>

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
      )
    }

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
              <Input  borderType='rounded' placeholder="DOMAIN" style={{ color:'#FFFFFF',}}   />
            </InputGroup>

            <InputGroup borderType='rounded'  style={{ flex:2,  marginRight:5, marginLeft:5 }}  >
              <Icon name='ios-star' style={{color:'#696969'}}/>
              <Input  borderType='rounded' placeholder="CATEGORY" style={{ color:'#FFFFFF',}}   />
            </InputGroup>

            <InputGroup borderType='rounded'  style={{ flex:2,  marginRight:5, marginLeft:5 }}  >
              <Icon name='ios-map' style={{color:'#696969'}}/>
              <Input  borderType='rounded' placeholder="MARKET" style={{ color:'#FFFFFF',}}   />
            </InputGroup>

            {/*<TextInput  borderType='rounded' placeholder="CATEGORY"   style={{ flex:2,padding: 4, height:30,backgroundColor:'#FFFFFF', color:'#000000', marginRight:5  }}  />*/}
            {/*<TextInput borderType='rounded' placeholder="MARKET"   style={{ flex:2,padding: 4, height:30,backgroundColor:'#FFFFFF', color:'#000000', marginRight:5   }}  />*/}

          </View>
          <View  style={{ flex:1, marginTop:20 }}  >
            {boxes1}
          </View>


          <View style={styles.section} >

            <Text style={{ color:'#FFFFFF'}} >
              {dimensionsString}
            </Text>
          </View>

          <RoundedButton onPress={NavigationActions.componentExamples}>
            Component Examples Screen
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.usageExamples}>
            Usage Examples Screen
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.apiTesting}>
            API Testing Screen
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.theme}>
            Theme Screen
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.deviceInfo}>
            Device Info Screen
          </RoundedButton>

          {/*<View style={styles.centered}>*/}
            {/*<Text style={styles.subtitle}>Made with ❤️ by Infinite Red</Text>*/}
          {/*</View>*/}

        </ScrollView>
      </View>
    )
  }
}
