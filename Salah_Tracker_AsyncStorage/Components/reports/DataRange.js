import { StyleSheet, Text, View,ImageBackground, TextInput,TouchableOpacity, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import SelectDropdown from 'react-native-select-dropdown'
import {React,useState,useEffect} from 'react';
import { Dimensions } from "react-native";
import { BarChart,Grid } from 'react-native-chart-kit'
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Report from '../jasonfile/Report.json';
// import moment from 'moment';

let Cdata=[20,30,10,40,30];


export default function DataRange() {
    const[chartData,setChartData]=useState([]);
  
 const asyncdata=async()=>{
    try {
      await AsyncStorage.setItem("@GraphData",JSON.stringify(Cdata))
  
    } catch (error) {
      Alert.alert(error)
    }
  }
  const get=async()=>{
    try {
      console.log(Cdata);
      let data=await AsyncStorage.getItem("@GraphData");
      // console.log(data);
      setChartData(data)
      console.log(chartData);
    } catch (error) {
      
    }
  }
          const screenWidth = Dimensions.get("window").width;
          var date = new Date();
          const [fromdate, setFromdate] = useState(new Date(date.getFullYear(), date.getMonth(), 1));
          const [todate, setTodate] = useState(new Date());
          const [selectedValue, setSelectedValue] = useState("All Salah");
          let faj,duh,asr,mag,ish;
          let arr=[];
          searchData=()=>{
                    // // const d=JSON.parse(Report);
                    // for (let i=0; i<Report.length; i++){
                    //           console.log(Report[i].date[fromdate]);
                    // }
                    // Report.filter(k=>k.date===fromdate)
                    // if (ok.length==0){
                              // console.log('hello');
                    // }
                    // else{
                    //           for (let i=0; i<ok.length; i++){
                    //                     // console.log(ok[i]);
                    //                     // ok
                                        
                    //           }
                    // }
                    // if()                                                                                                                                                {


                    // }
                    // arr[0]=Report.filter(k=>k.Fajar==="Offered").length;
                    // arr[1]=Report.filter(k=>k.Dhuhr==="Offered").length;
                    // arr[2]=Report.filter(k=>k.Asr ==="Offered").length;
                    // arr[3]=Report.filter(k=>k.Maghrib==="Offered").length;
                    // arr[4]=Report.filter(k=>k.Isha==="Offered").length;
                    // console.log(arr);
                   
          }

            const chartConfig = {
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                // backgroundGradientFromOpacity: .9,
                barPercentage: 0.7,
                height:600,
                fillShadowGradient: `rgba(1, 122, 205, 1)`,
                fillShadowGradientOpacity: 1,
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(122, 2, 0, 1)`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,  
              
                propsForBackgroundLines: {
                  stroke: "#fff",

                },
              };
              
            const data = {
                labels: ["Fajar", "Zohar", "Asar", "Maghrib", "Isha"],
                datasets:[{
                          data:chartData
                }]
                // datasets:[10,20,30,10,35]
              };

useEffect(() => {
  asyncdata()
  get()
}, [])



          return(
            <>
            <View style={styles.container}>
            <View style={{flex:1, alignItems:"center"}}>
              <Text style={{fontSize:17,fontWeight:"bold",letterSpacing:2,color:"black",marginBottom:15}}>By Date</Text>
              <View style={styles.datePicker}>
              <View style={styles.fromDate}>
              <Text style={{fontSize:17,fontWeight:"300",letterSpacing:2,color:"black",marginBottom:15}}>From Date</Text>
              <DatePicker
                  style={styles.datePickerStyle}
          //         value={fromdate}
                  date={fromdate} // Initial date from state
                  mode="date" // The enum of date, datetime and time
                  placeholder="select date"
                  
                  format="DD-MM-YYYY"
                  // minDate="01-01-2016"
                  maxDate={new Date()}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                   
                  customStyles={{
                    dateIcon: {
                      display: 'none',
                    },
                    dateInput: {
                      width:"50%",
                      backgroundColor:"lightblue",
                      borderColor:"white",
                    },
                  }}
                  onDateChange={(fromDate) => {
                    setFromdate(fromDate);
                    console.log(fromDate);
                  }}
                  onPressMask={()=>{
                  }}
                />
              </View>
              <View style={styles.toDate}>
              <Text style={{fontSize:17,fontWeight:"300",letterSpacing:2,color:"black",marginBottom:15}}>To Date</Text>
              <DatePicker
                  style={styles.datePickerStyle}
                  date={todate} // Initial date from state
                  mode="date" // The enum of date, datetime and time
                  placeholder="select date"
                  format="DD-MM-YYYY"
                  // minDate="01-01-2016"
                  maxDate={new Date()}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
          //         minDate={}
                  customStyles={{
                    dateIcon: {
                      display: 'none',
                    },
                    dateInput: {
                      width:"50%",
                      backgroundColor:"lightblue",
                      borderColor:"white",
                    },
                  }}
                  onDateChange={(toDate) => {
                    // if (toDate<fromdate){
                    //           Alert.alert("Sorry!");
                              
                    // }
                    // else{
                              setTodate(toDate);
                              console.log(toDate);
                    // }

                  }}
                  
                />
              </View>
              </View>
        
              <View style={{width:"80%",margin:6}}>
                <Text style={styles.selectSalah}>Or Select Salah</Text>
                <View style={styles.salahContainer}>
                  {/* <Text placeholder='Select Namaz' style={styles.NamzaInput}> */}
                  <Picker 
                selectedValue={selectedValue}
                itemStyle={{fontSize:16}}
                style={{height:30}}
                onValueChange={(itemValue, itemIndex) => 
                  setSelectedValue(itemValue)
                  // console.log(ite);
                }
              >
                <Picker.Item label="All Salah" value="" />
                <Picker.Item label="Fajar" value="Fajar" />
                <Picker.Item label="Dhuhr" value="Dhuhr" />
                <Picker.Item label="Asr" value="Asr" />
                <Picker.Item label="Maghrib" value="Maghrib" />
                <Picker.Item label="Isha" value="Isha" />
              </Picker>
                  {/* </Text> */}
                </View>
                  <View>
                            
                  <TouchableOpacity style={styles.Btn} 
                onPress={searchData()}>
                    <Text style={{color:"white"}}>Filter</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Btn} 
                onPress={{}}>
                    <Text style={{color:"white"}}>Clear</Text>
                </TouchableOpacity>
                </View>
              </View>
            </View>
            <BarChart style={{flex:.9,top:10}}
            data={data}
            width={screenWidth}
            height={200}
            chartConfig={chartConfig} 
            
          />
          </View>
          </>
  )
}

const styles = StyleSheet.create({
          container:{
            flex:1,
            top:20,
            backgroundColor:"#fff"
          },
          datePicker:{
            
            flexDirection:"row",
            width:"80%",
            justifyContent:"space-between",
          },
          selectSalah:{
            fontSize:15,
            fontWeight:"bold",
            // justifyContent:"center"
            textAlign:"center"
          },
          salahContainer:{
            width:"100%",
            borderWidth:1,
            borderRadius:5,
            justifyContent:"center",
            // borderColor:"black"
            backgroundColor:"lightblue",
            marginTop:10
          },
          Btn:{
            marginTop:13,
            alignItems: "center",
            backgroundColor: "darkblue",
            borderRadius:5,
            padding: 10,
            width:"100%",
            paddingVertical:12,
        }
        })


        // let DData={
       
        //   aslam:{ 
        //       date:"18/04/2022",           
        //       Fajar:"Offered",
        //       Dhuhr:"Offered",
        //       Asr:"Offered",
        //       Maghrib:"Offered",
        //       Isha:"Offered"
        // },
        // "19-04-2022":{ 
                       
        //       "Fajar":"Offered",
        //       "Dhuhr":"Offered",
        //       "Asr":"Offered",
        //       "Maghrib":"Offered",
        //       "Isha":"Offered"
        // },
        // "20-04-2022":{ 
                       
        //       "Fajar":"Offered",
        //       "Dhuhr":"Offered",
        //       "Asr":"Offered",
        //       "Maghrib":"Offered",
        //       "Isha":"Offered"
        // },
        //   "21-04-2022": { 
                        
        //       "Fajar":"Offered",
        //       "Dhuhr":"Offered",
        //       "Asr":"Offered",
        //       "Maghrib":"Offered",
        //       "Isha":"Offered"
        // },
        //   "22-04-2022":{ 
                     
        //       "Fajar":"Offered",
        //       "Dhuhr":"Offered",
        //       "Asr":"Offered",
        //       "Maghrib":"Offered",
        //       "Isha":"Offered"
        // },
        // "23-04-2022":{            
        //       "Fajar":"Offered",
        //       "Dhuhr":"Offered",
        //       "Asr":"Offered",
        //       "Maghrib":"Offered",
        //       "Isha":"Offered"
        // },
        // "24-04-2022":{ 
        //       "date":"19-04-2022",           
        //       "Fajar":"Offered",
        //       "Dhuhr":"Offered",
        //       "Asr":"Offered",
        //       "Maghrib":"Offered",
        //       "Isha":"Offered"
        // },
        // "25-04-2022":{           
        //       "Fajar":"Offered",
        //       "Dhuhr":"Offered",
        //       "Asr":"Offered",
        //       "Maghrib":"Offered",
        //       "Isha":"Offered"
        // },
        // "26-04-2022": {            
        //       "Fajar":"Offered",
        //       "Dhuhr":"Offered",
        //       "Asr":"Offered",
        //       "Maghrib":"Offered",
        //       "Isha":"Offered"
        // },
        // "27-04-2022": {          
        //       "Fajar":"Offered",
        //       "Dhuhr":"NotOffered",
        //       "Asr":"NotOffered",
        //       "Maghrib":"Offered",
        //       "Isha":"Offered"
        // },
        // "28-04-2022": {            
        //       "Fajar":"Offered",
        //       "Dhuhr":"Offered",
        //       "Asr":"Offered",
        //       "Maghrib":"Offered",
        //       "Isha":"Offered"
        // },
        // "29-04-2022":{ 
        //       "Fajar":"NotOffered",
        //       "Dhuhr":"Offered",
        //       "Asr":"NotOffered",
        //       "Maghrib":"Offered",
        //       "Isha":"Offered"
        // },
        // "30-04-2022": { 
        //         "Fajar":"NotOffered",
        //         "Dhuhr":"NotOffered",
        //         "Asr":"Offered",
        //         "Maghrib":"Offered",
        //         "Isha":"Offered"
        // },
        // "01-05-2022": { 
        //           "Fajar":"NotOffered",
        //           "Dhuhr":"NotOffered",
        //           "Asr":"Offered",
        //           "Maghrib":"Offered",
        //           "Isha":"Offered"
        //       }
        //   }