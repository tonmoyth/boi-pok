import React, { useEffect, useState } from 'react';

const Cards = () => {
    const [cardData,setCardDara] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json')
        .then(res => res.json())
        .then(data => setCardDara(data))
    },[]);
    console.log(cardData);
    return (
        <div>
            <h1>this card containe</h1>
        </div>
    );
};

export default Cards;