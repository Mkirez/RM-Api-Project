import React from 'react'
import CharacterItem from './CharachterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({items, isLoading, page}) => {
  
    return isLoading ? (
        <Spinner />
    ) : (
        <section className='cards'>
        {items.results.map((item) => (
          <CharacterItem key={item.id} item={item}></CharacterItem>
        ))}
      </section>
    )
}

export default CharacterGrid
