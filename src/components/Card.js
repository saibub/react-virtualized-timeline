import React from "react";
import Data from '../data.json';

const Card = (props) => {
    return (
        <>
            <div className={Data[props.page+props.offset].id % 2 === 0 ? 'container right' : 'container left'} key={Data[props.page+props.offset].id} >
                <div className="content">
                    <div className='heading'><h2>{Data[props.page+props.offset].title}</h2>
                        <span className='img right'><img src={Data[props.page+props.offset].image} alt="logo" /></span>
                    </div>
                    <p>{Data[props.page+props.offset].content}</p>

                </div>
            </div>
            {props.loading ? <div className="text-center">loading data ...</div> : ""}
            
        </>
    )
}

export default Card;