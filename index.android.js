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
  ScrollView,
  Image,
  View,
} from 'react-native';

import Swiper from 'react-native-swiper';

const Tab = require('./tab');
const Search = require('./search');

var slideImages = [
  'http://dimg04.c-ctrip.com/images/700w050000000nl3i6B3A_1536_307_25.jpg',
  'http://dimg04.c-ctrip.com/images/700n050000000gnq8AC8A_1536_307_25.jpg',
  'http://dimg04.c-ctrip.com/images/700h050000000manfE3F9_1536_307_25.jpg',
  'http://dimg04.c-ctrip.com/images/700l050000000l1596C95_1536_307_25.jpg',
  'http://dimg04.c-ctrip.com/images/700m050000000dso94059_1536_307_25.jpg'
];

var Icons = [
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png'
];

var subject_supImages = [
  'http://dimg04.c-ctrip.com/images/vacations/images2/1/600/600_133_b03586_C_360_202.jpg',
  'http://pic.c-ctrip.com/platform/h5/home/pic-tmh-02.png',
  'http://pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png',
  'http://pic.c-ctrip.com/platform/h5/home/pic-tmh-04.png'
];

var subject_hotImages = [
  'http://images3.c-ctrip.com/rk/apph5/B1/201606/app_home_ad02_621_621.jpg',
  'http://pages.c-ctrip.com/gs_market/AD03-shimeilin-621x310.png',
  'http://images3.c-ctrip.com/rk/apph5/b1/201606/app_home_ad03_rln621310.png',
  'http://images3.c-ctrip.com/rk/201605/hb621x310.png',
  'http://images3.c-ctrip.com/rk/201606/oppo_ad03_621310.png'
];


