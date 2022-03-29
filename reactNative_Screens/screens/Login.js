import { SafeAreaView, StyleSheet, Text, View,TextInput, Image } from 'react-native'
import React from 'react'

export default function Login() {
  return (

   <SafeAreaView style={styles.parentContainer}>

       <Text style={styles.heading}>Welcome Back</Text>

       <Text style={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet ultricies sagittis. Curabitur vitae tincidunt mi.Fusce at vestibulum est. Proin viverra eleifend lorem in pretium.</Text>

       <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder="Username, Email & Phone Number"   
        />

        <TextInput
        style={styles.input}
        placeholder="Password"   
      />

      <Text style={styles.text}>Forgot Password?</Text>

       <Text style={styles.signIn}> Sign in</Text>

       <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex:0.7, top:70,margin:8, height: 0.5, width:120, backgroundColor: 'black'}} />
        <View>
            <Text style={styles.option}>Or Sign up With</Text>
        </View>
        <View style={{flex:0.7,top:70,margin:8, height: 0.5, width:120, backgroundColor: 'black'}} />
        </View>

        {/* <Text style={styles.option}>Or Sign up With</Text> */}

       

       </View>

       <View style={styles.imagesContainer}>

           <View style={styles.images}>
                <Image style={styles.img} source={require('../assets/ScreenDesign/Googlelogo.png')}></Image>
            </View>
            
            <View style={styles.images}>
                <Image style={styles.img} source={require('../assets/ScreenDesign/Facbook.png')}></Image>
            </View>
            
            <View style={styles.images}>
                <Image style={styles.img} source={require('../assets/ScreenDesign/Group.png')}></Image>
            </View>

        </View>

       

   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    parentContainer:{
        flex:1,
        alignItems:'center'
    },

    heading:{
        
        marginTop:72,
        // justifyContent:'center',
        // alignItems:'center',
        // marginLeft:130,
        fontSize:35,
        fontWeight:'bold'
    },

    subheading:{
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        lineHeight:20

    },

    inputContainer:{
        width:"87%",
        height:'90%',
        top:35,
        


    },

    input:{
        borderRadius:15,
        backgroundColor:'whitesmoke',
        // shadowColor: "#000000",
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // top:20,
        margin:5,
        paddingHorizontal:15,
        paddingVertical:20,
        fontSize:15,
        color:'black'
        

    },

    text:{
        alignSelf:'flex-end',
        marginTop:15,
        fontWeight:'bold',
        fontSize:17,
        marginRight:18
    },

    signIn:{
        width:'98%',
        top:45,
        fontSize:56,
        backgroundColor:'#ee82ee',
        
        borderRadius:20,
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        // paddingHorizontal:65,
        paddingVertical:20,
        textAlign:'center'
        // paddingLeft:150
        
    },

    option:{
        top:70,
        // justifyContent:'center',
        alignSelf:'center',
        fontSize:13,
        color:'black',
        width: 90, 
        textAlign: 'center'
    },

    imagesContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },


    images:{
        // flex:1,
        // flexDirection:'row',
        width:50,
        height:50,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        bottom:450,
        // top:50,
        borderRadius:100,
        backgroundColor:'lightgrey',
        margin:8

    },

    

  

})