import React from 'react';
import './Card.css';

const Card = (props) => {
  let url = `https://robohash.org/${props.username}?200x200`
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={url} alt="robohash" />
      <div style={{ color: props.color }}>
        <h2>{props.first} {props.last}</h2>
        <p>{props.username}</p>
      </div>
    </div>
  )
}

export default Card;