class MyProject extends Component {
  render() {
    return (
      <View style={styles.sub_flex}>
        <Search></Search>
        <ScrollView style={styles.scrollView}
                    onScroll={()=>{
            console.log('onScroll!');
          }}>
          <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={80}
                  activeDot = {<View style={{backgroundColor:'#1EA0DB', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                  scrollsToTop={true}
              >
            <Image style={[styles.slideView,]} source={{uri:slideImages[0]}}/>
            <Image style={[styles.slideView,]} source={{uri:slideImages[1]}}/>
            <Image style={[styles.slideView,]} source={{uri:slideImages[2]}}/>
            <Image style={[styles.slideView,]} source={{uri:slideImages[3]}}/>
            <Image style={[styles.slideView,]} source={{uri:slideImages[4]}}/>
          </Swiper>

          <View style={[styles.sbu_view, styles.sub_red]}>

            <View style={[styles.item, styles.sub_icon_flex]}>

              <View style={[styles.sub_icon_flex]}>
                <Text style={styles.font}>酒店</Text>
              </View>

              <View style={[styles.sub_flex,styles.sub_icon_flex]}>
                <Image source={{uri:Icons[0]}} style={styles.sub_icon_img}></Image>
              </View>

            </View>

            <View style={[styles.item, styles.lineLeftRight]}>

              <View style={[styles.sub_flex, styles.sub_icon_flex, styles.lineCenter]}>
                <Text style={styles.font}>海外酒店</Text>
              </View>

              <View style={[styles.sub_flex, styles.sub_icon_flex]}>
                <Text style={styles.font}>特惠酒店</Text>
              </View>

            </View>

            <View style={styles.item}>

              <View style={[styles.sub_flex, styles.sub_icon_flex, styles.lineCenter]}>
                <Text style={styles.font}>团购</Text>
              </View>

              <View style={[styles.sub_flex, styles.sub_icon_flex]}>
                <Text style={styles.font}>民宿·客栈</Text>
              </View>

            </View>
          </View>

          <View style={[styles.sbu_view, styles.sub_blue]}>

            <View style={[styles.item, styles.sub_icon_flex]}>

              <View style={[styles.sub_icon_flex]}>
                <Text style={styles.font}>机票</Text>
              </View>

              <View style={[styles.sub_flex,styles.sub_icon_flex]}>
                <Image source={{uri:Icons[1]}} style={styles.sub_icon_img}></Image>
              </View>

            </View>

            <View style={[styles.item, styles.lineLeftRight]}>

              <View style={[styles.sub_flex, styles.sub_icon_flex, styles.lineCenter]}>
                <Text style={styles.font}>火车票</Text>
              </View>

              <View style={[styles.sub_flex, styles.sub_icon_flex]}>
                <Text style={styles.font}>国际机票</Text>
              </View>

            </View>

            <View style={styles.item}>

              <View style={[styles.sub_flex, styles.sub_icon_flex, styles.lineCenter]}>
                <Text style={styles.font}>汽车票·船票</Text>
              </View>

              <View style={[styles.sub_flex, styles.sub_icon_flex]}>
                <Text style={styles.font}>专车·租车</Text>
              </View>

            </View>
          </View>

          <View style={[styles.sbu_view, styles.sub_green]}>

            <View style={[styles.item, styles.sub_icon_flex]}>

              <View style={[styles.sub_icon_flex]}>
                <Text style={styles.font}>旅游</Text>
              </View>

              <View style={[styles.sub_flex,styles.sub_icon_flex]}>
                <Image source={{uri:Icons[2]}} style={styles.sub_icon_img}></Image>
              </View>

            </View>

            <View style={[styles.item, styles.lineLeftRight]}>

              <View style={[styles.sub_flex, styles.sub_icon_flex, styles.lineCenter]}>
                <Text style={styles.font}>目的地攻略</Text>
              </View>

              <View style={[styles.sub_flex, styles.sub_icon_flex]}>
                <Text style={styles.font}>周边游</Text>
              </View>

            </View>

            <View style={styles.item}>

              <View style={[styles.sub_flex, styles.sub_icon_flex, styles.lineCenter]}>
                <Text style={styles.font}>邮轮</Text>
              </View>

              <View style={[styles.sub_flex, styles.sub_icon_flex]}>
                <Text style={styles.font}>定制·包团</Text>
              </View>

            </View>
          </View>

          <View style={[styles.sbu_view, styles.sub_yellow]}>

            <View style={[styles.item]}>

              <View style={[styles.sub_flex, styles.sub_icon_flex, styles.lineCenter]}>
                <Text style={styles.font}>景点·玩乐</Text>
              </View>

              <View style={[styles.sub_flex,styles.sub_icon_flex]}>
                <Text style={styles.font}>礼品卡</Text>
              </View>

            </View>

            <View style={[styles.item, styles.lineLeftRight]}>

              <View style={[styles.sub_flex, styles.sub_icon_flex, styles.lineCenter]}>
                <Text style={styles.font}>美食</Text>
              </View>

              <View style={[styles.sub_flex, styles.sub_icon_flex]}>
                <Text style={styles.font}>出境WiFi</Text>
              </View>

            </View>

            <View style={styles.item}>

              <View style={[styles.sub_flex, styles.sub_icon_flex, styles.lineCenter]}>
                <Text style={styles.font}>全球购·换汇</Text>
              </View>

              <View style={[styles.sub_flex, styles.sub_icon_flex]}>
                <Text style={styles.font}>保险·签证</Text>
              </View>

            </View>
          </View>

          <View style={[styles.sub_girdView, styles.sub_white]}>

            <View style={[styles.sub_flex, styles.sub_gird_borderRight]}>
              <View style={[styles.sub_icon_flex, styles.sub_gird_borderBottom]}>
                <Image source={require('./imgs/grid_01.png')} style={styles.sub_gird_img}></Image>
                <Text>自由行</Text>
              </View>

              <View style={[styles.sub_icon_flex]}>
                <Image source={require('./imgs/grid_02.png')} style={styles.sub_gird_img}></Image>
                <Text>酒店+景点</Text>
              </View>
            </View>

            <View style={[styles.sub_flex, styles.sub_gird_borderRight]}>
              <View style={[styles.sub_icon_flex, styles.sub_gird_borderBottom]}>
                <Image source={require('./imgs/grid_03.png')} style={styles.sub_gird_img}></Image>
                <Text>主题游</Text>
              </View>

              <View style={[styles.sub_icon_flex]}>
                <Image source={require('./imgs/grid_04.png')} style={styles.sub_gird_img}></Image>
                <Text>亲子·游学</Text>
              </View>
            </View>

            <View style={[styles.sub_flex, styles.sub_gird_borderRight]}>
              <View style={[styles.sub_icon_flex, styles.sub_gird_borderBottom]}>
                <Image source={require('./imgs/grid_05.png')} style={styles.sub_gird_img}></Image>
                <Text>一日游</Text>
              </View>

              <View style={[styles.sub_icon_flex]}>
                <Image source={require('./imgs/grid_06.png')} style={styles.sub_gird_img}></Image>
                <Text>外币兑换</Text>
              </View>
            </View>

            <View style={styles.sub_flex}>
              <View style={[styles.sub_icon_flex, styles.sub_gird_borderBottom]}>
                <Image source={require('./imgs/grid_07.png')} style={styles.sub_gird_img}></Image>
                <Text>顶级游</Text>
              </View>

              <View style={[styles.sub_icon_flex]}>
                <Image source={require('./imgs/grid_08.png')} style={styles.sub_gird_img}></Image>
                <Text>更多</Text>
              </View>
            </View>

          </View>

          <View style={[styles.sub_subject_view, {height: 225}]}>
            <View style={styles.sub_subject_titleView}>
              <Image source={require('./imgs/subject_title_01.png')} style={styles.sub_subject_title_img}/>
              <View style={styles.sub_subject_title_spaceView}></View>
              <View>
                <Text>
                  领红包再下单 >
                </Text>
              </View>
            </View>

            <View style={styles.sub_subject_sup_contentView}>

              <View style={styles.sub_supImgView}>
                <Image source={{uri:subject_supImages[0]}} style={styles.sub_subject_sup_img}/>
                <View style={[styles.color_grey]}>
                  <Text style={styles.sub_sup_fontSize}>
                    美食之旅·呼和浩特+希拉穆仁草原+响沙湾+鄂尔多斯...
                  </Text>

                  <View style={styles.sub_sup_priceView}>
                    <Text style={styles.sub_price_fontSize}>
                      ¥2899起
                    </Text>

                    <View style={styles.sub_sup_priceChildView}>
                      <Text style={styles.sub_sup_fontSize}>
                        省¥1100
                      </Text>
                    </View>
                  </View>
                </View>
              </View>


              <View style={styles.sub_supImgView}>

                <View style={[styles.sub_sup_right_top, styles.color_grey, styles.sub_sup_borderBottom]}>
                  <View style={{flex: 2}}>
                    <Text style={[styles.sub_price_fontSize, {marginTop: 10, marginLeft: 5, fontWeight: 'bold',color: '#FA5267'}]}>
                      千款特价
                    </Text>
                    <Text style={{fontSize: 12, marginLeft: 5}}>
                      走过路过不错过
                    </Text>
                  </View>

                  <View style={[styles.sub_flex]}>
                    <Image source={{uri:subject_supImages[1]}} style={styles.sub_sup_right_img}/>
                  </View>
                </View>

                <View style={[styles.sub_sup_right_bottom, styles.color_grey]}>
                  <View style={[styles.sub_flex, styles.sub_sup_borderRight ,{alignItems: 'center',justifyContent: 'center'}]}>
                    <Text style={[styles.sub_price_fontSize, {marginTop: 10, marginLeft: 5, fontWeight: 'bold',color: '#3D98FF'}]}>
                      海外精选
                    </Text>
                    <Text style={{fontSize: 12, marginLeft: 5}}>
                      百元出境游
                    </Text>
                    <Image source={{uri:subject_supImages[2]}} style={styles.sub_sup_rightBottom_img}/>
                  </View>

                  <View style={[styles.sub_flex, {alignItems: 'center',justifyContent: 'center'}]}>
                    <Text style={[styles.sub_price_fontSize, {marginTop: 10, marginLeft: 5, fontWeight: 'bold',color: '#4FC72F'}]}>
                      周边玩乐
                    </Text>
                    <Text style={{fontSize: 12, marginLeft: 5}}>
                      十元度周末
                    </Text>
                    <Image source={{uri:subject_supImages[3]}} style={styles.sub_sup_rightBottom_img}/>
                  </View>
                </View>

              </View>

            </View>
          </View>

          <View style={[styles.sub_subject_view, {height: 320}]}>
            <View style={styles.sub_subject_titleView}>
              <View style={styles.sub_subject_titleChild}>
                <Text style={styles.sub_font}>
                  热门活动
                </Text>
              </View>
              <View style={styles.sub_subject_title_spaceView}></View>
              <View>
                <Text>
                  获取更多福利 >
                </Text>
              </View>
            </View>

            <View style={styles.sub_subject_hot_contentView}>
              <View style={[styles.sub_flex,styles.sub_gird_borderRight,{flexDirection:'column'}]}>
                <View style={[styles.sub_gird_borderBottom,{flex:2}]}>
                  <Image source={{uri:subject_hotImages[0]}} style={styles.sub_subject_hot_img}/>
                </View>
                <View style={[{flex:1}]}>
                  <Image source={{uri:subject_hotImages[1]}} style={styles.sub_subject_hot_img}/>
                </View>
              </View>

              <View style={[styles.sub_flex,{flexDirection:'column'}]}>
                <View style={[styles.sub_flex,styles.sub_gird_borderBottom]}>
                  <Image source={{uri:subject_hotImages[2]}} style={styles.sub_subject_hot_img}/>
                </View>
                <View style={[styles.sub_flex,styles.sub_gird_borderBottom]}>
                  <Image source={{uri:subject_hotImages[3]}} style={styles.sub_subject_hot_img}/>
                </View>
                <View style={[styles.sub_flex]}>
                  <Image source={{uri:subject_hotImages[4]}} style={styles.sub_subject_hot_img}/>
                </View>
              </View>
            </View>

          </View>

        </ScrollView>

        <Tab></Tab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sbu_view: {
    marginTop: 3,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 0,
    height: 100,
    flexDirection:'row',
    borderRadius:5,
    padding:2,
  },
  slideView: {
    marginTop:0,
    height: 80,
    resizeMode: Image.resizeMode.contain,
  },
  wrapper:{
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginTop: 0,
    height: 660,
  },
  item: {
    flex: 1,
    height: 90,
  },
  sub_icon_flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub_flex: {
    flex: 1,
  },
  sub_icon_img:{
    height: 50,
    width: 50,
    resizeMode:Image.resizeMode.contain,
  },
  font: {
    color: '#FFFAFA',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sub_red: {
    backgroundColor: '#FA5267',
    borderColor: '#FA5267'
  },
  sub_blue: {
    backgroundColor: '#3D98FF',
    borderColor: '#3D98FF'
  },
  sub_green: {
    backgroundColor: '#4FC72F',
    borderColor: '#4FC72F'
  },
  sub_yellow: {
    backgroundColor: '#FC9720',
    borderColor: '#FC9720'
  },
  sub_white: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF'
  },
  lineLeftRight: {
    borderLeftWidth: 1/PixelRatio.get(),
    borderRightWidth: 1/PixelRatio.get(),
    borderColor: '#FFFAFA',
  },
  lineCenter: {
    borderBottomWidth: 1/PixelRatio.get(),
    borderColor: '#FFFAFA',
  },
  sub_girdView: {
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10,
    height: 140,
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius:5,
  },
  sub_gird_borderRight: {
    borderRightWidth: 0.5,
    borderRightColor: '#F2F2F2',
  },
  sub_gird_borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#F2F2F2',
  },
  sub_subject_title_img: {
    width: 82,
    height: 20,
    resizeMode:Image.resizeMode.contain,
    marginLeft:5,
  },
  sub_gird_img: {
    height: 36,
    width: 36,
    resizeMode:Image.resizeMode.contain,
  },
  sub_subject_sup_contentView:{
    flex: 1,
    backgroundColor: 'white',
    height: 180,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sub_price_fontSize: {
    color: '#FF499C',
    fontSize: 16,
  },
  sub_sup_fontSize:{
    fontSize: 14,
  },
  color_grey: {
    backgroundColor: '#F9F9F9',
  },
  sub_sup_priceView: {
    height: 20,
    marginTop: 10,
    marginBottom: 10,
    flexDirection:'row',
  },
  sub_sup_priceChildView: {
    marginTop: 5,
    height: 15,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#FD3A51',
  },
  sub_sup_right_img: {
    marginRight: -15,
    marginTop: 15,
    height: 65,
    width: 55,
    resizeMode:Image.resizeMode.contain,
  },
  sub_sup_rightBottom_img: {
    marginTop: 15,
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:Image.resizeMode.contain,
  },
  sub_supImgView: {
    flex: 1,
    padding:2,
    height: 180,
  },
  sub_supTextView: {
    flex: 1,
    marginTop: 10,
    flexDirection:'column',
  },
  sub_subject_sup_img: {
    flex: 1,
    resizeMode:Image.resizeMode.contain,
  },
  sub_sup_right_top: {
    flex: 2,
    flexDirection:'row',
  },
  sub_sup_right_bottom: {
    flex: 3,
    flexDirection:'row',
  },

  sub_sup_borderRight: {
    borderRightWidth: 2,
    borderRightColor: '#FFFFFF',
  },
  sub_sup_borderBottom: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
  },

  sub_subject_view: {
    marginTop: 0,
    marginBottom: 10,
    borderWidth:0.5,
    borderColor: '#DEDEDE',
    backgroundColor: 'white',
  },
  sub_subject_titleView: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sub_subject_titleChild:{
    width: 82,
    marginRight: 5,
    marginLeft: 5,
  },
  sub_font: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sub_subject_title_spaceView: {
    width:170,
    backgroundColor: 'white',
  },
  sub_subject_hot_img:{
    flex: 1,
    resizeMode:Image.resizeMode.contain,
  },
  sub_subject_hot_contentView:{
    flex: 1,
    backgroundColor: 'white',
    height: 180,
    flexDirection: 'row',
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
