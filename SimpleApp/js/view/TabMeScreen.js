import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";


//Tab4:我的
export default class  TabMeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel:'我的',
    tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../images/tab4_sel.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
    tabBarOnPress: (scene,jumpToIndex) => {
                         console.log(scene)
                         jumpToIndex(scene.index)
                },
  }

  render() {
    return (
    <View style={styles.mainContainer}>
      <Text>我的</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'white'
    },
    icon: {
      width: 26,
      height: 26,
    },
})

module.exports = TabMeScreen;

