import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { TextInput } from 'react-native'
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native'

export default function Search() {
  return (
    <>
    <SafeAreaView style={styles.screen} >
        <View style={styles.mainContainer}>
            <View style={styles.headerImages}>
                <Image style={styles.menu} source={require('../assets/images/Search/menu.png')} />
                <Image style={styles.cart} source={require('../assets/images/Search/cart.png')} />
                
            </View>

            <View style={styles.input}>
                <Image style={styles.cart} source={require('../assets/images/Search/search.png')} />
            </View>

            {/* <NavBar style={styles.navBar}>
                <NavButtonText>All</NavButtonText>
                <NavButtonText>Pizza</NavButtonText>
                <NavButtonText>Veggies</NavButtonText>
                <NavButtonText>Steaks</NavButtonText>
            </NavBar> */}

            <View style={styles.navBar}>
                <Text style={[styles.text, styles.all]} >All</Text>
                <Text style={styles.text}>Pizza</Text>
                <Text style={styles.text}>Veggies</Text>
                <Text style={styles.text}>Steaks</Text>

            </View>
        </View>

        <View style={styles.body}>

            <View style={styles.items}>

                <View style={styles.content}>

                    <View style={styles.data}>
                        <Text style={styles.heading}>Grilled Beef</Text>
                        <Text style={styles.para}>Spicy grilled beef with {'\n'} special seasoning</Text>
                        <Text style={styles.price}>$4000.00</Text>
                    </View>

                    <Image style={styles.grill} source={require('../assets/images/Search/grilledBeef.jpg')} />
                    <Image style={styles.fav} source={require('../assets/images/Search/favourite.png')} />

                </View>

                <View style={styles.content}>

                    <View style={styles.data}>
                        <Text style={styles.heading}>Meat Balls</Text>
                        <Text style={styles.para}>Flavoured meatballs  {'\n'} with vegetables</Text>
                        <Text style={styles.price}>$4000.00</Text>
                    </View>
                    
                    <Image style={styles.grill} source={require('../assets/images/Search/meatballs.jpg')} />
                    <Image style={styles.fav} source={require('../assets/images/Search/love.png')} />
                    
                </View>

                <View style={styles.content}>

                    <View style={styles.data}>
                        <Text style={styles.heading}>Steak</Text>
                        <Text style={styles.para}>Barbeques Steak with {'\n'}lettuce and cheese</Text>
                        <Text style={styles.price}>$4000.00</Text>
                    </View>

                    <Image style={styles.grill} source={require('../assets/images/Search/steak.jpg')} />
                    <Image style={styles.fav} source={require('../assets/images/Search/love.png')} />
                    
                </View>          

            </View>

        </View>

    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:2,
        backgroundColor:'rgb(45, 182, 163)',

    },
    mainContainer:{
        flex:0.5,
        backgroundColor:'rgb(45, 182, 163)',
    },

    headerImages:{
        top:45,
        flexDirection:'row',
        justifyContent:'space-between',
    },

    menu:{
        height:30,
        width:30,
        left:23
    },

    cart:{
        right:23,
        top:7
    },

    input:{
        // flex:1,
        top:60,
        left:85,
        // width:'90%'
    },

    navBar:{

        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        top:100,
        
    },

    text:{
        fontSize:18,
        color:'#A75A39'

    },

    all:{
        borderWidth: 1,
        borderColor: "#FFF9F3",
        backgroundColor:'white',
        borderRadius: 20,
        padding:5,

    },

    body:{
        flex:1.2,
        backgroundColor:'#D7EFE6',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
       
    },
    items:{
        // backgroundColor:'#F3F3F3'
    },
    content:{

        backgroundColor:'#F3F3F3',
        flexDirection:'row',
        // justifyContent:'center',
        // alignItems:'center',
        padding:40,
        borderRadius:20,
        top:-20,
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        // lineHeight:10,
        margin:8,
        borderBottomWidth: 0.1,
        borderColor: '#000',
    },

    data:{
        paddingLeft:-25,
        marginLeft:-10
    },

    heading:{
        top:-10,
        fontSize:20,
        fontWeight:'bold',
        lineHeight:40


    },

    para:{
        color:'grey',
        lineHeight:20

    },
    price:{
        color:'rgb(45, 182, 163)',
        fontWeight:'bold',
        lineHeight:40

    },

    grill:{
        height:110,
        width:180
    },
    fav:{
        height:40,
        width:40,
        top:-30,
        right:-10
    }

})