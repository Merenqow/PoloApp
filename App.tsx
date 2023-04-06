import React from 'react';
import {StyleSheet, View, Image, ImageBackground, ActivityIndicator, Text} from 'react-native';


const App = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <ImageBackground source={require('./Graphics/poloillustrations03.png')}
                       resizeMode='contain'
                       style={{transform: [{ scale: 0.375 }], flex: 2}}>
      </ImageBackground>
      <View style={{flex: 2}}>
      <ImageBackground source={require('./Graphics/poloillustrations01.png')}
                       resizeMode='contain'
                       style={{transform: [{ scale: 0.775 }], flex: 2}}>
         <ImageBackground source={require('./Graphics/poloillustrations04.png')}
                          resizeMode='contain'
                          style={{transform: [{ scale: 1 }], flex: 2}}>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                       <Image
                        source={require('./Graphics/poloillustrations05.png')}
                        resizeMode='contain'
                        style={{transform: [{ scale: 0.4 }]}}
                        />
                  </View>
          </ImageBackground>
      </ImageBackground>
      </View>
    <View style={{flex: 2, alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#CC3333" style={{transform: [{ scale: 1.5 }]}}/>
        <Text style={{top: 20, fontFamily: 'Mulish-Semibold'}}>Загрузка</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default App;