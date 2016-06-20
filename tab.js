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
} from 'react-native';


class Tab extends Component {
  render() {
    return (
      <View style={[styles.sub_tab_flex, styles.sub_tab_topLine]}>
        <View style={styles.sub_tab_icon}>
          <Image source={require('./imgs/tab_item_01.png')} style={styles.sub_tab_image}/>
          <Text style={[{color: '#3D98FF'}, styles.sub_tab_font]}>首页</Text>
        </View>

        <View style={styles.sub_tab_icon}>
          <Image source={require('./imgs/tab_item_02.png')} style={styles.sub_tab_image}/>
          <Text style={styles.sub_tab_font}>行程</Text>
        </View>

        <View style={styles.sub_tab_icon}>
          <Image source={require('./imgs/tab_item_03.png')} style={styles.sub_tab_image}/>
          <Text style={styles.sub_tab_font}>客服</Text>
        </View>

        <View style={styles.sub_tab_icon}>
          <Image source={require('./imgs/tab_item_04.png')} style={styles.sub_tab_image}/>
          <Text style={styles.sub_tab_font}>我的</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sub_tab_flex: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  sub_tab_icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub_tab_image: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub_tab_topLine: {
    borderTopWidth: 1/PixelRatio.get(),
    borderColor: '#000000',
  },
  sub_tab_font: {
    fontSize: 12,
  }
});

module.exports= Tab;
