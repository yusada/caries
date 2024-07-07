// src/components/Detection.jsx
import React from 'react';
import tooth from '../assets/images/media/tooth.svg';
import enamel from '../assets/images/media/Enamel.svg';
import mailIcon from '../assets/images/media/mail.svg';
import phoneIcon from '../assets/images/media/phone.svg';

const Detection = () => {
  return (
    <div>
      <section className="w-full flex justify-center absolute w-full h-20 z-10 text-blue-500">
        <nav className="flex justify-center items-center w-11/12 gap-8 relative">
          <div className="absolute">
            <img src={tooth} alt="tooth" />
          </div>
          <div className="text-[24px] font-bold">
            Caries Detection
          </div>
          <div className="flex justify-end items-center grow gap-4">
            <a className="text-[16px]" href="#model">Model</a>
            <a className="text-[16px]" href="#about">About</a>
          </div>
          <div>
            <button className="border rounded-full py-2 px-7">Detect</button>
          </div>
        </nav>
      </section>
      <section className="w-full flex justify-center relative z-10 pt-36">
        <div className="w-11/12 flex lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-[24px] text-blue-500 font-bold text-center">Input Gambar</h1>
            <form className="mt-10 flex justify-center items-center">
              <input type="file" name="file" id="file" />
              <button className="text-white bg-blue-500 border rounded-full py-2 px-7">Upload</button>
            </form>
          </div>
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            <h1 className="text-[24px] text-blue-500 font-bold text-center">Classification Result</h1>
            <img src={enamel} alt="Enamel" className="mt-10" />
            <div className="flex gap-2">
              <p className="text-blue-500">Enamel</p>
              <p className="text-blue-500">Dentin</p>
              <p className="text-blue-500">Pulp</p>
              <p className="text-blue-500">Normal</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-ful flex justify-center py-20">
        <div className="w-10/12 flex lg:flex-row flex-col gap-5">
          <div className="lg:w-1/3 w-full">
            <h2 className="font-bold text-2xl">
              Contact Us
            </h2>
            <div className="flex items-center mt-8 gap-4">
              <img src={mailIcon} alt="icon-email" />
              <div>
                <h3 className="font-bold">Mail</h3>
                <p>example@email.com</p>
              </div>
            </div>
            <div className="flex items-center mt-4 gap-4">
              <img src={phoneIcon} alt="icon-phone" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>089547638123</p>
              </div>
            </div>
            <h2 className="font-bold text-2xl mt-12">
              Navigation
            </h2>
            <div className="flex flex-col mt-4 gap-3">
              <a className="text-blue-400" href="#model">Model</a>
              <a className="text-blue-400" href="#about">About</a>
            </div>
          </div>
          <div className="lg:w-2/3 w-full">
            <form>
              <div className="flex w-full gap-4">
                <div className="w-full">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" className="w-full border rounded-full py-2 px-4 mt-2" />
                </div>
                <div className="w-full">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" className="w-full border rounded-full py-2 px-4 mt-2" />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full border rounded-full py-2 px-4 mt-2" />
              </div>
              <div className="mt-4">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className="w-full border rounded-lg py-2 px-4 mt-2"></textarea>
              </div>
              <div className="mt-4 w-full flex justify-end">
                <button className="text-white bg-slate-900 border rounded-full py-2 px-7">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detection;
