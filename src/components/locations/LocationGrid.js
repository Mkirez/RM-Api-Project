import React from 'react'
import Spinner from '../ui/Spinner'
import LocationItem from './LocationItem'

const LocationGrid = ({items, isLoading}) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className='cards'>
        {items.results.map((item) => (
          <LocationItem key={item.id} item={item}></LocationItem>
        ))}
      </section>
    )
}

export default LocationGrid
