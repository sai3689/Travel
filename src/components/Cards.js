import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import pic1 from '../images/img-9.jpg';
import pic2 from '../images/img-2.jpg';
import pic3 from '../images/img-3.jpg';
import pic4 from '../images/img-4.jpg';
import pic5 from '../images/img-8.jpg';
function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={pic1}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/sign-up'
            />
            <CardItem
              src={pic2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={pic3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/sign-up'
            />
            <CardItem
              src={pic4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Risky'
              path='/sign-up'
            />
            <CardItem
              src={pic5}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
