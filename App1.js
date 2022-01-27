import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import MyMapView from './components/MyMapView';
import TileView from "./components/TileView";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>React Native Map Demo</Text>
      </View>
      {/*<View style={styles.mapBox}>*/}
      {/*  <MapView style={{ height: '100%', width: '100%' }}*/}
      {/*           initialRegion={{*/}
      {/*             latitude: 37.78825,*/}
      {/*             longitude: -122.4324,*/}
      {/*             latitudeDelta: 0.0922,*/}
      {/*             longitudeDelta: 0.0421,*/}
      {/*           }}*/}
      {/*  />*/}
      {/*</View>*/}

      {/*<MyMapView />*/}

      <TileView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: 'dodgerblue',
    paddingHorizontal: 10,
    paddingTop: 30,
    width: '100%',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  mapControls: {
    backgroundColor: 'rgba(255,255,255,.5)',
    borderRadius: 5,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0,
    marginHorizontal: 10,
    padding: 7,
    position: 'absolute',
    right: 0,
  },
  mapButton: {
    alignItems: 'center',
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  mapButtonEmoji: {
    fontSize: 28,
  },
  mapBox: {
    backgroundColor: 'blue',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
});
