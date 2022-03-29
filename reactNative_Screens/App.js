import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login.js';

import RegisterScreen  from "./screens/RegisterScreen.js";



export default function App() {
  return (
    <>
    <RegisterScreen/>
    {/* <Login/> */}
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
