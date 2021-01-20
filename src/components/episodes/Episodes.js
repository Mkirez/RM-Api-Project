import React,{ useState, useEffect } from 'react';
import Search from '../ui/Search'
import axios from 'axios'
import EpisodesGrid from './EpisodesGrid'
import './episodes.css'; 


const Episodes =() => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(`https://rickandmortyapi.com/api/episode`)
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
    <EpisodesGrid isLoading={isLoading} items={items}/>
    <button onClick={goToPrev} id='prbtn'>
      Prev Page
    </button>
    <button onClick={goToNext} id='nxtbtn'>
      Next Page
    </button>
  </div>
    
  )
}

export default Episodes;
