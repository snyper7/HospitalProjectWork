import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView ,ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/logo2.png'
const { width, height } = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native'
import RNPickerSelect from 'react-native-picker-select';
import Config from '../Config'
import { Base64 } from 'js-base64'

const DocRegister = () => {
    const navigation = useNavigation()

    const [fname, setfname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [hos, setHos] = useState('');
    const [password, setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [specialty,setSpecialty] = useState('');
   

    const RegisterDoc = async () => {
        setLoading(true)
        const data = {
            fname:fname ,
            lname:lname,
            email: email,
            phone: phone,
            specialty:specialty,
            dob: hos,
            password: password,
            type:'doc'
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
            console.log('Doctors registered  successfully')
            setLoading(false)
            navigation.navigate('Login')
        }).catch((error) => {
            console.log(error)
        })

    }


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <Text style={styles.loginText}>Doctors</Text>
                <Text style={styles.cen}>Kindly enter your Details below.</Text>
                <View style={styles.filedbox}>
                   <Text style={styles.label}>Specialty : {specialty}</Text>
                    <View style={{paddingLeft:20,
                        borderWidth:1,padding:15,borderRadius:50,
                        marginBottom:10
                        }}>
                        <RNPickerSelect
                        onValueChange={(value) => setSpecialty(value)}
                        items={[
                            { label: 'Football', value: 'football' },
                            { label: 'Baseball', value: 'baseball' },
                            { label: 'Hockey', value: 'hockey' },
                        ]}
                    />
                    </View>
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
                        <Text style={styles.label}>Date Of Hospital</Text>
                        <TextInput
                            placeholder='hos'
                            style={styles.inp}
                            onChangeText={(text) => setHos(text)}
                            value={hos}
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
                    <TouchableOpacity onPress={RegisterDoc} style={[styles.butt, { borderWidth: 1, borderColor: 'gray' }]}>
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

export default DocRegister

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