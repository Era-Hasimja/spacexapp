import React from 'react'
import { gql } from '@apollo/client'

export const PAST_SPACEX_MISSIONS = gql`
query{
    launchesPast {
        mission_name
        launch_year
        id
        links {
            flickr_images
            wikipedia
        }
    }
} 
`
export const MISSION_SPACEX_DETAILS = gql`
query{
    launchesPast {
        mission_name
        id
        rocket {
          rocket_name
          rocket_type
        }
      }
}
`
