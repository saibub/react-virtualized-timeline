import React from "react";
import Data from '../data.json';

const Card = (props) => {

    //Current card data which is startingIndex of window + offset
    let cardData=Data[props.windowStartingIndex+props.offset]

    return (
        <>
            <div className={cardData.id % 2 === 0 ? 'container right' : 'container left'} key={cardData.id} id={cardData.id}>
                <div className="content">
                    <div className='heading'><h2>{cardData.title}</h2>
                        <span className='img right'><img src={cardData.image} alt="logo" /></span>
                    </div>
                    <p>{cardData.content}</p>
                </div>
            </div>
            {props.loading ? <div className="text-center">loading data ...</div> : ""}
            
        </>
    )
}

export default Card;