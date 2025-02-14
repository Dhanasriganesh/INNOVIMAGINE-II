import React from 'react';
import Pricing from '../comp/Pricing';
import Ainnov from '../comp/Ainnov';
import Portfolio from '../comp/Portfolio';
import Services from './Services';
import Contact from './Contact';
import Herosection from '../comp/Herosection';
const Home = () => {
  return (
    <div className=''>
      <div>
        <Herosection />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Ainnov />
      </div>
      {/* <div>
        <Pricing />
      </div> */}
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
