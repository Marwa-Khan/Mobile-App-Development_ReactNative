import { useState } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Calender from './Components/Calendar/Calender';
import { NavigationContainer } from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import DummyScreen from './DummyScreen';
import Report from './Report';
import Report1 from './Report1';
import Prayer from './Components/prayer/Prayer';
import Home from './Components/Home';
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import { Settings } from 'react-native-web';


const Tab = createBottomTabNavigator();

function Setting(){
  return(
    <Text >Settings</Text>
  )
}
export default function App() {
  
  return (
    // <Prayer/>
    
    <>
    {/* <Report1/> */}
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' 
      screenOptions={{
        tabBarActiveBackgroundColor: "lightblue",
        tabBarInactiveBackgroundColor: "skyblue",
        tabBarInactiveTintColor: "white",

      }}>
        <Tab.Screen name="Home" component={Calender}  options={{title:"Prayer Tracker",
                  tabBarIcon: ({ color, size }) => (
                    <Image
                            source={require('./Components/images/prayer.png')}
                            style={{ width: 26, height: 26, tintColor: color }}
                        />
                ),
                
        }}/>
        <Tab.Screen name="Reports" component={Report} 
        options={{ title:"Report Chart",
          tabBarIcon: ({color, size }) => (
            <Image
                    source={require('./Components/images/report.png')}
                    style={{ width: 26, height: 26, tintColor: color }}
                />
          )}}
        />
        <Tab.Screen name="Setting" component={Setting}
          options={{title:"Settings",
            tabBarIcon: ({ color, size }) => (
              <Image
                      source={require('./Components/images/settings.png')}
                      style={{ width: 26, height: 26, tintColor: color }}
                  />
            )}}
        />
        {/* <Tab.Screen name="Report" component={Setting}
          options={{title:"Settings",
            tabBarIcon: ({ color, size }) => (
              <Image
                      source={require('./Components/images/settings.png')}
                      style={{ width: 26, height: 26, tintColor: color }}
                  />
            )}}
        /> */}
        
      </Tab.Navigator>
    </NavigationContainer> 
    {/* <Home/> */}
    </>
     
    
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:'5%',
  },
});
