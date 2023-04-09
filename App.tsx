import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Image, ImageBackground,
        Animated, Easing} from 'react-native';
import { useNavigate } from "react-router-dom";
import { Button, Text } from 'react-native';
import Master from "./Master";
import Sqlite from 'react-native-sqlite-storage';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {

  const fadeIn = useRef(new Animated.Value(0.5)).current;

  const [isRegistred, setIsRegistred] = useState(false);

  var db = Sqlite.openDatabase({ name: 'userdata.sqlite' },
    () => {
      console.log('Successfull');
    },
    error => {console.log(error);});

  db.transaction(function(txn) {
    txn.executeSql(
      "SELECT * FROM userdata",
      [],
      function(tx, res) {
      if(res.rows.length > 0){
        console.log('item:', res.rows.length);
        console.log('Have data');
        setIsRegistred(true);
        }
      }
    );
  });

  useEffect(() => {
  Animated.loop(
  Animated.sequence([
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeIn, {
            toValue: 0.5,
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

    const AnimetedImage = Animated.createAnimatedComponent(Image);

    const Stack = createNativeStackNavigator();

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
      <View style={{flexDirection: 'row', flex: 2, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground source={require('./Graphics/poloillustrations01.png')}
                       resizeMode='contain'
                       style={{transform: [{ scale: 0.3 }], position: 'absolute'}}>

                  <FadeInView>
                       <Image
                        source={require('./Graphics/poloillustrations05.png')}
                        resizeMode='contain'
                        style={{transform: [{ scale: 1 }], position: 'absolute'}}
                        />
                  </FadeInView>

                  <AnimetedImage
                         source={require('./Graphics/poloillustrations04.png')}
                         resizeMode='contain'
                         style={[{
                             transform: [
                                 {
                                   rotate: translateAnimation,
                                 },
                                 { scale: 1.075 }
                               ]
                         }]}
                          />
      </ImageBackground>
      </View>
    <View style={{flex: 2, alignItems: 'center', justifyContent:'center'}}>
        {isRegistred ?
         <Animated.Text style={{opacity: fadeIn, fontFamily: 'mulishbold', color: '#CC3333'}}>Pареган</Animated.Text>
         :
         <Animated.Text style={{opacity: fadeIn, fontFamily: 'mulishbold', color: '#CC3333'}}>Загрузка</Animated.Text>}
    </View>
    </View>
  );
};


const FadeInView = (props: any) => {
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
  button: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 4,
      backgroundColor: 'oldlace',
      alignSelf: 'flex-start',
      marginHorizontal: '1%',
      marginBottom: 8,
      minWidth: '48%',
      textAlign: 'center',
    },
});

export default App;