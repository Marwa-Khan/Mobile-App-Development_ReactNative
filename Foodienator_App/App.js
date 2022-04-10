import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Search from './screens/Search.js';
import SignUp from './screens/SignUp.js';
import StartScreen from './screens/StartScreen.js';


export default function App() {
  return (
    <>
    <StartScreen/>
    {/* <SignUp/> */}
    {/* <Search/> */}
    
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
