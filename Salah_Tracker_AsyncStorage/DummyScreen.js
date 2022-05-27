import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import { Alert } from 'react-native';
import react from 'react';

const Details =({name})=>{
  return <View style={{ padding: 24 }}><Text>{name}</Text></View>
} 

renderDetails = () => {
  return <Details 
      name="Haseeb"
    />         
}
export default function DummyScreen() {
  const[isshow, setIshow]=react.useState(true);

  return (
    <View style={{width:"50%"}}>
  <Calendar
  // onPress={day=>{
  //   console.log('selected day', moment.utc(day).format("DD/MM/YYYY"));
  //   console.log('today date', moment.utc(new Date()).format("DD/MM/YYYY"));
  // }}
  // onDayPress={}
  onDayPress={day => {
    // console.log('selected day', moment.utc(day).format("DD/MM/YYYY"));
    // console.log(moment.utc(new Date()).format("DD/MM/YYYY"));


    if (day.day<=moment.utc(new Date()).format("DD")){
      setIshow(true);
      // { false && }
    }
    else{
      console.log("NAHHH!");
      setIshow(false);
    }
    // this.renderDetails()
  }
  // this.renderDetails()
}
  
  
/>
<View style={{backgroundColor:"yellow"}}>
  { isshow && <Text>bcs 6 tracker</Text>}
  {/* { isshow && <Text>True value</Text>}/ */}
</View>

    </View>
  )
}

const styles = StyleSheet.create({})