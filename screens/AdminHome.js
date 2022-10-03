import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const AdminHome = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <Text style={styles.dashboard}>Dashboard</Text>
            <View style={styles.dash}>
                <View style={styles.rowbox}>
                    <View style={styles.rr}>
                        <MaterialCommunityIcons name="doctor" size={30} color="white" />
                    </View>
                    <View style={styles.rr}>
                    <Text style={styles.txt}>Doctors 34</Text>
                    </View>

                </View>
                <View style={styles.rowbox}>
                    <View style={styles.rr}>
                        <Feather name="users" size={30} color="white" />
                    </View>
                    <View style={styles.rr}>
                    <Text style={styles.txt}>Users 4</Text>
                    </View>
                </View>
                <View style={styles.rowbox}>
                    <View style={styles.rr}>
                    <FontAwesome5 name="address-book" size={30} color="white" />
                    </View>
                    <View style={styles.rr}>
                    <Text style={styles.txt}>Bookings 4</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AdminHome

const styles = StyleSheet.create({
    txt:{
        color:'white',
        textAlign:'center',
        paddingRight:30,
        fontSize:20,
        fontWeight:'bold'
    },
    rowbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        height:60,
        marginTop:10,
        backgroundColor: '#2192FF',
        padding:10,
        borderRadius:50,
        paddingLeft:20
    },
    dash: {
        // borderWidth:1,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
    },
    dashboard: {
        fontSize: 30,
        margin: 20,
        fontWeight:'bold',
        textAlign:'center'
    }
})