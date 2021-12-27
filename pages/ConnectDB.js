import React, { Component } from "react";
import { Text, View } from "react-native";
import axios from "axios";
import { FlatList } from "react-native-web";

export default class ConnectDB extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }
  componentDidMount() {
    axios.get("http://localhost:3005/post").then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={(item) => {
            return <Text>{item.item.title}</Text>;
          }}
        />
      </View>
    );
  }
}
