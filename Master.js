import React from 'react';
import { View, Animated } from 'react-native';

import Sqlite from 'react-native-sqlite-storage';

let UserName = null;

const Master = () => {
  if(UserName = null) {
    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.Text style={{ fontFamily: 'mulishbold', color: '#CC3333' }}>Загрузка</Animated.Text>
      </View>
    );
  }
};

var db = Sqlite.openDatabase({ name: 'userdata.sqlite' },
  () => {
    console.log('Successfull');
  },
  error => {console.log(error);});


db.transaction(function(txn) {
  txn.executeSql(
    "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
    [],
    function(tx, res) {
      console.log('item:', res.rows.length);
      if (res.rows.length == 0) {
        txn.executeSql('DROP TABLE IF EXISTS userdata', []);
        console.log('Table deleted');
        txn.executeSql(
          'CREATE TABLE IF NOT EXISTS userdata(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_age INT(10))',
          []
        );
        console.log('Table created');
      }
    }
  );
})

db.transaction(function(tx) { tx.executeSql(
  'INSERT INTO userdata (user_name, user_age) VALUES (?,?)',
  ['Bob', 17], (tx, results) => {
    console.log('Results', results.rowsAffected);
    if (results.rowsAffected > 0) {
      console.log('Good insert');
    } else {
      console.log('Registration has Failed');
    }
  }
);
});

db.transaction(function(txn) {
  txn.executeSql(
    "SELECT user_name FROM userdata",
    [],
    function(tx, res) {
      console.log('item:', res.rows);
      if (res.rows.length == 0) {
        txn.executeSql('DROP TABLE IF EXISTS table_user', []); txn.executeSql(
          'CREATE TABLE IF NOT EXISTS userdata(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_age INT(10))',
          []
        );
      } else {
        console.log('Item: ', res.rows.item(0)['user_name']);
      }
    }
  );
});

export default Master;