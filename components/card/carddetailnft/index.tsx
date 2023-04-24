import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import PlaceBid from '../../modal';
import ButtonPlaceBid from '../../buttonplacebid';

interface TypeData {
  id?: number;
  title: string;
  imgUrl: string | StaticImageData;
  creator: string;
  creatorImg: string | StaticImageData;
  currentBid: number;
}

export default function CardDetailNft(props: TypeData) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {' '}
      <div className="p-4 bg-card-gray rounded-lg">
        <Image src={props.imgUrl} alt="image 01" className="rounded-md" />
        <div className="py-4 space-y-2">
          <h3 className="hover:text-btn-blue cursor-pointer">
            <Link href={`/market/${props.id}`}>{props.title}</Link>
          </h3>
          <div className="flex items-start justify-between py-4">
            <div className="w-12 h-10">
              <Image src={props.creatorImg} alt="Avatar" />
            </div>
            <div className="space-y-2">
              <p>Create By</p>
              <h4 className="font-semibold">{props.creator}</h4>
            </div>
            <div className="space-y-2 flex items-end flex-col">
              <p>Current Bid</p>
              <h4 className="font-semibold">{props.currentBid} ETH</h4>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <ButtonPlaceBid />
          <p className="hover:text-btn-blue">View History</p>
        </div>
      </div>
    </div>
  );
}
