import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView ,ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/logo2.png'
const { width, height } = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native'
import Config from '../Config'
import { Base64 } from 'js-base64'


const UserRegister = () => {
    const navigation = useNavigation()

    const [fname, setfname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('')
    const [loading,setLoading] = useState(false)




    const RegisterUser = async () => {
        setLoading(true)
        const data = {
            fname:fname ,
            lname:lname,
            email: email,
            phone: phone,
            dob:dob,
            password: password,
            type:'user'
        }
        await fetch(`${Config.serverURL}/users/add`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Basic " + Base64.encode(Config.API_AUTH.username + ":" + Config.API_AUTH.password)
            },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((jsonRes) => {
            console.log('res===?>',jsonRes)
            console.log('users registered  successfully')
            setLoading(false)
            navigation.navigate('Login')
        }).catch((error) => {
            console.log(error)
        })

    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <Text style={styles.loginText}>User</Text>
                <Text style={styles.cen}>Kindly enter your Details below.</Text>
                <View style={styles.filedbox}>
                    <View>
                        <Text style={styles.label}>First Name</Text>
                        <TextInput
                            placeholder='First Name'
                            style={styles.inp}
                            onChangeText={(text) => setfname(text)}
                            value={fname}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Last Name</Text>
                        <TextInput
                            placeholder='Last Name'
                            style={styles.inp}
                            onChangeText={(text) => setLname(text)}
                            value={lname}
                        />
                    </View>

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
                        <Text style={styles.label}>Telephone</Text>
                        <TextInput
                            placeholder='telephone'
                            style={styles.inp}
                            onChangeText={(text) => setPhone(text)}
                            value={phone}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Date Of Birth</Text>
                        <TextInput
                            placeholder='Dob'
                            style={styles.inp}
                            onChangeText={(text) => setDob(text)}
                            value={dob}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            placeholder='password'
                            style={styles.inp}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        />
                    </View>
                    <TouchableOpacity onPress={RegisterUser} style={[styles.butt, { borderWidth: 1, borderColor: 'gray' }]}>
                        {loading?(
                            <ActivityIndicator size={'small'} color="black"/>
                        ):(
                            <Text style={styles.btxt}>Submit</Text>
                        )}
                    </TouchableOpacity>

                    <Text style={styles.tell}>
                        Already have an accout ?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.butt, { backgroundColor: '#1363DF' }]}>
                        <Text style={[styles.btxt, { color: 'white' }]}>Login</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

export default UserRegister

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
        textAlign: 'center'
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
        textAlign: 'center',
        marginTop: 50
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