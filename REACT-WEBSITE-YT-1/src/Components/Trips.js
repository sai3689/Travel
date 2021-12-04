import React from 'react';
import './Trips.css';
import TripItem from './CardItem';
import pic1 from '../images/img-13.jpg';
import pic2 from '../images/img-14.jpg';
import pic3 from '../images/img-15.jpg';
import pic4 from '../images/img-16.jpg';
import pic5 from '../images/img-17.jpg';
import pic6 from '../images/img-18.jpg';
import pic7 from '../images/img-19.jpg';
import pic8 from '../images/img-20.jpg';
import pic9 from '../images/img-1.jpg';
import pic10 from '../images/img-10.jpg';
import pic11 from '../images/img-11.jpg';
import pic12 from '../images/img-12.jpg';
import pic13 from '../images/g-1.jpg';
import pic14 from '../images/g-2.jpg';
import pic15 from '../images/g-3.jpg';
import pic16 from '../images/g-4.jpg';
import pic17 from '../images/g-5.jpg';
import pic18 from '../images/g-6.jpg';
import pic19 from '../images/p-1.jpg';
import pic20 from '../images/p-4.jpg';
import pic21 from '../images/p-5.jpg';
import pic22 from '../images/p-6.jpg';
import pic23 from '../images/pic1.png';
import pic24 from '../images/s2.jpg';
import pic25 from '../images/s1.jpg';
import pic26 from '../images/pic4.png';
import pic27 from '../images/s6.jpg';
import pic28 from '../images/s7.jpg';
import pic29 from '../images/pic3.png';
import pic30 from '../images/pic2.png';

function Trips() {
  return (
    <div className='trips'>
      <h1>Check out these AMAGING Services!</h1>
      <div className='trips__container'>
        <div className='trips__wrapper'>
          <ul className='trips__items'>
            <TripItem
              src={pic1}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/sign-up'
            />
            <TripItem
              src={pic2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/sign-up'
            />
          </ul>
          <ul className='trips__items'>
            <TripItem
              src={pic3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/sign-up'
            />
            <TripItem
              src={pic4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Hill Station'
              path='/sign-up'
            />
          </ul>
          <ul className='trips__items'>
          <TripItem
              src={pic5}
              text='A journey of a thousand miles begins with a single step'
              label='Restaurent'
              path='/sign-up'
            />
            <TripItem
              src={pic6}
              text='Once you have tasted flight, you will forever walk the earth with your eyes turned skyward,'
              label='Flight'
              path='/sign-up'
            />
            </ul>
            <ul className='trips__items'>
          <TripItem
              src={pic7}
              text='Theres no place like the beach It s the ultimate cure for whatever your heart is in need of fun, relaxation love or reflection'
              label='Beach'
              path='/sign-up'
            />
            <TripItem
              src={pic8}
              text='‘When I seek another word for ‘music’, I never find any other word than ‘Venice.'
              label='venice'
              path='/sign-up'
            />
            </ul>
            <ul className='trips__items'>
          <TripItem
              src={pic9}
              text=' Look deep into nature, and then you will understand everything better'
              label='Mountain'
              path='/sign-up'
            />
            <TripItem
              src={pic10}
              text=' Land really is the best art'
              label='Hot Springs'
              path='/sign-up'
            />
            </ul>
            <ul className='trips__items'>
          <TripItem
              src={pic11}
              text='Everything in nature invites us constantly to be what we are'
              label='Bahamas'
              path='/sign-up'
            />
            <TripItem
              src={pic12}
              text='Traveling – it leaves you speechless, then turns you into a storyteller'
              label='Trecking'
              path='/sign-up'
            />
            </ul>
            <ul className='trips__items'>
          <TripItem
              src={pic13}
              text='Life is a journey, not a destination'
              label='View Points'
              path='/sign-up'
            />
            <TripItem
              src={pic14}
              text='Travel makes one modest. You see what a tiny place you occupy in the world'
              label='Maldives'
              path='/sign-up'
            />
            </ul>
            <ul className='trips__items'>
          <TripItem
              src={pic15}
              text='The most beautiful thing in the world is, of course, the world itself'
              label='Athens'
              path='/sign-up'
            />
            <TripItem
              src={pic16}
              text='Temple going is for the purification of the soul'
              label='Temples'
              path='/sign-up'
            />
            </ul>
            <ul className='trips__items'>
          <TripItem
              src={pic17}
              text='It is better to travel well than to arrive'
              label='Pisa Tower, Italy'
              path='/sign-up'
            />
            <TripItem
              src={pic18}
              text='Feeling stressed? There’s a beach for that'
              label='Hawai'
              path='/sign-up'
            />
            </ul>
            <ul className='trips__items'>
          <TripItem
              src={pic19}
              text='Experience the Great India'
              label='Gate Way of India, Mumbai'
              path='/sign-up'
            />
            <TripItem
              src={pic20}
              text='There is something so magical about the Eiffel Tower'
              label='Eiffel Tower'
              path='/sign-up'
            />
            </ul>
            <ul className='trips__items'>
          <TripItem
              src={pic21}
              text='Japan never considers time together as time wasted. Rather, it is time invested'
              label='chureito pagoda, Japan'
              path='/sign-up'
            />
            <TripItem
              src={pic22}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Saqqara, Egypt'
              path='/sign-up'
            />
            </ul>
            <ul className='trips__items'>
          <TripItem
              src={pic23}
              text='Iam sarah. I have travelled to Europe with my family .This trip and this website helped me to communicate to people,To locate places
              ,To know local culture,Hospitality.'
              label='sarah'
              path='/sign-up'
            />
          <TripItem
              src={pic24}
              text='MY name is diana. Iam a Youtuber. I Will travel yo many place this website helped me
              to travel to many places.'
              label='Diana'
              path='/sign-up'
            />
             </ul>
             <ul className='trips__items'>
          <TripItem
              src={pic25}
              text='My name is Anushka.I have visited many places using this websites.
              I ENTIRELY LIKED THIS WEBSITE'
              label='Anushka'
              path='/sign-up'
            />
          <TripItem
              src={pic26}
              text='Iam Richards. I have travelled many places using this website.Iam not satisfied with the care and hospitalty
              treatment except this everything is fine.'
              label='Richards'
              path='/sign-up'
            />
             </ul>
             <ul className='trips__items'>
          <TripItem
              src={pic28}
              text='My name is Rohit. Iam a Nature Lover this website helped me to explore the nature and its true colours.
              Thanks for giving this great experience.'
              label='Rohit'
              path='/sign-up'
            />
          <TripItem
              src={pic29}
              text='Iam natasha.This the best Travel Website I have ever seen.I enjoyed every moment in my Trip 
              .Thanks to this website for giving me amazing experience.'
              label='Natasha'
              path='/sign-up'
            />
             </ul>
             <ul className='trips__items'>
          <TripItem
              src={pic27}
              text='Iam vicky.Iam Very excited about the plans ,places to travel and feautures of this website.I also suggest abou this website to my friends.'
              label='Vicky'
              path='/sign-up'
            />
          <TripItem
              src={pic30}
              text='My name is Jhon watts .This Travel website helped me to travel to my favrouite places.I also very pleased with the feautures
              of this website.'
              label='Jhon watts'
              path='/sign-up'
            />
             </ul>
        </div>
      </div>
    </div>
  );
}

export default Trips;
