import React from 'react';
import enamel from '../assets/images/media/Enamel.svg';
import dentin from '../assets/images/media/Dentin.svg';
import pulp from '../assets/images/media/Pulp.svg';

const About = () => {
  return (
    <section className="w-full flex justify-center relative z-10 py-20 mt-32">
      <div className="w-11/12 text-center">
        <h2 className="font-bold text-2xl" id="about">About</h2>
        <p className="text-blue-400 mt-4 lg:w-2/3 w-full mx-auto"><span className="font-bold">Dental Caries</span>. Tooth decay, also known as dental caries, is a dental and oral health condition that can affect anyone. The symptoms include increased tooth sensitivity and pain when consuming sweet, cold, or hot foods.</p>
        <div className="flex lg:flex-row flex-col lg:gap-8 gap-0 mt-10 justify-center">
          <div className="flex justify-between items-center">
            <img src={enamel} alt="Enamel" />
          </div>
          <div className="flex justify-between items-center">
            <img src={dentin} alt="Dentin" />
          </div>
          <div className="flex justify-between items-center">
            <img src={pulp} alt="Pulp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
