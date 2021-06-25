import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements'
import InstructionsStack from './InstructionsStack'
import CreditosStack from './CreditosStack'
import HomeStack from './HomeStack';
import InformationStack from './InformationStack'
import Information from '../screens/Information';
import Instructions from '../screens/Instructions';
const Tab = createBottomTabNavigator()

// import { Container } from './styles';

const Navigation= () => {

const screenOptions = (route,color)=>{
  let iconName

  switch (route.name) {
    case "Home":
      iconName="house"
      break;
      case "Informations":
        iconName="import-contacts"
  
      break;
      case "Instructions":
        iconName="agriculture"
  
      break;
      case "Creditos":
        iconName="people"
  
      break;
  }

  return(
    <Icon
    type="material-comunity"
    name={iconName}
    size={22}
    color={color}
    
    />
  )

}

  return(
  <NavigationContainer>
 <Tab.Navigator
initialRouteName="Home"
tabBarOptions={{
  inactiveTintColor:"grey",
  activeTintColor:"purple"
}}
screenOptions={({route})=>({
  tabBarIcon:({color})=>screenOptions(route, color)
})}
 >
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
      component={InstructionsStack}
      options={{title:"Instruccion"}}
     />
        <Tab.Screen
      name="Creditos"
      component={CreditosStack}
      options={{title:"Creditos"}}
     />
 </Tab.Navigator>

  </NavigationContainer>
  
  ) 
}

export default Navigation;