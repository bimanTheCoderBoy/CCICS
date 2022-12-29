import React from 'react'
import Heading from '../../Heading'
import Data from './Data'
import Generator from '../Generator'
const Patrons = () => {
  return (
    <div className='mt-5'>
    {<Heading>Patrons commitee</Heading>}
    <Generator data={Data}/>
   </div>
  )
}

export default Patrons
