import React from 'react';
import Layout from '../../../components/layout';
import Image, { StaticImageData } from 'next/image';
import Hero from '../../../assets/images/hero.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faPen, faPuzzlePiece, faWallet, faList, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { NFT__DATA, SELLER__DATA } from '../../../assets/data/data';
import { CardCreate, CardDetailNft, CardSeller } from '../../../components/card';
import LiveAction from '../../../components/live-action';

export default function Homepages() {
  return (
    <div className="px-setting">
      {/* Header */}
      <div className=" flex flex-col-reverse md:flex-row items-center justify-between pt-28 pb-10 gap-6 ">
        <div className="md:w-1/2 space-y-4 ">
          <div className="text-2xl md:text-4xl lg:text-[40px]   font-bold ">
            Discovery rare digital art and Collect <span className="bg-gradient-to-br from-clr-purple to-clr-blue text-transparent bg-clip-text">Sell Extraordinary</span> NFTs
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eius consectetur totam laboriosam suscipit qui voluptates iusto incidunt asperiores nulla nemo, ut fuga! Doloremque, consectetur repellendus quas error dolorum
            natus?
          </p>
          <div className="space-x-4 flex items-center pt-6">
            <Link href="/market">
              <button>
                <FontAwesomeIcon icon={faRocket} className="px-2" />
                Explore
              </button>
            </Link>
            <Link href="/create">
              <button>
                <FontAwesomeIcon icon={faPen} className="px-2" />
                Create
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2  md:pl-10">
          <Image src={Hero} alt="Image Header" className="rounded-md" />
        </div>
      </div>

      {/* liveAction */}
      <LiveAction />
      {/* TOP RESELLER */}
      <div className="py-10">
        <h1>Top Seller</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-6">
          {SELLER__DATA.map((item, index) => (
            <CardSeller key={index} name={item.sellerName} imageAvatar={item.sellerImg} eth={item.currentBid} />
          ))}
        </div>
      </div>

      {/* Trandingg */}
      <div className="py-10 space-y-10">
        <h1>Tranding</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {NFT__DATA.slice(5, 9).map((item, index) => (
            <CardDetailNft key={index} id={item.id} imgUrl={item.imgUrl} creatorImg={item.creatorImg} title={item.title} currentBid={item.currentBid} creator={item.creator} />
          ))}
        </div>
      </div>

      {/* Create and Sell Your NFTs */}
      <div>
        <h1> Create and Sell Your NFTs</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-20">
          <CardCreate
            title="Setup your Wallet"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem dicta nisi impedit, dignissimos sunt, delectus provident magni beatae quos deleniti, atque facilis itaque? Adipisci, esse ullam? Distinctio unde quia quaerat?"
            icon={faWallet}
          />
          <CardCreate
            title="Create your Collection"
            icon={faFolderPlus}
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem dicta nisi impedit, dignissimos sunt, delectus provident magni beatae quos deleniti, atque facilis itaque? Adipisci, esse ullam? Distinctio unde quia quaerat?"
          />
          <CardCreate
            title="Add your NFTs"
            icon={faPuzzlePiece}
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem dicta nisi impedit, dignissimos sunt, delectus provident magni beatae quos deleniti, atque facilis itaque? Adipisci, esse ullam? Distinctio unde quia quaerat?"
          />
          <CardCreate title="List them for sale" icon={faList} desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem dicta nisi impedit, dignissimos sunt, delectus provident magni beatae quos deleniti." />
        </div>
      </div>
    </div>
  );
}
