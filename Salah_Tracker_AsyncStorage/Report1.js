import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import React from 'react';
import { Dimensions } from "react-native";
import { BarChart, PieChart, StackedBarChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native';
import { TopTabBar,createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import FusionCharts from "react-native-fusioncharts";

const Tab = createMaterialTopTabNavigator();

function LastSevenDaysData (){
  const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
      backgroundGradientFrom: "#eee",
      backgroundGradientTo: "#fff",
        backgroundGradientFromOpacity: 1,
        barPercentage: 0.7,
        height:500,
        fillShadowGradient: `rgba(1, 122, 205, 1)`,
        fillShadowGradientOpacity: 1,
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
        // fillShadowGradient: '#FF493B', 
        // fillShadowGradientOpacity: 1,
        
      
        style: {
          borderRadius: 16,
          // fontFamily: "Bogle-Regular",
        },
        propsForBackgroundLines: {
          strokeWidth: 1,
          stroke: "#e3e3e3",
          strokeDasharray: "0",
        },
        propsForLabels: {
          // fontFamily: "Bogle-Regular",
          // stroke:"yellow"
        },
      };
      
    const data = {
        labels: ["Fajar", "Zohar", "Asar", "Maghrib", "Isha"],
        datasets: [
          {
            data: [4, 5, 2, 3, 5],
            // colors:[
            //     (opacity=1)=>`#BE95FF`,
            //     (opacity=1)=>`#78A9FF`,
            //     (opacity=1)=>`#FFFFFF`,
            //     (opacity=1)=>`#7c5602`,
            //     (opacity=1)=>`#000000`,
            // ]
          }
        ]
      };
  return(
    <BarChart style={styles.container}
    // style={graphStyle}
    data={data}
    width={screenWidth}
    // showValuesOnTopOfBars={true}
    height={500}
    // withCustomBarColorFromData={true}
    // flatColor={true}
    chartConfig={chartConfig} 
  />
  );
}

function MonthlyData (){
  const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        backgroundGradientFrom: "#eee",
        backgroundGradientTo: "#fff",
        backgroundGradientFromOpacity: 1,
        barPercentage: 0.7,
        height:500,
        fillShadowGradient: `rgba(1, 122, 205, 1)`,
        fillShadowGradientOpacity: 1,
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
        
      
        style: {
          borderRadius: 16,
          // fontFamily: "Bogle-Regular",
        },
        propsForBackgroundLines: {
          strokeWidth: 1,
          stroke: "#e3e3e3",
          strokeDasharray: "0",
        },
        propsForLabels: {
          // fontFamily: "Bogle-Regular",
          // stroke:"yellow"
        },
      };
      


const data = {
    labels: ["Jan","Feb","Mar","Apr"],
    legend: ["Fajar", "Zohar","Asar","Maghrib","Isha"],
    data: [
      [15, 30, 25,35,18],
      [25, 20, 22,15,20],
      [34, 29, 29,24,15],
      [25, 39, 19,24,28],
    ],
    
    barColors: ["#dfe4ea", "#4a4d54", "#a4b0be","#afa7a7","#7c8284"]
  };

// const dataSource = {
//     chart: {
//       caption: "Split of visitors by Channels & Gender",
//       placevaluesinside: "1",
//       showvalues: "0",
//       plottooltext: "<b>$dataValue</b>  $seriesName visitors",
//       theme: "fusion"
//     },
//     categories: [
//       {
//         category: [
//           {
//             label: "Organic"
//           },
//           {
//             label: "Offline Stores"
//           },
//           {
//             label: "Email Campaigns"
//           },
//           {
//             label: "Social Events"
//           },
//           {
//             label: "Paid Channels"
//           }
//         ]
//       }
//     ],
//     dataset: [
//       {
//         seriesname: "Male",
//         data: [
//           {
//             value: "17000"
//           },
//           {
//             value: "19500"
//           },
//           {
//             value: "12500"
//           },
//           {
//             value: "14500"
//           },
//           {
//             value: "17500"
//           }
//         ]
//       },
//       {
//         seriesname: "Female",
//         data: [
//           {
//             value: "25400"
//           },
//           {
//             value: "29800"
//           },
//           {
//             value: "21800"
//           },
//           {
//             value: "19500"
//           },
//           {
//             value: "21200"
//           }
//         ]
//       }
//     ]
//   };
  return(

    <StackedBarChart
//   style={graphStyle}
  data={data}
  width={screenWidth}
  height={350}
  chartConfig={chartConfig}
  style={{
      top:10,
      left:15
  }}
/>

  );
}

function DateRange (){
  const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#fff",
        backgroundGradientFromOpacity: 1,
        barPercentage: 0.7,
        height:500,
        fillShadowGradient: `rgba(1, 122, 205, 1)`,
        fillShadowGradientOpacity: 1,
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
        
      
        style: {
          borderRadius: 16,
        },
        propsForBackgroundLines: {
          strokeWidth: 1,
          stroke: "#e3e3e3",
          strokeDasharray: "0",
        },
      };
      
    const data = {
        labels: ["Fajar", "Zohar", "Asar", "Maghrib", "Isha"],
        datasets: [
          {
            data: [4, 5, 2, 3, 5]
          }
        ]
      };
  return(
    <BarChart style={styles.container}
    // style={graphStyle}
    data={data}
    width={screenWidth}
    // showValuesOnTopOfBars={true}
    height={500}
    chartConfig={chartConfig} 
  />
  );
}


export default function Report() {
    
  return (
    <>  
    
     
     <Tab.Navigator 
     screenOptions={{
      //  tabBarPressColor:"white",
      // title:"",
       tabBarLabelStyle: { fontSize: 14,fontWeight:"bold",color:"white" },
    //    tabBarIcon: ({ color, size }) => (
    //     <ImageBackground
    //             source={require('./Components/images/dua.jpg')}
    //             style={{ width: 26, height: 26, tintColor: color }}
    //         />
    // ),
      //  tabBarStyle: { backgroundColor: 'black' },
      tabBarStyle: { backgroundColor: 'black',borderRadius:50, }
     }}>
      <Tab.Screen name="Last7Days" component={LastSevenDaysData} />
      <Tab.Screen name="MonthlyData" component={MonthlyData}  />
      <Tab.Screen name="DateRange" component={DateRange} />
    </Tab.Navigator>
    
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    top:20,
    backgroundColor:"navy"
  }
})