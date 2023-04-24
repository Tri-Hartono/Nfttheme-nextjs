import React, { useState } from 'react';
import Layout from '../../../components/layout';
import { HeroSection } from '../../../components/herosection';
import { CardDetailNft } from '../../../components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import img01 from '../../../assets/images/img-01.jpg';
import ava01 from '../../../assets/images/ava-01.png';

const Priview__Data = [
  {
    title: 'Travel Monkey Club',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.',
    imgUrl: img01,
    creator: 'Trista Francis',
    creatorImg: ava01,
    currentBid: 5.89,
  },
];

export default function Create() {
  return (
    <Layout title="Create">
      <HeroSection title="Create NFTs" />
      <div className=" px-setting flex flex-col md:flex-row gap-10 py-10">
        <div className="lg:w-1/4 space-y-4">
          <h2>Preview Item</h2>
          {Priview__Data.map((item, index) => (
            <CardDetailNft key={index} imgUrl={item.imgUrl} creatorImg={item.creatorImg} title={item.title} currentBid={item.currentBid} creator={item.creator} />
          ))}
        </div>

        <div className="lg:w-3/4 ">
          <form action="" className="space-y-4">
            <div className="form__input">
              <label htmlFor="">Upload File</label>
              <input type="file" placeholder="Browse" />
            </div>
            <div className="form__input">
              <label htmlFor="">Price</label>
              <input type="number" placeholder="Enter Price" />
            </div>
            <div className="form__input">
              <label htmlFor="">Minimun Bid</label>
              <input type="number" placeholder="Enter Minimum Bid" />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="form__input">
                <label htmlFor="">Starting Date</label>
                <input type="date" placeholder="Browse" />
              </div>
              <div className="form__input">
                <label htmlFor="">Expiration Date</label>
                <input type="date" placeholder="Browse" />
              </div>
            </div>
            <div className="form__input">
              <label htmlFor="">Title</label>
              <input type="text" placeholder="Enter Title" />
            </div>
            <div className="form__input">
              <label htmlFor="">Description</label>
              <textarea className="">Enter Description</textarea>
            </div>
          </form>
          <button className="mt-10 bg-white text-black relative">
            <FontAwesomeIcon icon={faPen} className="bg-transparent px-2 absolute text-btn-blue -top-2 -right-2  h-6" />
            Create
          </button>
        </div>
      </div>
    </Layout>
  );
}
