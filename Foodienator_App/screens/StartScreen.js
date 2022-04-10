import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native';
import React from 'react';

export default function StartScreen() {
  return (
      <>
      <SafeAreaView style={styles.maincontainer}>
          <View style={styles.imagesContainer}>
              <Image style={styles.image1} source={require('../assets/images/StartScreen/Ellipse1.png')} />
              <Image style={styles.image2} source={require('../assets/images/StartScreen/Ellipse2.png')} />
              <Image style={styles.image4} source={require('../assets/images/StartScreen/Ellipse4.png')} />
              <Image style={styles.image5} source={require('../assets/images/StartScreen/Ellipse5.png')} />
              <Image style={styles.image7} source={require('../assets/images/StartScreen/Ellipse7.png')} />
              <Image style={styles.image8} source={require('../assets/images/StartScreen/Ellipse7.png')} />
              <Image style={styles.imagefood} source={require('../assets/images/StartScreen/food.png')} />
          </View>

          <View style={styles.text}>
              <Text style={styles.heading}>Foodienator</Text>
              <Text style={styles.subheading}>Order your favourite Meals {'\n'}Here!</Text>

          </View>

          <View style={styles.button}>
            <Text style={styles.signin}> Sign in</Text>
            <Text style={styles.register}>Register</Text>
            
        </View>
              

        </SafeAreaView>
      
      
      </>
      
    
  )
}

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'rgb(45, 182, 163)',
        // borderRadius:25

    },
    imagesContainer:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
    },

    image1:{
        left:99,
        top:150

    },

    image2:{
        left:400,
        top:-150
        // justifyContent:'center'

    },

    image4:{
        left:80,
        top:-100

    },
    image5:{
        left:400,
        top:10

    },

    image6:{
        left:220,
        top:-100

    },
    image7:{
        left:300,
        top:100

    },
    image8:{
        left:180,
        top:140

    },
    imagefood:{
        left:90,
        top:-200
        

    },

    text:{
        flex:1,
        fontFamily:'Poppins',
        // justifyContent:'center',
        alignItems:'center'
    },

    heading:{
        top:20,
        fontSize:38,
        fontWeight:'bold',
        color:'white'
    },

    subheading:{
        // top:60,
        color:'white',
        fontSize:15,
        top:30
        


    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        bottom:150
        // marginTop:70

    },

    signin:{

        backgroundColor:'rgb(87, 175, 159)',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        paddingHorizontal:65,
        paddingVertical:20,



    },

    register:{
        backgroundColor:'#DADADA',
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        paddingHorizontal:65,
        paddingVertical:20,

    }
})