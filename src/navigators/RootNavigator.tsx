import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Horoscope from '../screens/Horoscope'
import Login from '../screens/Login'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import About from '../screens/About';
const Tab = createBottomTabNavigator();


export const RootNavigator = () => {
	return (
	    <Tab.Navigator screenOptions={{tabBarStyle: styles.nav, headerStyle:styles.nav, headerTitleStyle: styles.label, tabBarLabelStyle: styles.label}}>
			<Tab.Screen name="Login" component={Login}/>
		<Tab.Screen name="Home" component={Home} />
		<Tab.Screen name="Horoscope" component={Horoscope} />
		<Tab.Screen name="Profile" component={Profile} />
		<Tab.Screen name="About" component={About} />
	  </Tab.Navigator>
	);
};

const styles = StyleSheet.create({
  nav: {
	  backgroundColor: '#2a3637',
  },
  label: {
	  color: '#fff'
  }
})