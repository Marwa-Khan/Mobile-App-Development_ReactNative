import { StyleSheet, Text, View } from 'react-native'
import {React,useState} from 'react';
import { SafeAreaView,  FlatList,   StatusBar,Switch,ImageBackground } from 'react-native';
import { Image } from 'react-native';
// import { TouchableOpacity } from 'react-native';



const DATA = [
    {
      id: '1',
      title: 'Fajar',
      URL:require("../images/Fajr.png")
    },
    {
      id: '2',
      title: 'Zohar',
      URL:require("../images/Dhuhr.png")
    },
    {
        id: '3',
        title: 'Asar',
        URL:require("../images/asar.png")
      },
      {
        id: '4',
        title: 'Maghrib',
        URL:require("../images/maghrib.png")
      },
      {
        id: '5',
        title: 'Isha',
        URL:require("../images/isha.png")
      },
      {
         text:"Fasting" ,
        id: '6',
        title: 'Ramadan',
        URL:require("../images/iftar.png")
      },
 
  ];
 


  const Item = ({ title, URL }) => {
    
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return(
      <>
      <View style={styles.item}>
      <Image style={styles.imgs} source={URL} />
        <View style={{flexDirection:"row",flex:2,alignItems:"center"}}>
        
      <Text style={styles.title}>{title}</Text>  
        
      </View>
      <View style={{flexDirection:"row", justifyContent:"flex-end",alignItems:"center",flex:1}}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      
      />    
      </View>
    </View>
      </>
  );
  }
export default function Prayer() {
  
    const renderItem = ({ item }) => (
        <Item title={item.title} URL={item.URL} />
      );
  
  return (
    <SafeAreaView style={styles.container}>
     
        <Text style={styles.heading}>PRAYERS</Text>
      <FlatList style={styles.list}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        top:"3%",
        flex: 1,
      },
      item1:{
        
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
      }
      ,
      item: {
          flex:2,
        backgroundColor: 'lightblue',
        opacity:.9,
        padding: 7,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:'row',
        fontSize:10,
        borderRadius:30
      },
      title: {
        fontSize: 32,
        margin:9,
        fontSize:25,
        color:"white",
        opacity:1
      },
      heading:{
        left:20,
        padding:5,
        fontSize:25,
        textAlign:"center",
        color:"white",
        fontWeight:"bold",
        letterSpacing:6
        
      },
      imgs:{
          height:45,
          width:45,
          margin:9,
      },
     

})