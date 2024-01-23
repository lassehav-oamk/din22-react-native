import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { ICountry } from './ICountry'



interface ICountryItemProps {
  country: ICountry  
  isSelected: boolean
  onCountrySelected: (country: ICountry) => void
}

export default function CountryItem(props : ICountryItemProps) {  
  const { country, onCountrySelected, isSelected} = props;

  let itemBackgroundColor = isSelected ? 'yellow' : undefined;

  return (  
    <Pressable onPress={() => onCountrySelected(country)}>
      <View style={{...styles.itemContainer, backgroundColor: itemBackgroundColor }}>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg/320px-Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png'}} style={styles.flag} />
        <Text style={styles.countryName}>{country.name}</Text>
        <Text style={styles.countryCode}>{country.code}</Text>
      </View>
    </Pressable>
  )  
}

const styles = StyleSheet.create({
    itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  flag: {
    width: 32,
    height: 24,
    marginRight: 8,
  },
  countryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  countryCode: {
    fontSize: 16,
    marginLeft: 8,
  },
})