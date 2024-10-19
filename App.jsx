// App.js

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Bottomtab from './src/Bottomtab';
import HomeNew from './src/HomeNew';



const Stack= createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
      <Stack.Screen name="Bottomtab" component={Bottomtab} />
      <Stack.Screen name="HomeNew" component={HomeNew} />
      {/* <HOmeNew/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
