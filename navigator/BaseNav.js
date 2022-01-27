import React, { Component } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class BaseNav extends Component {

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.margin}>首页</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('MyMapView')}
        >
          <Text style={styles.whiteColor}>
            初始化地图
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('TileView')}
        >
          <Text style={styles.whiteColor}>
            更换地图影像
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('CustomMarkers')}
        >
          <Text style={styles.whiteColor}>
            创建地图标记
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('CustomOverlay')}
        >
          <Text style={styles.whiteColor}>
            创建地图覆盖物
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('MyWebView')}
        >
          <Text style={styles.whiteColor}>
            MyWebView
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  margin: {
    margin: 10
  },
  btn: {
    backgroundColor: '#000',
    width: 150,
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  whiteColor: {
    fontSize: 20,
    color: '#e5e5e5',
  }
})
