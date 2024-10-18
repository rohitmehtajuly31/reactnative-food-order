import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Order from './Order';
import Vege from './Vege';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const Bottomtab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'white' },
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
            source={require('../src/assets/home1.png')} // Update to your actual image path
            style={styles.icon}
            resizeMode="contain"
          />
          ),
        }} 
      />
      <Tab.Screen 
        name="Order" 
        component={Order}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
            source={require('../src/assets/order.png')} // Update to your actual image path
            style={styles.icon}
            resizeMode="contain"
          />
          ),
        }} 
      />
      <Tab.Screen 
        name="Vege" 
        component={Vege}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
            source={require('../src/assets/food.png')} // Update to your actual image path
            style={styles.icon}
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
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'black',
  },
  icon:{
    width:25,
    height:30

  }
});

export default Bottomtab;
