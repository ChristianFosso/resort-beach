import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import featuredRoom from '../components/FeaturedRooms';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
  return (
  <React.Fragment>
    <Hero>
      <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $290">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
    <Services/>
    <FeaturedRooms/>
  </React.Fragment>
   
  )
}

