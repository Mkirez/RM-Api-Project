import React from 'react'

const EpisodesItem = ({ item }) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='card'>
                    <div className='cardInner'>
                        <div className='cardFront'>
                            <h1>{item.name}</h1>
                                <ul>
                                    <li>
                                    <strong>Air Date:</strong> {item.air_date}
                                    </li>
                                    <li>
                                    <strong>Episode:</strong> {item.episode}
                                    </li>
                                    <li id="charachters">
                                    <strong>Charachters:</strong>{item.characters.pop()}  
                                    </li>
                                    
                                </ul>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
      )
    }
    
export default EpisodesItem
