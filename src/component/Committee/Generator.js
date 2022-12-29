import React from 'react'
import "./GeneratorCss.css"
import {BsFacebook} from "react-icons/bs"
import {RxLinkedinLogo} from "react-icons/rx"
import {GrTwitter} from "react-icons/gr"
const Generator = (props) => {
   const Data=props.data;
  return (

    <div className='container Generator mb-5'>
   
      {
        Data.map((e)=>{
            return(
                <div className='itemContainer'>
                <div className='item'>
                <div className="imgContainer mb-2">
                <a href={e.personalLink}><img src="https://play-lh.googleusercontent.com/fvhPW8dpGXM42Y-6aQU8Yl25L1l_mVgeoM-n08FxAkM7umAHkNs8wcs4MA49E67a7WVt=w240-h480-rw" alt="img" /></a>
                </div>
                <h2 className="name m-0 mb-1 p-0">{e.name}</h2>
                <p className='post m-0 mb-2 p-0'>{e.post}</p>
                <p className="info m-0 mb-2 p-0">{e.detail}</p>
                <div className="social m-0 p-0">
                   <span>
                   <a href={e.twLink}>
                    <GrTwitter/>
                    </a>
                    </span>
                    <span>
                    <a href={e.lnLink}>
                    <RxLinkedinLogo/>
                    </a>
                    </span>
                    <span>
                    <a href={e.fbLink}>
                    <BsFacebook/>
                    </a>
                    </span>
                </div>
                </div>
                </div>
            )
        })
      }
    </div>

  )
}

/*
F3F4F6 //body
286*116
*/

export default Generator
