import React from 'react'
import Heading from '../../Heading'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./style.css"


{/* <>
<div className='mt-5'>
{<Heading>Advisory Committee</Heading>}
</div>

</> */}
const Advisory = () => {
  return (
    <div style={{backgroundColor:"#F8F8F8"}} >
      <div className='mt-5'>
      {<Heading>Advisory Committee</Heading>}
      </div>

    <div className="container" >
    <div className="row">
         <div className="col-12 main-table "style={{marginBottom:"3rem"}}>
             {/* <!-- heading --> */}
             <div className="row hd">
                 <div className="col-4 hd1 hdc">ADVISOR NAME</div>
                 <div className="col-4 hd2 hdc">DESCRIPTION</div>
                 <div className="col-2 hd3 hdc">CONTACT PERSON</div>
                 <div className="col-2 hd4 hdc">STATUS</div>
             </div>
             {/* <!-- end --> */}

               {/* <!-- table data type 1 01--> */}
               <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">AJAY Kr RAY</div>
                 <div className="col-4 ctd-type-1-col ctdc2">AJAY Kr RAY</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end --> */}


             {/* <!-- table data type 2 02--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">BHASKAR GUPTA</div>
                 <div className="col-4 ctd-type-1-col ctdc2">JU</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end --> */}


                          
              {/* <!-- table data type 1 03--> */}
              <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">SHIBAJI CHAKRABORTY</div>
                 <div className="col-4 ctd-type-1-col ctdc2">JU</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end --> */}
             {/* <!-- table data type 2 04--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">PARTHA PRATIM SARKAR</div>
                 <div className="col-4 ctd-type-1-col ctdc2">DETS KU</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end --> */}



                {/* <!-- table data type 1 05--> */}
                <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">SANGHAMITRA BANDYOPADHYAY</div>
                 <div className="col-4 ctd-type-1-col ctdc2">ISI</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end --> */}
             {/* <!-- table data type 2 06--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">NIKHIL RANJAN DAS</div>
                 <div className="col-4 ctd-type-1-col ctdc2">CU</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end --> */}

              {/* <!-- table data type 1 07--> */}
              <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">AMIT KONAR</div>
                 <div className="col-4 ctd-type-1-col ctdc2">JU</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end --> */}
             {/* <!-- table data type 2 08--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">SAMIT KR BANDYOPADHYAY</div>
                 <div className="col-4 ctd-type-1-col ctdc2">CU</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end --> */}
               {/* <!-- table data type 1 09--> */}
               <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">BHABANI PRASAD SINHA</div>
                 <div className="col-4 ctd-type-1-col ctdc2">ISI</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
             <!-- table data type 2 10--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">DEBOTOSH GUHA</div>
                 <div className="col-4 ctd-type-1-col ctdc2">CU</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
               <!-- table data type 1 11--> */}
               <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">PARTHA PRATIM DAS</div>
                 <div className="col-4 ctd-type-1-col ctdc2">IIT KGP</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
             <!-- table data type 2 12--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">CHANDAN KR SARKAR</div>
                 <div className="col-4 ctd-type-1-col ctdc2">JU</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
               <!-- table data type 1 13--> */}
               <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">PRASANTA KR BASU</div>
                 <div className="col-4 ctd-type-1-col ctdc2">CU</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
             <!-- table data type 2 14--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">GAUTAM CHATTOPADHYAY</div>
                 <div className="col-4 ctd-type-1-col ctdc2">NASA</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
               <!-- table data type 1 15--> */}
               <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">S P GON CHOWDHURY</div>
                 <div className="col-4 ctd-type-1-col ctdc2">JU</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
             <!-- table data type 2 16--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">SUBIR KR SAHA</div>
                 <div className="col-4 ctd-type-1-col ctdc2">IIT DELHI</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
               <!-- table data type 1 17--> */}
               <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">SHUVRA DAS</div>
                 <div className="col-4 ctd-type-1-col ctdc2">Univ.of Detroit,Mercy</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
             <!-- table data type 2 18--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">RANJAN MULLICK</div>
                 <div className="col-4 ctd-type-1-col ctdc2">IIT DELHI</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
               <!-- table data type 1 19--> */}
               <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">SANJAY BADYAPADHYAY</div>
                 <div className="col-4 ctd-type-1-col ctdc2">Texas Austin</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
             <!-- table data type 2 20--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">CHAITALI CHAKRABORTI</div>
                 <div className="col-4 ctd-type-1-col ctdc2">Arizona State Univ</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
               <!-- table data type 1 21--> */}
               <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">SUBHASHIS CHAKRABORTY</div>
                 <div className="col-4 ctd-type-1-col ctdc2">IIT BOMBAY</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
             <!-- table data type 2 22--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">PALLAB BHATTACHARYA</div>
                 <div className="col-4 ctd-type-1-col ctdc2">Univ of Michigan</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
               <!-- table data type 1 23--> */}
               <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">ANUPAM BASU</div>
                 <div className="col-4 ctd-type-1-col ctdc2">IIT KGP</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
             <!-- table data type 2 24--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">JAYANTA  MUKHERJEE</div>
                 <div className="col-4 ctd-type-1-col ctdc2">IIT KGP</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
               <!-- table data type 1 25--> */}
               <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">PRABIR KR BISWAS</div>
                 <div className="col-4 ctd-type-1-col ctdc2">IIT KGP</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
             <!-- table data type 2 26--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">SOUMITRA BANERJEE</div>
                 <div className="col-4 ctd-type-1-col ctdc2">IISER</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
               <!-- table data type 1 27--> */}
               <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">Dr ROB ROY</div>
                 <div className="col-4 ctd-type-1-col ctdc2">Executive Vice President,TEOCO,Fairfax,Virginia,USA</div>
                 <div className="col-2 ctd-type-1-col ctdc3"></div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
             <!-- table data type 2 28--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">Prof. BMA Rahman, </div>
                 <div className="col-4 ctd-type-1-col ctdc2">City, University of London, UK.</div>
                 <div className="col-2 ctd-type-1-col ctdc3">Prof NRD</div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
               <!-- table data type 1 29--> */}
               <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">Prof. Asim K. Ray,</div>
                 <div className="col-4 ctd-type-1-col ctdc2">UK</div>
                 <div className="col-2 ctd-type-1-col ctdc3">Prof NRD</div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
             <!-- table data type 2 30--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">Prof. Narottam Das, </div>
                 <div className="col-4 ctd-type-1-col ctdc2">Curtin University, Australia</div>
                 <div className="col-2 ctd-type-1-col ctdc3">Prof NRD</div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
               <!-- table data type 1 31--> */}
               <div className="row ctd-type-1">
                 <div className="col-4 ctd-type-1-col ctdc1">Prof. M. J. Deen, </div>
                 <div className="col-4 ctd-type-1-col ctdc2">McMaster University, Canada</div>
                 <div className="col-2 ctd-type-1-col ctdc3">Prof NRD</div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
             {/* <!-- end -->
             <!-- table data type 2 32--> */}
             <div className="row ctd-type-1 ctd-type-2">
                 <div className="col-4 ctd-type-1-col ctdc1">Prof. Gautam Chakraborty</div>
                 <div className="col-4 ctd-type-1-col ctdc2">Iwate Prefectural University, Japan</div>
                 <div className="col-2 ctd-type-1-col ctdc3">Prof NRD</div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>


               
             {/* <!-- end -->
               <!-- table data type 1 33--> */}
               <div className="row ctd-type-1 " style={{borderBottomLeftRadius: "7px",
             borderBottomRightRadius: "7px", overflow: "hidden",}}>
         
                 <div className="col-4 ctd-type-1-col ctdc1">Prof. Basabi Chakraborty</div>
                 <div className="col-4 ctd-type-1-col ctdc2">Iwate Prefectural University, Japan</div>
                 <div className="col-2 ctd-type-1-col ctdc3">Prof NRD</div>
                 <div className="col-2 ctd-type-1-col ctdc4"></div>
             </div>
            
            
     
            {/* <!-- end ......................................................--> */}
 
         </div>
      </div>
     </div>
     </div>
  )
}

export default Advisory
