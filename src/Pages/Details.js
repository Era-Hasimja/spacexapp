import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { MISSION_SPACEX_DETAILS } from '../GraphQL/Queries'
import { useParams } from 'react-router-dom'
// import './Detials.css'
import MissionDetails from '../components/MissionDetails'




function Details() {
    const { data } = useQuery(MISSION_SPACEX_DETAILS)
    const [ content, setContent ] = useState([])
    const { id } = useParams()

    useEffect(() => {
     if (data){
        setContent(data.launchesPast)
     }
    }, [id])

                
        return(
            <div className='grid'>
                    <MissionDetails details={content}  />
             </div>
)
        
            
    
}

export default Details;