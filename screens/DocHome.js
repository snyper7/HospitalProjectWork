import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState,useRef} from 'react'
import Config from '../Config'
import io from 'socket.io-client'
import { FontAwesome } from '@expo/vector-icons';

const DocHome = () => {


  const socketRef = useRef()
  const [details,setDetails] = useState('')


  useEffect(()=>{

    socketRef.current = io(Config.serverURL)

    socketRef.current.emit('fetch-doc','text')
    socketRef.current.on('fetch-doc',(data)=>{
        console.log('doctors data:',data)
        setDetails(data)
    })
    


  },[])



  return (
    <View>
      <Text style={styles.welcome}>Doctors</Text>
          {details && details.map((item,i)=>(
            <View style={styles.div} key={i}>
               <FontAwesome  name="user-circle-o" size={40} color="black" />
               <View style={styles.shift}>
               <Text style={styles.name}>{item.lname} {item.fname}</Text>
               <Text>{item.specialty} </Text>
               <Text>{item.dob}</Text>
               </View>
            </View>
          ))}
    </View>
  )
}

export default DocHome

const styles = StyleSheet.create({
  name:{
    fontSize:20
  },
  shift:{
    marginLeft:20
  },
  div:{
    borderWidth:1,
    flexDirection:'row',
    marginTop:10,
    width:'90%',
    alignSelf:'center',
    padding:10,
    borderRadius:10
  },
    welcome:{
        fontSize:30,
        marginTop:50,
        marginLeft:30
    }
})