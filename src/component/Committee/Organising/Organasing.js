import React from 'react'
import Heading from '../../Heading'
import Data from './Data'
import Generator from '../Generator'
const Organasing = () => {
  return (
    <div className='mt-5'>
     {<Heading>Organising committee</Heading>}
     <Generator data={Data}/>
  
    </div>
  )
}

export default Organasing
