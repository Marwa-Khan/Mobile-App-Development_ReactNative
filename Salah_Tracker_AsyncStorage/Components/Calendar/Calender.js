import { StyleSheet, Text, View,Switch,TouchableOpacity,Alert,ImageBackground } from 'react-native';
import {React,useState} from 'react'
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import Prayer from '../prayer/Prayer';

export default function Calender() {
          const[isshow, setIshow]=useState(false);

          // let myMomentObject;
          onDateSelected =(e)=>{
          // console.log(parse(e));
          const mobselectedDate =moment.utc(e).format();
            // console.log(mobselectedDate);
          let CurrentDate=new Date();
          // console.log(CurrentDate);
          CurrentDate=moment.utc(CurrentDate).format();
          // console.log(CurrentDate+"cureent");
          if (mobselectedDate<=CurrentDate){
          setIshow(true);
          }
          else{
          Alert.alert("INVALID DATE","PLEASE SELECT CURRENT || PREVIOUS DATES ");
          setIshow(false);
          }  }
  
          return (
                    <>
          <View style={styles.container}>
                    {/* <ImageBackground source={require('../images/background.jpg')} resizeMode={'cover'}  style={styles.stretch}> */}
                    <CalendarStrip
                              scrollable
                              style={{height:90, paddingTop: 10, paddingBottom: 10}}
                              
                              calendarColor={'#C060A1'}
                              calendarHeaderStyle={{color: '#fff',fontSize:17}}
                              dateNumberStyle={{color: 'white'}}
                              dateNameStyle={{color: 'white',fontWeight:"bold",fontSize:12}}
                              iconContainer={{borderRadius: 130, width:"4%",padding: 6, backgroundColor:"white"}}
                              iconStyle={{color:"yellow"}}
                              onDateSelected={(e)=>onDateSelected(e)}    
                              /> 
                              {/* </ImageBackground> */}
                               <ImageBackground source={require('../images/bg.jpg')}  style={{flex:1,justifyContent:'center', height:"90%", top:10}}>
                                         <View style={{flex:1}}>
                                                  {isshow && <Prayer/> }
                                        </View>
                              </ImageBackground>
                               
                              
          </View>
                              </>

          )
}
const styles = StyleSheet.create({
          container:{
                    flex: 1,
                    backgroundColor:"#fff"
          },
          stretch: {
                    top:.1,
                    // width:"100%"
                    // flex:1,
                    // resizeMode: 'contain',
                    
                  },
})