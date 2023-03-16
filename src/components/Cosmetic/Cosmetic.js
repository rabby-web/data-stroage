import React from 'react';
import { addTODb, removeFromDb } from '../../utilitis/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    const addToCart = () =>{
        addTODb(id);
    }
    const removeFromCart = id =>{
        removeFromDb(id);
        console.log('remove',id)
    }

    const aTC = () => addToCart(id);


    return (
        <div className='cosmetic'>
            <h2>Buy This: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>it is id: {id}</small></p>
            <button onClick={aTC}> Add to Cart </button>
            {/* <button onClick={() => addToCart(id)}> Short System </button> */}
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};



export default Cosmetic;