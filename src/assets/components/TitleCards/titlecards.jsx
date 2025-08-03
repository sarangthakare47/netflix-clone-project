import React, { useEffect, useRef } from 'react'
import './titlecards.css'
import cards_data from '../../cards/cards2/Cards_data'


const titlecards = ({title, category}) => {
  const cardsRef =useRef();

const handleWheel =(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
  cardsRef.current.addEventListener('wheel', handleWheel);
},[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((cards, index)=>{
          return <div className="card" key={index}>
            <img src={cards.image} alt="" />
            <p>{cards.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default titlecards
