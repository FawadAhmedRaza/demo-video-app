import React, { Component } from "react";
import { View, FlatList } from "react-native";
import VideoPlayer from "../videoPlayer";
const DATA = require("../data.json");
class MainPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderPosts = ({ item }) => {
    return <VideoPlayer videoUri={item.video} item={item} />;
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{ paddingTop: 25 }}
          keyExtractor={(_, index) => index}
          data={DATA?.videos}
          renderItem={this.renderPosts}
          horizontal={false}
          scrollEventThrottle={20}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
        />
      </View>
    );
  }
}
export default MainPlayer;
