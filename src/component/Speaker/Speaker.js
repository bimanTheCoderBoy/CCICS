import React from 'react'
import Heading from '../Heading'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./Speaker.css"
import $ from "jquery"
import Data from "./Data"


const modalOpen=(e) => {
  const btnId = e.target.id;
  const speakerId = "#sp-" + btnId;
  const description = $("#des-" + btnId);
  const speaker = $(`${speakerId} .name`);



  //update modal
  const modalTitle = $(".modal .modal-title");
  const modalBody = $(".modal .modal-body")
  modalTitle.text(speaker.text());
  modalBody.text(description.text());

}


const Speaker = () => {
  return (
    <div className='mt-5 container' >
     {<Heading>our speakers</Heading>}

     {/* <!-- nav-section-end --> */}
  {/* <!-- Modal --> */}
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- modal-end --> */}

  <div style={{display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column",width:"100%"}}>

     {
     
      Data.map((e,index)=>{
       console.log(e.moreInfo)
        return(
          <div id={`sp-${index}`} className="speaker-card row ">
        <div className="col-12" style={{padding:"0 .72rem"}}>
          <div className="row upper">
            <div className="col col-lg-3">
              <img src={e.spImg} alt=""/>
            </div>
            <div className="col coll col-lg-9">
              <p className="name">{e.name}</p>
              <p className="degree">{e.degree}</p>
              <p className="designation">{e.designetion}</p>
            </div>
          </div>

          <div className="row info">
            <div className="col-12">
              <p className="more-info ">{e.details}</p>
              {/* <!-- Button trigger modal --> */}
              <button type="button" id={index} className="btn btn-secondary myButton" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={modalOpen}>
                Read more
              </button>
            </div>
          </div>
        </div>
        {/* <!-- speaker-dummy-data-modal --> */}
        <p id={`des-${index}`} className="dummy">{e.moreInfo}</p>
      </div>
        )
      })
     }

     </div>
     
     
    </div>
  )
}

export default Speaker
