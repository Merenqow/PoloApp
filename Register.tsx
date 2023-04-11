import React from 'react';
import { View, Animated } from 'react-native';


const Registration = () => {
    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.Text style={{ fontFamily: 'mulishbold', color: '#CC3333' }}>Экран регистрации</Animated.Text>
      </View>
    );
};

export default Registration;