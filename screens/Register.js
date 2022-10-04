import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import logo from '../assets/logo2.png'
const { width, height } = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native'
import UserRegister from '../components/userReg'

const Register = () => {
    const navigation = useNavigation()
    return (
      <UserRegister/>
    )
}

export default Register

const styles = StyleSheet.create({
    tell: {

        textAlign: 'center',
        color: 'gray',
        paddingTop: 10
    },
    btxt: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    butt: {
        backgroundColor: 'white',
        padding: 10,
        height: 45,
        width: '100%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    cen: {
        padding: 10,
        color: 'gray',
        textAlign:'center'
    },
    label: {
        paddingLeft: 15,
        fontSize: 20,
        paddingBottom: 10,
        color: 'gray'
    },
    inp: {
        height: 50,
        backgroundColor: '#f1f1f1',
        fontSize: 18,
        paddingLeft: 15,
        borderRadius: 100,
        marginBottom: 5
    },
    loginText: {
        fontSize: 35,
        textAlign:'center',
        marginTop:50
    },
    filedbox: {
        // borderWidth:1,
        padding: 10,
        width: width - 60
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})