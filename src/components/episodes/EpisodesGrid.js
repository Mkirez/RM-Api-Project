import React from 'react'
import Spinner from '../ui/Spinner'
import EpisodesItem from './EpisodesItem'

const EpisodesGrid = ({items, isLoading}) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className='cards'>
        {items.results.map((item) => (
          <EpisodesItem key={item.id} item={item}></EpisodesItem>
        ))}
      </section>
    )
}

export default EpisodesGrid
