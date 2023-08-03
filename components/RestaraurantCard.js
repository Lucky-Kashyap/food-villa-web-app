import React from 'react'
import { IMG_CDN_URL } from '../constants'

const RestaraurantCard = ({cloudinaryImageId,
      name,
        cuisines,
        area,
        lastMileTravelString,
        costForTwoString,cityState,locality,address,
        avgRating}) => {
  return (
    <div className='card'>
        <img src={IMG_CDN_URL + cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{cuisines.join(', ')}</h3>
        <h4>{area}</h4>
        <span>
            <h4>
                <i className='fa-solid fa-star'>{avgRating}</i>
            </h4>
            <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
        </span>
        <h4>{cityState}</h4>
        <h4>{locality}</h4>
        <h4>{address}</h4>
        
    </div>
  )
}

export default RestaraurantCard