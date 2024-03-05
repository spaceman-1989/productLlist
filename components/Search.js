import { View,  TextInput ,StyleSheet} from 'react-native'
import React from 'react'


export default function Search() {
  return (
    <View style={styles.searchView}>
     <TextInput  placeholderTextColor="grey" style={styles.searchInput}  placeholder='Ara...'></TextInput>
    </View>
  )
}


const styles = StyleSheet.create({
  searchView:{
   backgroundColor:"#e5e9f0",
   borderRadius:20,
   margin:10,
   color:"black",
},
searchInput:{
  padding:15,
  fontSize:18,
 
 
  
}


}) 

