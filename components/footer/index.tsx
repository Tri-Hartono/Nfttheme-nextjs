import React from 'react';

export default function Footer() {
  return (
    <div className="py-10 bg-black  ">
      <div className=" flex flex-col lg:flex-row   gap-4 justify-between px-setting  3xl:w-5/6 4xl:w-1/2 m-auto ">
        <div className="lg:w-1/3 space-y-4">
          <h2>NFTs</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta, aliquid excepturi voluptates tempora dignissimos eaque cupiditate cumque sed possimus. Aliquam provident non, itaque rem qui optio hic accusantium
            necessitatibus!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between lg:w-1/3 ">
          <div className="space-y-4">
            <h2>My Account</h2>
            <ul className="space-y-2">
              <li>Author Profile</li>
              <li>Create Item</li>
              <li>Collection</li>
              <li>Edit Profile</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2>Resource</h2>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Partner</li>
              <li>Community</li>
              <li>Activity</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2>Company</h2>
            <ul className="space-y-2">
              <li>About</li>
              <li>Career</li>
              <li>Rangking</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h2>NewsLetter</h2>
          <input type="text" placeholder="email" className="bg-card-gray px-4 py-2 rounded-lg" />
          <div>Icon</div>
        </div>
      </div>
    </div>
  );
}
