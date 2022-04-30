import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{flex:1, backgroundColor:"lightblue"}}>
      <Image source={require("./images/starting.png")} />
      {/* <Text>Haseb</Text> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})