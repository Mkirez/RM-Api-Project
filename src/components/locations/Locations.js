import React,{ useState, useEffect } from 'react';
import Search from '../ui/Search'
import axios from 'axios'
import LocationGrid from './LocationGrid'
import './locations.css'; 

const Locations =() => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() =>{
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/location?name=${query}`
        )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (

  <div className='container'>
    <Search getQuery={(q) => setQuery(q)} />
    <LocationGrid isLoading={isLoading} items={items}/>
  </div>
  )
}

export default Locations;
