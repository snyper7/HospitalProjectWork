import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/logo2.png'
const { width, height } = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native'
import Config from '../Config/index'
import { Base64 } from 'js-base64'

const Login = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading,setLoading] = useState()

    const Login = async () => {
        setLoading(true)
        const data = {
            email: email,
            password: password
        }
        await fetch(`${Config.serverURL}/users/login`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Basic " + Base64.encode(Config.API_AUTH.username + ":" + Config.API_AUTH.password)
            },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((jsonRes) => {
            console.log('data res===?>', jsonRes[0].type)
            if(jsonRes[0].type === 'doc'){
                  navigation.navigate('DocApplication',jsonRes)
            }else if (jsonRes[0].type === 'user'){
                 navigation.navigate('UserApplication')
            }else{
                console.log('details not found')
            }
            setLoading(false)
        }).catch((error) => {
            console.log(error)
        })

    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <Image source={logo} style={{ height: 100, width: 100, marginBottom: 20 }} />
            <Text style={styles.loginText}>Login</Text>
            <Text style={styles.cen}>Kindly enter your email and password below.</Text>
            <View style={styles.filedbox}>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder='Email'
                        style={styles.inp}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder='Email'
                        style={styles.inp}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </View>
                <TouchableOpacity onPress={Login} style={[styles.butt, { borderWidth: 1, borderColor: 'gray' }]}>
                    {loading ? (
                        <ActivityIndicator size={'small'} color="black" />
                    ) : (
                        <Text style={styles.btxt}>Submit</Text>
                    )}
                </TouchableOpacity>

                <Text style={styles.tell}>
                    Dont have an accout ?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={[styles.butt, { backgroundColor: '#1363DF' }]}>
                    <Text style={[styles.btxt, { color: 'white' }]}>Register</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>

    )
}

export default Login

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
        color: 'gray'
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
        fontSize: 35
    },
    filedbox: {
        // borderWidth:1,
        padding: 10,
        width: width - 60
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})