import React, { Component } from "react";
import { Alert, Platform, StyleSheet, Text,Button, View } from "react-native";
import { WebView } from 'react-native-webview';
import Geolocation from '@react-native-community/geolocation';

const localHtmlFile = require('../assets/html/map.html');

const Separator = () => {
  return <View style={styles.separator} />;
}

class MyWebView extends Component{
  specName = '123';

  constructor(props) {
    super(props);
    this.webView = React.createRef();
    this.state = {
      baseUrl: (Platform.OS === 'ios') ? {uri: '../assets/html/map.html'} : {uri: 'file:///android_asset/web/map.html'}
    }
    console.log('来自RN的日志111');
  }

  render() {
    return (
      <View>
        <View style={styles.webContainer }>
          <WebView
            ref={this.webView}
            // source={{uri: 'https://www.baidu.com'}}
            source={ this.state.baseUrl  }
            // source={localHtmlFile}
            javaScriptEnabled={true}
            onLoadEnd={
              this._loadEnd
              // () => {
              //   this.webView.current.postMessage(JSON.stringify({ method: 'setEsriTiles', params: '111123' }));
              // }
            }
            onScroll={this._onScroll}
            automaticallyAdjustContentInsets={false}
            onMessage={(e: {nativeEvent: {data?: string}}) => {
              Alert.alert('收到消息: ', e.nativeEvent.data);
            }}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title='RN发送数据至HTML'
            onPress={ this._sendMessage }
          />
          <Separator />
          <Button
            title='渲染地图'
            onPress={ this._renderMap }
          />
          <Separator />
          <Button
            title='Esri影像'
            onPress={ this._setEsriTiles }
          />
          <Separator />
          <Button
            title='定位当前位置'
            onPress={ this._getCurrentLocation }
          />
        </View>
       </View>
    );
  }

  //获取经纬度的方法  Longitude  Latitude
  getLongitudeAndLatitude = () => {

    //获取位置再得到城市先后顺序，通过Promise完成
    return new Promise((resolve, reject) => {

      Geolocation.getCurrentPosition(
        location => {

          //可以获取到的数据
          var result = "速度：" + location.coords.speed +
            "\n经度：" + location.coords.longitude +
            "\n纬度：" + location.coords.latitude +
            "\n准确度：" + location.coords.accuracy +
            "\n行进方向：" + location.coords.heading +
            "\n海拔：" + location.coords.altitude +
            "\n海拔准确度：" + location.coords.altitudeAccuracy +
            "\n时间戳：" + location.timestamp;

          // ToastAndroid.show("UTIl" + location.coords.longitude, ToastAndroid.SHORT);
          console.log(result);
          resolve([location.coords.longitude, location.coords.latitude]);
        },
        error => {
          // Alert.alert("获取位置失败：" + error, "")
          reject(error);
        }
      );
    })
  }


  _loadEnd = () => {
    console.log('_loadEnd!!!');
  }

  _sendMessage = () => {
    console.log('_sendMessage!!!');
    this.webView.current.postMessage(JSON.stringify({ data: "此消息来自RN" }));
  }

  _setEsriTiles = () => {
    console.log('_setEsriTiles!!!');
    this.webView.current.postMessage(JSON.stringify({ method: 'setEsriTiles', params: 'this is params!!!' }));
  }

  _renderMap = () => {
    console.log('_renderMap!!!');
    this.webView.current.postMessage(JSON.stringify({ method: 'render' }));
  }

  _getCurrentLocation = () => {
    console.log('_getCurrentLocation!!!');
    Geolocation.getCurrentPosition(position => {
      console.log('position: ', position)
      const currentLongitude = JSON.stringify(position.coords.longitude);
      const currentLatitude = JSON.stringify(position.coords.latitude);
      this.webView.current.postMessage(
        JSON.stringify(
          {
            method: 'setCenterView',
            params: { lat: currentLatitude, lon: currentLongitude  }
          })
      );
    });
  }

  _onScroll = event => {
    console.log('scroll:', JSON.stringify(event.nativeEvent));
  }
}

const styles = StyleSheet.create({
  webContainer: {
    height: 400,
    width: '100%'
  },
  btnContainer: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})

export default MyWebView;
