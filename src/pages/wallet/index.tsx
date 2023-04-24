import React from 'react';
import Layout from '../../../components/layout';
import { HeroSection } from '../../../components/herosection';
import { faCoins, faBitcoinSign, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const wallet__data = [
  {
    title: 'Bitcoin',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni, quidem debitis et fugiat cumque?',
    icon: faCoins,
  },
  {
    title: 'Coinbase',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni, quidem debitis et fugiat cumque?',
    icon: faBitcoinSign,
  },
  {
    title: 'Metamask',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni, quidem debitis et fugiat cumque?',
    icon: faCirclePlay,
  },
  {
    title: 'Authereum',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni, quidem debitis et fugiat cumque?',
    icon: faCoins,
  },
];

interface PropsWallet {
  icon: IconProp;
  title: string;
  desc: string;
}

export default function Wallet(props: PropsWallet) {
  return (
    <Layout title="Wallet">
      <HeroSection title="Wallet" />
      <div className="px-setting py-10">
        <div className="space-y-4 text-center">
          <h1 className="">Connect your wallet</h1>
          <h2 className="md:w-1/2 m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis sequi autem. Nobis, voluptas.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 text-center">
          {wallet__data.map((item, index) => (
            <div key={index} className="space-y-4 p-4 bg-gray-600 rounded-md ">
              <FontAwesomeIcon className="w-10 h-10 mt-2" icon={item.icon} />
              <h2 className="font-semibold">{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
