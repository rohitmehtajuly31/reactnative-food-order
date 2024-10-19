import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Order from './Order';
import Vege from './Vege';
import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const Bottomtab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: 'white' },
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../src/assets/home1.png') : require('../src/assets/homey.png')}
              style={[styles.icon, { marginTop: 15 }]} // Added marginTop here
              resizeMode="contain"
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="Order" 
        component={Order}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../src/assets/cartlight.png') : require('../src/assets/25619.png')}
              style={[styles.icon, { marginTop: 15 }]} // Added marginTop here
              resizeMode="contain"
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="Vege" 
        component={Vege}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../src/assets/foodark.png') : require('../src/assets/foodlight.png')}
              style={[styles.icon, { marginTop: 15 }]} // Added marginTop here
              resizeMode="contain"
            />
          ),
        }} 
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 12,
marginTop:5,
    fontWeight: 'bold',
    color: 'black',
    height:20
    
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default Bottomtab;
