import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import MainPlayer from "./components/MainPlayer";

const screenHeight = Dimensions.get("window").height;

const data = [
  {
    id: 1,
    username: "johndoe",
    time: "2 minutes ago",
    title: "My first TikTok video!",
    description: "This is my first TikTok video. Hope you like it!",
    views: 100,
    comments: 10,
  },
  {
    id: 2,
    username: "janedoe",
    time: "5 minutes ago",
    title: "My cute cat",
    description: "Check out my cute cat doing funny things!",
    views: 200,
    comments: 20,
  },
  {
    id: 3,
    username: "johndoe",
    time: "10 minutes ago",
    title: "My trip to the beach",
    description: "Here's a video from my recent trip to the beach. Enjoy!",
    views: 300,
    comments: 30,
  },
  // Add more video objects here...
];

const VideoItem = ({ data }) => {
  return (
    <View style={[styles.slide, { height: screenHeight }]}>
      <View style={styles.slideHeader}>
        <View style={styles.user}>
          <Text style={styles.username}>{data.username}</Text>
          <Text style={styles.time}>{data.time}</Text>
        </View>
        <TouchableOpacity style={styles.followBtn}>
          <Text style={styles.followText}>Following</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.videoContainer}>
        <Video
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          resizeMode="contain"
          shouldPlay={false}
          isLooping={false}
          style={styles.video}
          useNativeControls
        />
      </View>

      <View style={styles.slideFooter}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <View style={styles.stats}>
          <Text style={styles.views}>{data.views} views</Text>
          <Text style={styles.comments}>{data.comments} comments</Text>
        </View>
      </View>
    </View>
  );
};

const VideosList = () => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      vertical
      showsVerticalScrollIndicator={false}
      snapToInterval={300} // Set this to the width of your VideoItem component
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <VideoItem data={item} />}
    />
  );
};

const App = () => {
  return (
    <MainPlayer />
    // <View style={styles.container}>
    //   <VideosList />
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  slide: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingHorizontal: 10,
    position: "relative",
  },
  video: {
    height: 300,
    width: "100%",
  },
  videoContainer: {
    borderRadius: 20,

    width: "100%",
  },
  slideHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 80,
    left: 20,
    right: 20,
    zIndex: 9999,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontWeight: "bold",
    marginRight: 5,
    color: "#fff",
  },
  time: {
    color: "#aaa",
    fontSize: 12,
    fontStyle: "italic",
  },
  followBtn: {
    backgroundColor: "#e60073",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  followText: {
    color: "#fff",
    fontWeight: "bold",
  },
  slideFooter: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    marginTop: 5,
  },
  stats: {
    flexDirection: "row",
    marginTop: 5,
  },
  views: {
    marginRight: 10,
  },
  comments: {},
});
