import React from 'react';
import Link from 'next/link';
import { CardDetailNft } from '../card';
import { NFT__DATA } from '../../assets/data/data';
export default function LiveAction() {
  return (
    <div>
      <div className="flex justify-between items-center py-10">
        <h1>Live Action</h1>
        <h2>
          <Link href="/market">Explore More</Link>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {NFT__DATA.slice(0, 4).map((item, index) => (
          <CardDetailNft key={index} id={item.id} imgUrl={item.imgUrl} creatorImg={item.creatorImg} title={item.title} currentBid={item.currentBid} creator={item.creator} />
        ))}
      </div>
    </div>
  );
}
