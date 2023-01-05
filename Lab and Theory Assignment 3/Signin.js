import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView ,Image, View,Pressable,TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signin({navigation}){
    const[name,setname]=useState('');
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const click=async()=>{
        await AsyncStorage.setItem("name",name);
        await AsyncStorage.setItem("email",email);
        navigation.navigate("Profile")
    }
return(

  <SafeAreaView style={[styles.container, containerstyle]}>
  <View> 
  <Text style={styles.box1}>SIGN IN</Text>
 </View>
 <View style={styles.box2}>
    <Image style={styles.Imagesi}
    source = {require("../assets/download.png")}>
      
    </Image>
  </View>
 
  <View> 
  <Text style={styles.box3}>______________________________________</Text>
  
  </View>
  <View> 
  <TextInput style={styles.box4} placeholder='Name' onChangeText={(name=>setname(name))} value={name}></TextInput>
  </View>
  <View> 
  <TextInput style={styles.box4} placeholder='Email' onChangeText={(email=>setemail(email))} value={email}></TextInput>
  </View>
  <View> 
  <TextInput style={styles.box4} placeholder='Password' onChangeText={(password=>setpassword(password))} value={password}></TextInput>  </View>
  <View> 
  <Pressable onPress={click}>
    <Text style={styles.box6}>SIGN IN</Text>
  </Pressable>
  </View>
  <View> 
  <Text style={styles.box3}>_____________________________________</Text>
  </View>
  <View>
    <Text style={{color:'white'}}>
      "Register Now"
    </Text>
  </View>
  <View style={styles.box6}> 
    <Pressable
      
      onPress={()=>
      navigation.navigate("Signup")}>
    
  <Text style={styles.box5}>SIGN UP</Text>
  </Pressable>
  </View>
  </SafeAreaView>
);
}
const containerstyle={backgroundColor:'red'}
const styles=StyleSheet.create(
  {
    container:{
      flex:1,
    
    justifyContent:'center',
    alignItems:'center',
  },
  
  box1:{  
    color:'Black',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    fontSize: 40,
    marginBottom:10

  },
  box2:{
    marginBottom:10,
    width:50,
    height:50
  },
  box3:{
    color: 'white',
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    fontSize: 13,
    
  },
  box4:{
    marginTop:40,
    
    width: 200 , 
    height:35,
    
    
    color:'red',
    backgroundColor:"white",
    textAlign:'start',
    fontSize: 18,
  },
  Imagesi:{
    marginBottom:70,
    width:80,
    height:75
  },
  box5:{
    color:'white',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    fontSize: 20,
    
  },
  box6:{
    marginTop:10,
    justifyContent:'center',
    width: 200 , 
    height:35,
    
    
    color:'white',
    backgroundColor:"black",
    textAlign:'center',
    fontSize: 18,
  }
}
    )
