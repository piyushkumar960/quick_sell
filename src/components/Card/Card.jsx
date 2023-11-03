import React from 'react'
import {FaCircle} from 'react-icons/fa'
import {BsExclamationSquareFill} from 'react-icons/bs'
import './Card.css';

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="UserImage" />
                <div className="showStatus"></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey"> <BsExclamationSquareFill/> </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <FaCircle className='circle'/> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;