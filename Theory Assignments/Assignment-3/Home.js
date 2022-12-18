import React from 'react';
import { StyleSheet, Text, SafeAreaView ,Image, View, Pressable } from 'react-native';

export default function Home({navigation}){
return(

  <SafeAreaView style={[styles.container, containerstyle]}>
  <View> 
  <Text style={styles.box1}>    Welcome!</Text>
  </View>
 <View style={styles.box2}>
    <Image style={styles.Imagesi}
    source = {require("../assets/download.png")}>
      
    </Image>
  </View>
  <View style={styles.box3}> 
    <Pressable
      onPress={()=>
      navigation.navigate("Signin")}>
    
  <Text style={styles.box3}>SIGN UP</Text>
  </Pressable>
  </View>
  <View>
    <Text style={{color:'white',textAlign:'start'}}>
    Already have Account!
    </Text>
  </View>
  <View style={styles.box3}> 
    <Pressable
      onPress={()=>
      navigation.navigate("Signin")}>
    
  <Text style={styles.box4}>SIGN IN</Text>
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
    color:'black',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    fontSize: 30,
    marginBottom:10

  },
  box2:{
    marginBottom:60,
    width:50,
    height:50
  },
  box3:{
    alignItems:'center',
    justifyContent:'center',
    width: 200 , 
    height:35,
    
    marginBottom:20,
    color:'white',
    backgroundColor:"black",
    textAlign:'center',
    fontSize: 20,
  },
  Imagesi:{
    marginBottom:70,
    width:80,
    height:75
  },
  box4:{
    color:'white',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    fontSize: 20,
    marginBottom:20,
  }
}
    )