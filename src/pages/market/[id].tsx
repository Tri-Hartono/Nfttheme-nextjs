import React from 'react';
import { HeroSection } from '../../../components/herosection';
import { NFT__DATA } from '../../../assets/data/data';
import Image, { StaticImageData } from 'next/image';
import Layout from '../../../components/layout';
import { useRouter } from 'next/router';
import LiveAction from '../../../components/live-action';
import ButtonPlaceBid from '../../../components/buttonplacebid';

export default function DetailNft() {
  const router = useRouter();
  const { id } = router.query;
  const NFT_Data = NFT__DATA.find((item) => item.id == id);
  return (
    <Layout>
      <HeroSection title={NFT_Data?.title as string} />
      <div className="px-setting  py-10">
        <div className=" flex flex-col lg:flex-row justify-between gap-8 ">
          <div className="lg:w-1/2 ">
            <Image className="rounded-lg" src={NFT_Data?.imgUrl as string | StaticImageData} alt={NFT_Data?.title as string} />
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h1>{NFT_Data?.title}</h1>
            <div className="flex items-center justify-between">
              <div className="space-x-4">
                <span>Watch</span>
                <span>Like</span>
              </div>
              <div className="space-x-4">
                <span>Search</span>
                <span>:</span>
              </div>
            </div>
            <div className="p-6 bg-card-gray flex items-center gap-4 w-fit rounded-md">
              <div className="w-14 h-14">
                <Image src={NFT_Data?.creatorImg as string | StaticImageData} alt={NFT_Data?.title as string} />
              </div>
              <div>
                <span>Create By</span>
                <h3>{NFT_Data?.creator}</h3>
              </div>
            </div>

            <div>
              <p>{NFT_Data?.desc}</p>
            </div>
            <div className="w-auto ">
              <ButtonPlaceBid />
            </div>
          </div>
        </div>
        <div>
          <LiveAction />
        </div>
      </div>
    </Layout>
  );
}
