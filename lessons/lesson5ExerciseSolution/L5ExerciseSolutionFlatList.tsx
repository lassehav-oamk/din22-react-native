import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import countries from './countries';
import CountryItem from './CountryItem';
import { ICountry } from './ICountry';

export default function L5ExerciseSolutionFlatList() {
  
  const [selectedCountries, setSelectedCountries] = useState([]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList          
          data={countries}       
          renderItem={({ item }) => <CountryItem
            country={item} 
            isSelected={ selectedCountries.find((c: ICountry) => item.code === c.code) } 
            onCountrySelected={(country : ICountry) => {
              // check if the country is already in selectedCountries
              // if it is, remove it
              if(selectedCountries.find((c : ICountry) => country.code === c.code)) {
                setSelectedCountries(selectedCountries.filter((c : ICountry) => c.code !== country.code));
              } else {
              // if it isn't, add it
                setSelectedCountries([...selectedCountries, country])}
              }
          
            }
          />}
        />
      </View>      
      <View style={{ flex: 1, backgroundColor: '#9ed8ff', padding: 30 }}>
        <Text style={{ fontWeight: '700' }}>Selected Countries</Text>
        {
          selectedCountries.map((country : ICountry) => {
            return <Text key={country.code}>{country.name}</Text>
          })
        }
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