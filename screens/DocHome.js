import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DocHome = () => {
  return (
    <View>
      <Text style={styles.welcome}>Welcome Doctor</Text>
    </View>
  )
}

export default DocHome

const styles = StyleSheet.create({
    welcome:{
        fontSize:30,
        marginTop:50,
        marginLeft:30
    }
})