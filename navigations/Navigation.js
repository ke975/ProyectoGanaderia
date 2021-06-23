import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Informations from '../screens/Information'
import Instructions from '../screens/Instructions'
import HomeStack from './HomeStack';
import InformationStack from './InformationStack'
const Tab = createBottomTabNavigator()

// import { Container } from './styles';

const Navigation= () => {
  return(
  <NavigationContainer>
 <Tab.Navigator>
     <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{title:"Home"}}
     />
      <Tab.Screen
      name="Informations"
      component={InformationStack}
      options={{title: "informacion"}}
     />
       <Tab.Screen
      name="Instructions"
      component={Instructions}
      options={{title:"Instruccion"}}
     />
 </Tab.Navigator>

  </NavigationContainer>
  
  ) 
}

export default Navigation;