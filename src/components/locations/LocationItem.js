import React from 'react'

const LocationItem = ({ item }) => {
    return (
        <div className='card'>
          <div className='cardInner'>
            <div className='cardFront'>
              <h1>{item.name}</h1>
              <ul>
                <li>
                  <strong>Type:</strong> {item.type}
                </li>
                <li>
                  <strong>Dimension:</strong> {item.dimension}
                </li>
                <li>
                Residents:
                </li>
                <li id="residents">
                {item.residents.pop()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
    
export default LocationItem
