import { StyleSheet, Text, View, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'



export default function SignUp() {
  return (
    <>
    <SafeAreaView style={styles.maincontainer}>

        <View style={styles.imagesContainer}>
            <Image style={styles.image1} source={require('../assets/images/SignUp/SignUpEllipse1.png')} />
            <Image style={styles.image2} source={require('../assets/images/StartScreen/Ellipse2.png')} />
            <Image style={styles.image4} source={require('../assets/images/StartScreen/Ellipse4.png')} />
            <Image style={styles.image5} source={require('../assets/images/StartScreen/Ellipse5.png')} />
            <Image style={styles.image7} source={require('../assets/images/StartScreen/Ellipse7.png')} />
            <Image style={styles.image8} source={require('../assets/images/StartScreen/Ellipse7.png')} />
            <Image style={styles.image9} source={require('../assets/images/SignUp/login1.png')} />
        </View>

        <View style={styles.Input}>
            <TextInput style={styles.Email} placeholder="Email"></TextInput>
            <Image style={styles.imageEmail} source={require('../assets/images/SignUp/Email.png')} />
        </View>

        <View style={styles.Input}>
            <TextInput style={styles.Email} placeholder="Username" ></TextInput>
            <Image style={styles.imageEmail} source={require('../assets/images/SignUp/username.png')} />

        </View>

        <View style={styles.Input}>
            <TextInput style={styles.Email} placeholder="Password" ></TextInput>
            <Image style={styles.imageEmail} source={require('../assets/images/SignUp/lock.png')} />
            <Image style={styles.View} source={require('../assets/images/SignUp/view.png')} />

        </View>
            
        <Text style={styles.rgstrbtn}> Register</Text>

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
        flex:0.8,
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
    image9:{
        left:45,
        top:-180

    },

    Input:{
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
        padding:15,
        borderBottomWidth: 0.3,
        borderColor: '#000',
        borderRadius:20,
        // lineHeight:25
        margin:12,
        height:'8%'


        

    },

   
    Email:{
        // flex: 1
        paddingHorizontal:40,
        // paddingVertical:17,
        left:10,
        fontSize:20
        


    },
    imageEmail:{
        paddingHorizontal:10,
        position:"absolute",
        left:12,
        // width:1

    },

    View:{
        right:-220

    },

    

    rgstrbtn:{
        // justifyContent:'center',
        width:'80%',
        // top:45,
        fontSize:56,
        backgroundColor:'#DFB497',
        top:80,
        
        left:48,
        borderRadius:50,
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        // paddingHorizontal:50,
        paddingVertical:20,
        textAlign:'center',
        borderBottomWidth: 0.3,
        borderColor: '#000',
        // paddingLeft:150
    }


   
})