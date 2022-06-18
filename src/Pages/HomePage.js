import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { PAST_SPACEX_MISSIONS } from '../GraphQL/Queries'
import './HomePage.css'
import SingleItem from '../components/SingleItem'




function Home() {
    const { data } = useQuery(PAST_SPACEX_MISSIONS)
    const [ content, setContent ] = useState([])

    useEffect(() => {
     if (data){
        setContent(data.launchesPast)
     }
    }, [data])

                
        return(
            <div className='grid'>
              {
               content.map((c)  => (
                       <SingleItem mission_name={c.mission_name} launch_year={c.launch_year} image={c.links.flickr_images[0]} item_id={c.id}/>
               ))
              } 
            </div>
)
        
            
    
}

export default Home;