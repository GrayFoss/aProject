import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import MapView from "react-native-maps";

export default class MyMapView extends Component{
  constructor() {
    super();
    this.state = {
      region: {
        name: '旧金山',
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      beijing: {
        name: '北京',
        latitude: 39.915,
        longitude: 116.404,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
  }
  render(){
    this.getDeviceWidth();
    return (
      <View style={styles.mapBox}>
        <View style={styles.fixToText}>
          <Button
            title="定位至旧金山"
            onPress={() => this._locateSan()}
          />
          <Text>
            当前位置:{this.state.region.name}
          </Text>
          <Button
            title="定位至北京"
            onPress={() => this._locateBeijing()}
          />
        </View>
        <MapView style={{ height: '100%', width: '100%' }}
                 region={this.state.region}
        />
      </View>
    )
  }

  _locateBeijing(){
    // alert('北京')
    this.setState({ region: {
        name: '北京',
        latitude: 39.915,
        longitude: 116.404,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }});
  }

  _locateSan(){
    // alert('旧金山')
    this.setState({ region: {
        name: '旧金山',
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }});
  }

  getDeviceWidth(){
    let sWidth = Dimensions.get("window").width;
    console.log('设备宽度:', Math.floor(sWidth));
  }

}

const styles = StyleSheet.create({
  mapBox: {
    height: "100%",
    width: "100%",
    // flex: 1,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
