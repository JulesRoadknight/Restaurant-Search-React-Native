import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  };

  console.log(results);

  return(
    // Alt to <View> with flex: 1, still wraps, but doesn't style anything
    <>
      <SearchBar
        autoCapitalize="none"
        autoCorrect={false}
        term={term}
        // onTermChange={(newTerm) => setTerm(newTerm)} // Long form, can be shortened per below
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errMessage ? <Text>{errMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('£')}
          title='Cost Effective'
        />
        <ResultsList
          results={filterResultsByPrice('££')}
          title='Bit Pricier'
        />
        <ResultsList
          results={filterResultsByPrice('£££')}
          title='Big Spender'
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;