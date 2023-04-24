import React from 'react';
import Layout from '../../../components/layout';
import { HeroSection } from '../../../components/herosection';

export default function Contact() {
  return (
    <Layout title="Contact">
      <HeroSection title="Contact" />
      <div className="px-setting flex flex-col items-center text-center  gap-10 py-10">
        <h1 className="">Drop a Message</h1>
        <h2 className="md:w-1/2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem amet delectus inventore sapiente excepturi, similique temporibus veniam.</h2>
        <div className="w-1/2">
          <form className="space-y-4 md:space-y-6">
            <div className="form__input">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form__input">
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form__input">
              <input type="text" placeholder="Enter subject" />
            </div>
            <div className="form__input">
              <textarea placeholder="Write Message"></textarea>
            </div>
            <button className="bg-white text-black font-medium">Send a Message</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
