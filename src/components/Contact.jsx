import React from 'react';
import mailIcon from '../assets/images/media/mail.svg';
import phoneIcon from '../assets/images/media/phone.svg';

const Contact = () => {
  return (
    <section className="w-11/12 flex justify-center py-20 bg-[#ECF8FF] mx-20">
      <div className="w-10/12 flex lg:flex-row flex-col gap-5">
        <div className="lg:w-1/3 w-full">
          <h2 className="font-bold text-2xl">Contact Us</h2>
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
          <h2 className="font-bold text-2xl mt-12">Navigation</h2>
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
  );
};

export default Contact;
