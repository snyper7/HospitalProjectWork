import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserHome = () => {
  return (
    <View>
      <Text style={styles.welcome}>Welcome User</Text>
    </View>
  )
}

export default UserHome

const styles = StyleSheet.create({
    welcome:{
        fontSize:30,
        marginTop:50,
        marginLeft:30
    }
})