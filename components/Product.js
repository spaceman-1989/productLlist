

import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DATA from "../data.json/"


export default function Product() {

    const Item = ({ title, price, imgURL, inStock }) => (
        <TouchableOpacity style={styles.item}>
            <View style={styles.item}>

            <Image
                style={styles.image}
                source={{ uri: imgURL }}
                onError={() => console.log("Error loading image:", imgURL)}
            />

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.instock}>{`${!inStock ? "STOKTA YOK" : ""}`}</Text>


        </View>
        </TouchableOpacity>

        
    );

    return (
       
        <FlatList
            data={DATA}
            renderItem={({ item }) =>
                <Item title={item.title}
                    price={item.price}
                    inStock={item.inStock}
                    imgURL={item.imgURL}
                />}

            keyExtractor={item => item.id}
            numColumns={2}

        />


    )
    
}



const styles = StyleSheet.create({
    text: {
        color: "black",
    },
    title: {
        color: "black",
        fontWeight:"700",
    },
    
    item: {
        flex: 1,
        margin:10,
        alignItems: 'center',
        backgroundColor:"#e5e9f0",
        borderRadius:10
    },
    
    image: {
        width: 120,
        height: 150,
        marginTop:8,
        borderRadius:10
    },
    list: {
        justifyContent: "flex-start"
    },
    instock:{
        color:"red",
        fontWeight:"700",
        justifyContent: "flex-start",
    },
    price:{
        color:"grey",
        fontWeight:"700",
        justifyContent: "flex-start",
        
    }
})