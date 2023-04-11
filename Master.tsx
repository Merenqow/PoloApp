import React from 'react';
import { View, Animated } from 'react-native';

import Sqlite from 'react-native-sqlite-storage';

let UserName = null;

const Master = () => {
    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.Text style={{ fontFamily: 'mulishbold', color: '#CC3333' }}>Экран выбора режима</Animated.Text>
      </View>
    );
};

export default Master;