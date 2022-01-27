import React, { Component } from "react";
import { Button, Text, View } from "react-native";

export default class Details extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
        <Text>详情页</Text>
      </View>
    );
  }
}
