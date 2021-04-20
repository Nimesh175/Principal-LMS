import React from 'react'
import Card from './Card'
import './styles/cardContainer.css'


const CardContainer = ({grade }) => {
     return (
          <div>
               <h4 className="mt-1 myStyle__headText">Grade {grade}</h4>
                <div className="border-bottom mr-2 mb-1"></div>

                <div className="mb-5 container-fluid">
                 <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                 </div>

                </div>
          </div>
     )
}

export default CardContainer
