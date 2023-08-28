// 1- We first import what we need to use

import React, { useState, useEffect, useCallback } from "react";
import { View, Stylesheet, ActivityIndicator, FlatList} from "react-native";
import ProductLIst from "./ProductList";

// 3- We want to create a flatlist, and to do it we add it the import list and create a const data getting data from the json product file

const data = require ("../../assets/Data/products.json");

// 2- We create a component named Productcontainer and export to App.js

const ProductContainer = () => {


    // 4- We set the usestate
    const [products, setProducts] = useState([])

   //5- Set the useEffect to get products to get data

   useEffect(() => { 
       setProducts(data)

       return () => {
           setProducts([]) //to clean up
       }
   }, [] )//no useCallback reason why empty

    return (
        
        <View>
              <Text>Product Container</Text>
              <View style={{marginTop: 50}}>
              <FlatList
              horizontal={false}
              data={products}
              renderItem= {({item}) => <ProductLIst 
              key={item.id} 
              item={item}
              /> }
              numColumns={2}
              keyExtractor={item => item.name}
              />
              </View>
        </View>
       
    )
}

export default ProductContainer;