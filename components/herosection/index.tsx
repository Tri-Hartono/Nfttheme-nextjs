import React from 'react';
import Herobg from '../../assets/images/hero.jpg';

interface HeroTitle {
  title: string;
}

export const HeroSection = (props: HeroTitle) => {
  return (
    <div className=" w-full flex h-[50vh] bg-[url('../../assets/images/bg.jpg')] bg-cover bg-no-repeat">
      <h1 className="m-auto">{props.title}</h1>
    </div>
  );
};
