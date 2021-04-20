import { Fragment, useState, useEffect } from 'react'
import './styles/card.css'
import User from '../user/view'
import {Link} from 'react-router-dom'

const Card = () => {
     return (
         <div>
          <Link  className="btn  rounded m-1  shadow myStyle"  to="/apps/user/view/1">
               <div className="row">
                    <span className="myStyle__headTextContainer ">
                         <h6><small  className="  myColor myText">Teacher Name </small> </h6>
                    </span> 
                    <span className=" myStyle__headTextContainer2">
                         <h6 ><small className="text-white  text-capitalize myTextSub">Anura Gunawardana Gunawardana</small></h6>
                    </span>
               </div>
               <div className="row">
                    <span className="myStyle__headTextContainer">
                         <h6><small  className="myColor myText ">Class Name </small></h6>
                    </span> 
                    <span className="myStyle__headTextContainer2">
                         <h6><small  className=" text-white text-capitalize myTextSub">A</small></h6>
                    </span>
               </div>
               <div className="row">
                    <span className="myStyle__headTextContainer">
                         <h6 ><small className="myColor myText">Student Count </small></h6>
                    </span>
                    <span className=" myStyle__headTextContainer2">
                         <h6 ><small className="text-white  text-capitalize myTextSub">45</small></h6>
                    </span>
               </div>
          </Link>

          {/* <button type="button" className="btn btn-light mx-1  mt-1 rounded" onClick={() => alert("clicked")}>
               <div className="row m-0">
                    <span className="col-6 ">
                         <h6 className="text-right"><small>Teacher Name</small> </h6>
                    </span> 
                    <span className="col-6 ">
                         <h6 className="text-left font-weight-light"><small>Anura Gunawardana</small></h6>
                    </span>
               </div>
               <div className="row m-0">
                    <span className="col-6 ">
                         <h6 className="text-right"><small>Class Name </small></h6>
                    </span> 
                    <span className="col-6">
                         <h6 className="text-left font-weight-light"><small>A</small></h6>
                    </span>
               </div>
               <div className="row m-0">
                    <span className="col-6 ">
                         <h6 className="text-right"><small>Student Count</small></h6>
                    </span>
                    <span className="col-6 ">
                         <h6 className="text-left font-weight-light"><small>45</small></h6>
                    </span>
               </div>
          </button> */}
         </div>
     )
}

export default Card
