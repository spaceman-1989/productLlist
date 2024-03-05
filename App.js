import React from "react";


import { View, Text, SafeAreaView, StyleSheet, ScrollView, FlatList } from 'react-native'
import Logo from "./components/Logo";
import Search from "./components/Search";
import Product from "./components/Product";



const App = () => {


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Logo text="patikastore" />
        <Search />
        <Product/>
      </View>
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({
  container:{
    margin:14,  
},
}) 