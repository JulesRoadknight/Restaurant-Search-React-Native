import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'London',
        }
      });
      setResults(response.data.businesses);
    } catch(e) {
      setErrMessage('Something went wrong.');
    }
  }

  useEffect(() => {
    searchApi('Food')
  }, []) // Use effect with arrow and [] only runs once. Can add var to [] to run when var changes

  return [searchApi, results, errMessage]
};