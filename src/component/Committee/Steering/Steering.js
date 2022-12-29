import React from 'react'
import Heading from '../../Heading'
import Data from './Data'
import Generator from '../Generator'
const Steering = () => {
  return (
    <div className='mt-5'>
     {<Heading>Steering committee</Heading>}
     <Generator data={Data}/>
    </div>
  )
}

export default Steering
