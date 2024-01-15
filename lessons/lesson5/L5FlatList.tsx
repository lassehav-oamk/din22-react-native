import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import countries from './countries';
import CountryItem from './CountryItem';

export default function L5FlatList() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList          
          data={countries}       
          renderItem={({ item }) => <CountryItem country={item} />}
        />
      </View>      
      <View style={{ flex: 1, backgroundColor: '#9ed8ff', padding: 30 }}>
        <Text style={{ fontWeight: '700' }}>Selected Countries</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
    padding: 16,
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%'
  },
});