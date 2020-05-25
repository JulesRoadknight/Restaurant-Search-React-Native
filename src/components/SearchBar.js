import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return(
    <View style={styles.backgroundStyle}>
      <Feather
        style={styles.IconStyle}
        name='search'
      />
      <TextInput
        style={styles.InputStyle}
        placeholder='Search'
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  }, 
  InputStyle: {
    fontSize: 18,
    flex: 1,
  }, 
  IconStyle: {
    fontSize: 30,
    alignSelf: "center",
  }
  
});

export default SearchBar;