import React from "react";
import {BsStarFill,BsCurrencyDollar} from 'react-icons/bs'
import './note.css'

const NoteItem = ({bookDetails}) => {
    return(
        <section>
            <div className="book-container">
                <div className='bookImage'>
                </div>
                <h1>{bookDetails.name} </h1>
                <div className="d-flex">
                    <p className="rating">{bookDetails.rating}<span className="text-secondary"><BsStarFill /> </span></p>
                    <p className="price cross-text"><span><BsCurrencyDollar /> </span>{bookDetails.price}</p>
                    <p className="discount-price text-success"><span><BsCurrencyDollar /> </span>{bookDetails.discountPrice}</p>
                </div>  
            </div>
        </section>
    )
}

export default NoteItem