import React from 'react';
import s from "./Card.module.css";

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div className={s.container}>
      <button className={s.btn} onClick={onClose}>X</button>

      <h4 className={s.title}>{name}</h4>

      <div className={s.prueba}>
      <div className={s.interior}>
      <p className={s.temp}>Máx</p>
      <p>{max}</p>
      <p className={s.temp}>Min</p>
      <p>{min}</p>
      </div>
      
      <img className={s.img}src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Img not found" />
      </div>

    </div>
  )
};