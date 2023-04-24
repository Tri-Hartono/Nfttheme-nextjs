import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function PlaceBid({ setShowModal }: any) {
  return (
    <div className="fixed h-screen flex items-center justify-center z-50 w-full top-0 left-0 bg-bg-colors/80 text-white">
      <div className="w-[80%] md:w-[60%] lg:w-[40%]  bg-card-gray space-y-6  p-2 md:p-4 lg:p-8 relative rounded-md  ">
        {/* <h1 onClick={() => setShowModal(false)}>Testing</h1> */}
        <div onClick={() => setShowModal(false)} className="cursor-pointer p-2 flex items-center justify-center bg-btn-blue absolute -top-3 -right-2 rounded-full">
          <FontAwesomeIcon icon={faX} className="w-4 h-4 " />
        </div>
        <h1 className="text-center">Place a Bid</h1>

        <div className="w-full ">
          <p className="">
            You must bid at least <span className="">5.09 ETH</span>
          </p>
          <input className="w-full" type="number" placeholder="00 : 00 ETH" />
        </div>
        <div>
          <h6>Enter Quantity, 7 available</h6>
          <input className="w-full" type="number" placeholder="Enter quantity" />
        </div>
        <div className="flex items-center justify-between">
          <p>You must bid at least</p>
          <span className="">5.89 ETH</span>
        </div>
        <div className="flex items-center justify-between">
          <p>Service Fee</p>
          <span className="">0.89 ETH</span>
        </div>
        <div className="flex items-center justify-between">
          <p>Total Bid Amount</p>
          <span className="">5.89 ETH</span>
        </div>
        <div className=" flex items-center justify-center">
          <button className="">Place a Bid</button>
        </div>
      </div>
    </div>
  );
}
