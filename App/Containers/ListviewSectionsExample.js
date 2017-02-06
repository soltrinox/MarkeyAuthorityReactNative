// @flow

import React from 'react'
import { View, ListView, Text } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

// For empty lists
import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/ListviewExampleStyle'

class ListviewSectionsExample extends React.Component {

  state: {
    dataSource: Object,
      keywords: Array,
      categories: Array,
      domainMatches: Object
  }

  constructor(props, context) {
    super(props, context);

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    var dataObjects = {

    }

    var testJSON = require('../Fixtures/LAS.001.json')

    var rawArr =  testJSON;
    var test = _.orderBy(rawArr, ['CAT', 'KEY'], ['asc', 'asc']);

    // console.log('@@@@@@@@@@@@@@ ORDERBY JSON: '+  JSON.stringify(test));

    var categoriesArr = [...new Set(test.map(item => item.CAT))];
    categoriesArr.sort();
    // console.log('@@@@@@@@@@@@@@ categoriesArr : '+  JSON.stringify(categoriesArr));

    var keywordArr = [...new Set(test.map(item => item.KEY))];
    keywordArr.sort();
    // console.log('@@@@@@@@@@@@@@ keywordArr : '+  JSON.stringify(keywordArr));

    var idataObjects = [];

    for(var j = 0; j < categoriesArr.length; j++){
      var trr = [];
      var catName  = _.toString(categoriesArr[j]);
      trr =  _.filter(test, { "CAT" : catName });

      console.log('%%%%%%%%%%% SORTED KEYWORDS ON '+ catName +': '+  JSON.stringify(trr));

      _.set(dataObjects, catName, trr);
    }

    console.log('88888888 SORTED KEYWORDS ON : '+  JSON.stringify(dataObjects));

    // dataObjects = idataObjects;

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *   The same goes for sectionHeaderHasChanged
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataObjects),
      keywords: keywordArr,
      categories: categoriesArr,
      domainMatches: ds.cloneWithRowsAndSections(dataObjects)
    }
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData, sectionID) {
    // You can condition on sectionID (key as string), for different cells
    // in different sections
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{rowData.KEY}</Text>
        <Text style={{color:'#0000FF', textAlign: 'center',}}>{rowData.DOM}</Text>
      </View>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRowsAndSections` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(newProps.someData)
        })
      }
    }
  *************************************************************/

  componentWillMount() {


  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  renderHeader (data, sectionID) {

        return <Text style={styles.boldLabel}>{sectionID}</Text>

  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this.noRowData()} />
        <ListView
          renderSectionHeader={this.renderHeader}
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListviewSectionsExample)
