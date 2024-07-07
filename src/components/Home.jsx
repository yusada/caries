import React from 'react';
import bg from '../assets/images/media/bg.svg';
import dentist from '../assets/images/media/dentist.svg';

const Home = () => {
  return (
    <section className="w-full flex justify-center relative overflow-visible min-h-screen">
      <img className="absolute w-full h-full object-cover" src={bg} alt="bg" />
      <div className="w-11/12 flex justify-center relative items-center gap-20">
        <div className="lg:w-1/2 lg:pl-24 w-full">
          <h1 className="text-white text-4xl font-bold">Welcome <br />to Caries Detection</h1>
          <p className="text-white text-lg mt-2">by using <span className="font-bold">Deep Learning</span>, dental caries<br />can be identified the type of caries you have</p>
          <button className="text-white text-sm border rounded-full py-2 px-7 mt-5">Get Started</button>
        </div>
        <div className="w-1/2 lg:flex hidden justify-center">
          <img src={dentist} alt="dentist" />
        </div>
      </div>
    </section>
  );
};

export default Home;
