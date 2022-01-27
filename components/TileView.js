import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import MapView,{UrlTile} from "react-native-maps";

export default class TileView extends Component{
  constructor() {
    super();
    this.state = {
      // urlTemplate: 'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
      // urlTemplate: 'https://services.arcgisonline.com/arcgis/rest/services/World_ImagEery/MapServer/tile/{z}/{y}/{x}?blankTile=false',
      urlTemplate: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
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
          <View style={{ height: '100%', width: '100%' }}>
            <MapView style={{ height: '100%', width: '100%' }}
                     region={this.state.region}>
              <UrlTile
                /**
                 * The url template of the tile server. The patterns {x} {y} {z} will be replaced at runtime
                 * For example, http://c.tile.openstreetmap.org/{z}/{x}/{y}.png
                 */
                urlTemplate={this.state.urlTemplate}
                /**
                 * The maximum zoom level for this tile overlay. Corresponds to the maximumZ setting in
                 * MKTileOverlay. iOS only.
                 */
                maximumZ={19}
                /**
                 * flipY allows tiles with inverted y coordinates (origin at bottom left of map)
                 * to be used. Its default value is false.
                 */
                flipY={false}
              />

            </MapView>
          </View>

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
