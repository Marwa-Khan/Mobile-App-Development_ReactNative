// import { registerScreen } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet,Text,View,Image } from "react-native";

"react-native";


export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.image}>
            <Image source={require('../assets/ScreenDesign/Saly-1intro-image.png')} />
    
        </View>

        <View >
           
            <Text style={styles.content}>Discover Your {'\n'} Own Dream House</Text>
            <Text style={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet ultricies sagittis. Curabitur vitae tincidunt mi. Fusce at vestibulum est. Proin viverra eleifend lorem in pretium. Duis in euismod velit, ut efficitur ante. Phasellus lorem magna, semper eget felis vitae, malesuada mattis dolor. Fusce in bibendum risus.</Text>
        
            

        </View>

        <View style={styles.button}>
            <Text style={styles.signin}> Sign in</Text>
            <Text style={styles.register}>Register</Text>
            
        </View>
        
    </SafeAreaView>

    
  )
}

const styles = StyleSheet.create({
    mainContainer:{

        flex:1
        

    },

    image:{

        marginTop:30,
        borderRadius:50,
        padding:10,
        margin:11,


        backgroundColor:"#ee82ee",

    },



    content:{
        marginTop:22,
        fontWeight:'bold',
        fontSize:35,
        justifyContent:"center",
        textAlign:"center"

        

    },

    lorem:{
        padding:19,
        lineHeight:20,
        justifyContent:'center',
        textAlign:'center',
        top:12,
        margin:4


    },

    button:{

        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:70

    },

    signin:{
        backgroundColor:'#ee82ee',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        paddingHorizontal:65,
        paddingVertical:20,



    },

    register:{
        
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        fontSize:22,
        fontWeight:'bold',
        color:'black',
        backgroundColor:'gainsboro',
        paddingHorizontal:65,
        paddingVertical:20,

    }
})