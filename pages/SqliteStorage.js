import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("reactNativeDB");

export default class SqliteStorage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
    this.createTable();
    this.deleteTable();
  }

  createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS peopleTable (ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER)",
        null,
        (result) => {},
        (tx, err) => {
          console.log(err);
        }
      );
    });
  };
  deleteTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM peopleTable",
        null,
        (result) => {},
        (tx, err) => {
          console.log(err);
        }
      );
    });
  };
  insertTable = (name, age) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO peopleTable (Name, Age) VALUES (?,?)",
        [name, age],
        () => {},
        (tx, err) => {
          console.log(err);
        }
      );
    });
  };
  getData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM peopleTable",
        null,
        (tx, result) => this.setState({ data: result }),
        (tx, err) => {
          console.log(err);
        }
      );
    });
  };
  updateTable = (name) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE peopleTable set Name='Long'",
        null,
        (tx, result) => {},
        (tx, err) => {
          console.log(err);
        }
      );
    });
  };
  render() {
    return (
      <View>
        <Text>
          Name : {this.state.data.rows && this.state.data.rows[0].Name}
        </Text>
        <Button
          title='Insert Data'
          onPress={() => {
            this.insertTable("Mr.Json", 24);
            this.getData();
          }}
        />
        <Button
          title='Update Table'
          onPress={() => {
            this.updateTable("Mr.Peter");
            this.getData();
          }}
        />
      </View>
    );
  }
}
