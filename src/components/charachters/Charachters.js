import React,{ useState, useEffect,  } from 'react';
import axios from 'axios';
import CharacterGrid from './CharacterGrid';
import Search from '../ui/Search';
import './charachters.css';


const Charachters =() => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  

  useEffect(() =>{
    const fetchItems = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character?name=${query}`);
      setItems(res.data);
      setIsLoading(false);
    };

    fetchItems()
  }, [query,])


    
  return (

  <div className='container'>
    <Search getQuery={(q) => setQuery(q)} />
    <CharacterGrid isLoading={isLoading} items={items}/>
  </div>
    
  )
}

export default Charachters;
