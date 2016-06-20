/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  PixelRatio,
  Image,
  View,
  TextInput,
} from 'react-native';


class Search extends Component {
  render() {
    return (
      <View style={styles.sub_searchView}>
        <View style={styles.searchBarView}>
          <Image source={require('./imgs/search_icon.png')}
                 style={{height:18,width:18,alignSelf:'center',marginLeft:5} } />
          <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="搜索:目的地/景点/酒店/关键字/航班号"
              style={styles.searchBarInput}
              />
          <Image source={require('./imgs/voice_icon.png')}
                 style={{height:18,width:18,alignSelf:'center',marginLeft:0} } />
        </View>
        <View style={styles.messageView}>
          <Image source={require('./imgs/message_icon.png')}
                 style={{height:22,width:22} } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sub_searchView: {
    marginTop:0,
    height: 45,
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
  },
  searchBarView:{
    height: 30,
    width: 292,
    marginLeft: 10,
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'lightgray',
    marginTop: 8,
    borderRadius: 3,
    backgroundColor:'white',
  },
  searchBarInput: {
    fontSize: 14,
    flex: 1,
    height: 40,
    alignSelf: 'center',
  },
  messageView:{
    borderRadius:3,
    borderColor:'lightgray',
    borderWidth:1,
    width: 40,
    height: 30,
    marginLeft: 10,
    marginTop: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports= Search;
