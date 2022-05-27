import { StyleSheet, Dimensions, Alert } from 'react-native';
import {React,useState,useEffect} from 'react';
import { BarChart,Grid,StackedBarChart } from 'react-native-chart-kit';
import { TopTabBar,createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DataRange from './Components/reports/DataRange';
// import { Provider,Appbar} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Data from './Components/jasonfile/Report.json'




 
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
            data: chartData
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
        },
        propsForBackgroundLines: {
          stroke: "#fff",
        },
        propsForLabels: {
          
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





export default function Report() {
  const[chartData,setChartData]=useState([]);
  let Cdata=[4, 5, 2, 3, 5];
    asyncdata=async()=>{
    try {
    await AsyncStorage.setItem("@GraphData",JSON.stringify(Cdata))
    // console.log(parse.JSON(await AsyncStorage.getItem("@GraphData")));
    } catch (error) {
    Alert.alert(error)
    }
    }

    const get=async()=>{
      try {
        // console.log(Cdata);
        let data=await AsyncStorage.getItem("@GraphData");
        // console.log(data);
        setChartData(data)
        console.log(chartData);
      } catch (error) {
        
      }
    }
  useEffect(() => {
asyncdata();
get();
}, [100]);
  return (
    <>  
     <Tab.Navigator 
     screenOptions={{
       tabBarLabelStyle: { fontSize: 14,fontWeight:"bold",color:"white" },
      tabBarStyle: { backgroundColor: 'black',borderRadius:50, }
     }}>
      <Tab.Screen name="Last7Days" component={LastSevenDaysData} />
      <Tab.Screen name="MonthlyData" component={MonthlyData}  />
      <Tab.Screen name="DateRange" component={DataRange} />
    </Tab.Navigator>
    
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    top:20,
    backgroundColor:"#fff"
  }
})