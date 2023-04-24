import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved, faBars, faXmark, faWallet } from '@fortawesome/free-solid-svg-icons';

const NAV_LINKS = [
  {
    display: 'Home',
    url: '/',
  },
  {
    display: 'Market',
    url: '/market',
  },
  {
    display: 'Create',
    url: '/create',
  },
  {
    display: 'Contact',
    url: '/contact',
  },
];
export default function Navbar() {
  const [navClick, setNavclick] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);
  return (
    <div className={'' + (navScroll ? 'fixed top-0 left-0 bg-bg-colors z-10 w-full border-b-2 border-btn-blue/60' : 'fixed top-0 left-0 w-full border-b-2 bg-transparent z-10 border-btn-blue/60')}>
      <div className="flex items-center justify-between h-20 px-setting  3xl:w-5/6 4xl:w-1/2 m-auto  ">
        <Link
          href="/"
          style={{ background: 'linear-gradient(-45deg, #e250e5, #4b50e6, #e250e5, #4b50e6)', backgroundSize: '100% 100%', backgroundClip: 'text', WebkitTextStroke: '3px transparent', WebkitTextFillColor: '#14141f' }}
          className="text-4xl font-bold text-transparent"
        >
          {' '}
          <FontAwesomeIcon className="" icon={faFireFlameCurved} />
          NFTs
        </Link>
        <div
          className={
            'w-1/2  transition duration-500  h-screen lg:h-auto top-0 right-0 fixed md:relative  flex flex-col  md:translate-x-0 md:flex-row items-center md:bg-transparent justify-center z-0 gap-4 ' +
            (navClick ? 'translate-x-0 bg-bg-colors' : 'translate-x-full bg-transparent')
          }
        >
          {NAV_LINKS.map((item, index) => (
            <Link key={index} href={item.url}>
              {item.display}
            </Link>
          ))}
        </div>
        <div>
          <button>
            <Link href="/wallet">
              <FontAwesomeIcon icon={faWallet} className="px-2" />
              connect wallet
            </Link>
          </button>
        </div>
        <div className="md:hidden relative z-10" onClick={() => setNavclick(!navClick)}>
          {navClick ? <FontAwesomeIcon icon={faXmark} className="transition duration-300" /> : <FontAwesomeIcon icon={faBars} className="transition duration-300" />}
        </div>
      </div>
    </div>
  );
}
