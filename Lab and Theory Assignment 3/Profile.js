import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ navigation }) {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    useEffect(() => {
     getinfo();
      }
    , []);
    const getinfo = () => {
        try {
            AsyncStorage.getItem("name").then((value) => {
                if (value != null) {
                    setName(value);
                }
            })
            AsyncStorage.getItem("email").then((value) => {
                if (value != null) {
                    setEmail(value);
                }
            })

        }
        catch (error) {
            console.log(error);
        }

    }
    return (

        <SafeAreaView style={[styles.container, containerstyle]}>
            <View>
                <Text style={styles.box1}> Profile!</Text>
            </View>
            <View style={styles.box2}>
                <Image style={styles.Imagesi}
                    source={require("../assets/download.png")}>
                </Image>
            </View>
            <View>
                <Text style={styles.box1}>{Name}</Text>
            </View>
            <View>
                <Text style={styles.box1}>{Email}</Text>
            </View>
            <View style={styles.box5}> 
    <Pressable
      onPress={()=>
      navigation.navigate("Home")}>
    
  <Text style={styles.box5}>SIGN OUT</Text>
  </Pressable>
  </View>

        </SafeAreaView>
    );
}
const containerstyle = { backgroundColor: 'red' }
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,

            justifyContent: 'center',
            alignItems: 'center',
        },

        box1: {
            color: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: 30,
            marginBottom: 10

        },
        box2: {
            marginBottom: 60,
            width: 50,
            height: 50
        },
        box3: {
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            height: 35,

            marginBottom: 20,
            color: 'white',
            backgroundColor: "black",
            textAlign: 'center',
            fontSize: 20,
        },
        Imagesi: {
            marginBottom: 70,
            width: 80,
            height: 75
        },
        box4: {
            color: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            fontSize: 20,
            marginBottom: 20,
        },
        box5:{
            marginTop:10,
            justifyContent:'center',
            width: 200 , 
            height:35,
            
            
            color:'red',
            backgroundColor:"black",
            textAlign:'center',
            fontSize: 18,
          },
    }
)