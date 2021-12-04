import React from 'react';
import { Link } from 'react-router-dom';
function TripItem(props)
 {
  return (
    <>
      <li className='trips__item'>
        <Link className='trips__item__link' to={props.path}>
          <figure className='trips__item__pic-wrap' data-category={props.label}>
            <img
              className='trips__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='trips__item__info'>
            <h5 className='trips__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}
export default TripItem;
