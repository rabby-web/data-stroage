import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, [])

    return (
        <div>
            <h2>Cosmetics Section</h2>
            {
                cosmetics.map(cosmetic => 
                <Cosmetic
                 key={cosmetic.id}
                 cosmetic = {cosmetic}
                 ></Cosmetic>
                )
            }
        </div>
    );
};

export default Cosmetics;