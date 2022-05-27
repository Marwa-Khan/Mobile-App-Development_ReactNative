import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

export default function Offer() {
  return (
  <SafeAreaView>
      <View style={styles.namaz}>
        <Image source={require("../Images/cancel.png")} />
        <Image source={require("../Images/Fajr.png")} />
        <Text>How did you complete your Fajar?</Text>
      </View>

      <View style={styles.namaz}>
        <Image source={require("../Images/cancel.png")} />
        <Image source={require("../Images/Dhuhr.png")} />
        <Text>How did you complete your Dhuhr?</Text>
      </View>

      <View style={styles.namaz}>
        <Image source={require("../Images/cancel.png")} />
        <Image source={require("../Images/asar.png")} />
        <Text>How did you complete your Asar?</Text>
      </View>

      <View style={styles.namaz}>
        <Image source={require("../Images/cancel.png")} />
        <Image source={require("../Images/maghrib.png")} />
        <Text>How did you complete your Maghrib?</Text>
      </View>

      <View style={styles.namaz}>
        <Image source={require("../Images/cancel.png")} />
        <Image source={require("../Images/isha.png")} />
        <Text>How did you complete your Isha?</Text>
      </View>


      <View>
      <Image source={require("../Images/on-time.png")} />
      <Text>On time</Text>

      <Image source={require("../Images/block.png")} />
      <Text>Not Prayed</Text>

      <Image source={require("../Images/late.png")} />
      <Text>Late</Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
