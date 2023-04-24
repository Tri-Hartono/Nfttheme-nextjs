import React, { useState } from 'react';
import Layout from '../../../components/layout';
import { HeroSection } from '../../../components/herosection';
import { CardDetailNft } from '../../../components/card';
import { NFT__DATA } from '../../../assets/data/data';
import { StaticImageData } from 'next/image';

interface TypeData {
  id?: number;
  title: string;
  imgUrl: string | StaticImageData;
  creator: string;
  creatorImg: string | StaticImageData;
  currentBid: number;
}

export default function Market() {
  const [data, setData] = useState(NFT__DATA);

  const HandleSort = (e: any) => {
    const filterValue = e.target.value;
    if (filterValue === 'all') {
      const filterData = NFT__DATA.filter((item) => item.currentBid > 0);
      setData(filterData);
    }
    if (filterValue === 'high') {
      const filterData = NFT__DATA.filter((item) => item.currentBid >= 6);
      setData(filterData);
    }
    if (filterValue === 'mid') {
      const filterData = NFT__DATA.filter((item) => item.currentBid >= 5.5 && item.currentBid < 6);
      setData(filterData);
    }
    if (filterValue === 'low') {
      const filterData = NFT__DATA.filter((item) => item.currentBid >= 4.89 && item.currentBid < 5.5);
      setData(filterData);
    }
  };

  return (
    <Layout>
      <HeroSection title="Market" />
      <div className="py-10 px-setting space-y-10">
        <div className="flex justify-between ">
          <div className="space-x-2 md:space-x-4">
            <select>
              <option>Categories</option>
              <option value="art">Art</option>
              <option value="music">Music</option>
              <option value="domain-name">Domain Name</option>
              <option value="virtual-word">Virtual World</option>
              <option value="trending-card">Trending Cards</option>
            </select>
            <select>
              <option>Items</option>
              <option value="single-item">Single Item</option>
              <option value="bundle">Bundle</option>
            </select>
          </div>
          <div>
            <select onChange={HandleSort}>
              <option value="all">All Rate</option>
              <option value="high">High Rate</option>
              <option value="mid">Mid Rate</option>
              <option value="low">Low Rate</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <CardDetailNft key={index} id={item.id} imgUrl={item.imgUrl} creatorImg={item.creatorImg} title={item.title} currentBid={item.currentBid} creator={item.creator} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
