import React from 'react'
import Heading from '../../Heading'
import Data from './Data'
import Generator from '../Generator'
const Cochair = () => {
  return (
    <div className='mt-5' >
    <Heading>Co-Chair Committee</Heading>
    <Generator data={Data}/>
   </div>
  )
}

export default Cochair
