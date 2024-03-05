import {  Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Logo(props) {
  return (
    
     <Text style={styles.title} >{props.text}</Text>
    
  )
}


const styles = StyleSheet.create({
    title:{
      fontSize:25,
      textTransform:"uppercase",
      fontWeight:"700",
      color:"#7608b9",
      marginTop:10,
      marginLeft:10
      
  },
 }) 
