import React,{ useState, useEffect,  } from 'react';
import axios from 'axios';
import CharacterGrid from './CharacterGrid';
import Search from '../ui/Search';
import './charachters.css';



const Charachters =() => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(`https://rickandmortyapi.com/api/character`)
  const [pageNext, setPageNext] = useState()
  const [pagePrev, setPagePrev] = useState()

  async function fetchItems (){
    setIsLoading(true);
      const res = await axios.get(
        page+(page.includes('?')?'&':'?')+'name='+query);
      console.log(res.data)  
      setItems(res.data);
      setPageNext(res.data.info.next)
      setPagePrev(res.data.info.prev)
      setIsLoading(false);
     
  }

  
  useEffect(() =>{
    

    fetchItems()
    
  }, [query])



  function goToNext(){
    setPage(pageNext) 
    fetchItems()
  }

  function goToPrev(){
    setPage(pagePrev) 
    fetchItems()
  }


    
  return (

  <div className='container'>
    <Search getQuery={(q) => setQuery(q)} />
    <CharacterGrid isLoading={isLoading} items={items}/>
    <button onClick={goToPrev} id='prvbtn'>
      Prev Page
    </button>
    <button onClick={goToNext} id='nxbtn'>
      Next Page
    </button>
  </div>
    
  )
}

export default Charachters;
