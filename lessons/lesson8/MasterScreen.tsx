import { StyleSheet, Text, Touchable, View, TouchableHighlight, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import MasterItem from './MasterItem'

export default function MasterScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const responseData = await response.json();
    setProducts(responseData.products);    
  }

  useEffect(() => {
    getProducts();
  }, [])
  

  return (
    <View style={ styles.screen }>   
      <ScrollView>
      {
        products.map((product) => {
          return <TouchableHighlight onPress={() => {
            navigation.navigate('DetailScreen', { product })
          }}>
            <MasterItem key={product.id} name={product.title} price={product.price} />
          </TouchableHighlight>
        })
      }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {    
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#DDDDDD',
    width: '100%',
    height: '100%',
  }
})