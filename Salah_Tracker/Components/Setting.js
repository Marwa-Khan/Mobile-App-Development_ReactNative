import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import { ScrollView } from 'react-native'

export default function Setting() {
  return (
    <ScrollView>
        <SafeAreaView>
        <Text>Settings</Text>
        <View style={styles.features}>
            <Image style={{
        width: 30, height: 30}} source={require('../Images/bell.png')} />
            <Text>Notifications</Text>
        </View>

        <View style={styles.features}>
            <Image style={{
        width: 30, height: 30}}  source={require('../Images/theme.png')} />
            <Text>Appearance</Text>
            <ToggleSwitch
                isOn={false}
                onColor="green"
                offColor="red"
                label="Example label"
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="large"
                onToggle={isOn => console.log("changed to : ", isOn)}
            />
        </View>

    </SafeAreaView>

    </ScrollView>
  
  )
}

const styles = StyleSheet.create({
  features:{
    flex:1,
    flexDirection:'row'
  },
  
})