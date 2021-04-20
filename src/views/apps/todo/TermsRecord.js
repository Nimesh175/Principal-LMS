// ** React Imports
import { Fragment, useState, useEffect } from 'react'


// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'


// ** Styles
import '@styles/react/apps/app-todo.scss'
import './styles/termsRecord.css'

const TermsRecord = () => {

  // ** Store Vars
  const dispatch = useDispatch()

 
  return (
        <>

          <div className='col-12 overflow-auto bg-white p-2'>
          <div>   
             
               <div className="mb-2 rounded bg-light  p-1">
                  <div className="row"> <h6 className="col-3"> <small>Index Number </small></h6> <h6 className="col-7"> <small>35547</small></h6> </div>
                  <div className="row"> <h6 className="col-3"> <small>Student Full Name</small> </h6> <h6 className="col-7"> <small>Asitha Sampath Frenando</small></h6> </div>
                  <div className="row"> <h6 className="col-3"> <small>Parent Full Name</small> </h6> <h6 className="col-7"> <small>Hemal Frenando</small></h6> </div>
                  <div className="row"> <h6 className="col-3"> <small>Parent Contact Number</small> </h6> <h6 className="col-7"> <small>(+94) 71 5678453</small></h6> </div>

                </div>
             

               <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn myBtn btn-light">Term 01</button>
                    <button type="button" className="btn myBtn btn-light">Term 02</button>
                    <button type="button" className="btn myBtn btn-light">Term 03</button>
               </div>
               <div className="border-bottom mr-2 mb-1"></div>

              {/* table here */}

              <div  className="  myScrollContainer"> 
              <div className="container-fluid rounded myTableHead " >
                        <div className="row  myScrollContainer__table-row px-1">
                          <div class="col-2  text-white font-weight-bold" scope="col">#</div>
                          <div class="col-5 text-middle" scope="col"> <p className=" ml-1  text-white font-weight-bold">Subject</p></div>
                          <div class="col-2  px-3" scope="col"> <p className="text-middle  text-white mr-2 font-weight-bold ">Marks</p></div>
                          <div class="col-3 px-5" scope="col"> <p className=" text-white ml-2 font-weight-bold">Grade</p></div>
                        </div>
                </div>

               <div className=" table-wrapper-scroll-y my-custom-scrollbar ">

                  <table class="table table-hover myTable">
                   
                    <tbody className="">
                      <tr>
                        <th scope="row">1</th>
                        <td>Science</td>
                        <td>88</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Mathematics</td>
                        <td>92</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>English</td>
                        <td>61</td>
                        <td>C</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Sinhala</td>
                        <td>93</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>History</td>
                        <td>68</td>
                        <td>B</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>English</td>
                        <td>63</td>
                        <td>B</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>Mathematics</td>
                        <td>63</td>
                        <td>B</td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>Science</td>
                        <td>64</td>
                        <td>C</td>
                      </tr>

                      <tr>
                        <th scope="row">8</th>
                        <td>English</td>
                        <td>63</td>
                        <td>C</td>
                      </tr>

                    </tbody>
                  </table>
               </div>

              {/* lower content */}
              
               <div className="footer_container rounded  mb-5 p-1">
                  <div className="row"> <h6 className="col-5 "> <small className="font-weight-bold">Average Marks </small></h6> <h6 className="col-7"> <small className="text-dark font-italic font-weight-bold">72.56</small></h6> </div>
                  <div className="row"> <h6 className="col-5 font-weight-bold"> <small className="font-weight-bold">Total Marks</small> </h6> <h6 className="col-7"> <small className="text-success font-italic font-weight-bold">670</small></h6> </div>
                  <div className="row"> <h6 className="col-5"> <small className="font-weight-bold">Place</small> </h6> <h6 className="col-7"> <small className="text-danger font-italic font-weight-bold">03</small></h6> </div>
                </div> 
           </div>
            
             
          </div>

          </div>
    </>
  )
}

export default TermsRecord
