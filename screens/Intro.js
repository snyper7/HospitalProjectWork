import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Login from './Login';
import doc from '../assets/doc.jpg'
import logo from '../assets/logo.png'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')

const Intro = () => {

    const [showRealApp, setShowRealApp] = useState(false)
    const navigation = useNavigation()


    return (
        <View style={styles.container}>
            <View style={styles.titlebox}>
                <Image source={logo} style={{height:100,width:87,marginBottom:20}}/>
                <Text style={styles.title}>Your University Doctor</Text>
                <Text style={styles.title_sub}>
                    Find and book Awesome, caring and Proffessional 
                    Doctors within campus
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.butt}>
                    <Text style={styles.btxt}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={[styles.butt,{backgroundColor:'#1363DF'}]}>
                    <Text style={[styles.btxt,{color:'white'}]}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cov}>
            </View>
            <Image source={doc} style={{ height: null, width: null, flex: 1 }} />

        </View>
    )

}

export default Intro

const styles = StyleSheet.create({
    btxt:{
        fontSize:18,
        fontWeight:'bold'
    },
    butt:{
        backgroundColor:'white',
        padding:10,
        height:45,
        width:'100%',
        marginTop:15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
    },
    title_sub:{
        fontSize:18,
        color:'white'
    },
    title:{
        fontSize:30,
        paddingBottom:10,
        fontWeight:'bold',
        color:'white'
    },
    titlebox: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 60,
        marginTop: height/4,
        padding:20,
        width:width-30
    },
    cov: {
        height: height,
        width: width,
        backgroundColor: 'black',
        opacity: 0.4,
        position: 'absolute',
        zIndex: 50,
    },
    container: {
        height: height,
        width: width,
        backgroundColor: '#f1f1f1',

    },
})