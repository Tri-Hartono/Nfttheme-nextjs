import React, { useState } from 'react';
import PlaceBid from '../modal';
export default function ButtonPlaceBid() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="">
      <button className="w-full bg-btn-blue border-transparent" onClick={() => setShowModal(true)}>
        {/* <FontAwesomeIcon icon={faLock} className="px-2" /> */}
        Place Bid
      </button>
      {showModal && <PlaceBid setShowModal={setShowModal} />}
    </div>
  );
}
