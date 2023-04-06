import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Image, ImageBackground,
        ActivityIndicator, Text, Animated, Easing} from 'react-native';


const App = () => {

  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
  Animated.loop(
  Animated.sequence([
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeIn, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          })
      ])).start();
    }, [fadeIn]);

  const initialValue = 0;
      const translateValue = useRef(new Animated.Value(initialValue)).current;

      useEffect(() => {
        const translate = () => {
          translateValue.setValue(initialValue);
          Animated.loop(
          Animated.sequence([
          Animated.timing(translateValue, {
            toValue: -1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(translateValue, {
                      toValue: 0,
                      duration: 3000,
                      easing: Easing.linear,
                      useNativeDriver: true,
                    })])).start();
      };
      translate();
        }, [translateValue]);

        const translateAnimation = translateValue.interpolate({
            inputRange: [0, 1],
              outputRange: ['-10deg', '10deg'],
          });

    const AnimetedImage = Animated.createAnimatedComponent(ImageBackground);


  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          backgroundColor: 'white',
          flexDirection: 'column',
        },
      ]}>
      <ImageBackground source={require('./Graphics/poloillustrations03.png')}
                       resizeMode='contain'
                       style={{transform: [{ scale: 0.39 }], flex: 2}}>
      </ImageBackground>
      <View style={{flex: 2}}>
      <ImageBackground source={require('./Graphics/poloillustrations01.png')}
                       resizeMode='contain'
                       style={{transform: [{ scale: 0.775 }], flex: 2}}>
         <AnimetedImage
                       source={require('./Graphics/poloillustrations04.png')}
                       resizeMode='contain'
                       style={[{
                           transform: [
                               {
                                 rotate: translateAnimation,
                               },
                               { scale: 1.5 }
                             ], justifyContent: 'center', alignItems: 'center', flex: 2, top: 32
                       }]}
                        />
                  <FadeInView style={{flex: 1, justifyContent: 'center', alignItems: 'center', bottom: 75}}>
                       <Image
                        source={require('./Graphics/poloillustrations05.png')}
                        resizeMode='contain'
                        style={{transform: [{ scale: 0.4 }]}}
                        />
                  </FadeInView>
      </ImageBackground>
      </View>
    <View style={{flex: 2, alignItems: 'center', justifyContent:'center'}}>

        <Animated.Text style={{top: 20, opacity: fadeIn, fontFamily: 'mulishbold', color: '#CC3333'}}>Загрузка</Animated.Text>
    </View>
    </View>
  );
};

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

useEffect(() => {
Animated.loop(
Animated.sequence([
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }),
    Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        })
    ])).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default App;