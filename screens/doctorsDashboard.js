import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React,{useContext} from 'react'
import {appState} from '../state'
import { FontAwesome } from '@expo/vector-icons';

const DoctorsDashboard = (prop) => {

    const {doctor,setDoctor} = useContext(appState)

    console.log('for=>',doctor)

  return (
    <SafeAreaView>
       <View style={styles.profile}>
       <FontAwesome  name="user-circle-o" size={80} color="black" />
       </View>
       <Text style={styles.name}>{doctor && doctor[0].fname}  {doctor[0].lname}</Text>
       <Text style={styles.email}>{doctor && doctor[0].email} </Text>

    </SafeAreaView>
  )
}

export default DoctorsDashboard

const styles = StyleSheet.create({
    email:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:5,
        color:'blue'
    },
    name:{
        fontSize:35,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:5
    },
    profile:{
        alignSelf:'center',
        marginTop:40
    },
})