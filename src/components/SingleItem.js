import React from 'react'
import { Link } from 'react-router-dom';

const unavailable = 'https://via.placeholder.com/300?text=Unavailable';

const SingleItem = ( { mission_name, launch_year, image, item_id}) => {
  return (
    <div className='card home-card'>
    <img className='img-thumbnail' src={image ? image : unavailable} />
    <h4 className='mission-name'>{ mission_name}</h4>
    <h5 className='launch-year'>{launch_year} </h5>
    <Link to={`/details/${item_id}`}><button className="btn btn-outline-primary">Show details</button></Link>
</div>
  )
}

export default SingleItem