import React from 'react';
import { StyleSheet, Text, SafeAreaView ,Image, View } from 'react-native';

export default function App(){
return(

  <SafeAreaView style={[styles.container, containerstyle]}>
  <View> 
  <Text style={styles.box1}>Sign in with</Text>
 
  </View>
  <View style={styles.box2}>
    <Image style={styles.Imagesi}
    source = {require("./assets/twitter.png")}>
      
    </Image>
  </View>
  <View> 
  <Text style={styles.box3}>_________________   or   ________________</Text>
  
  </View>
  <View> 
  <Text style={styles.box4}>Email</Text>
  </View>
  <View> 
  <Text style={styles.box4}>Password</Text>
  </View>
  <View> 
  <Text style={styles.box5}>Log In</Text>
  </View>
  <View> 
  <Text style={styles.box3}>_____________________________________</Text>
  
  </View>
  <View> 
  <Text style={styles.box5}><span style={{color: 'white'}}>Forgot?</span>    |   <span style={{color: 'white'}}>Create</span></Text>
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
    color:'white',
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
}
    )