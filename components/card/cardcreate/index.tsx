import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface CreateProps {
  icon: IconProp;
  title: string;
  desc: string;
}
export default function CardCreate(props: CreateProps) {
  return (
    <div className="relative ">
      <div className="absolute -left-2  -top-6 bg-btn-blue px-4 border border-r-4 border-b-4   border-bg-colors py-2 rounded-md w-fit">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className="bg-card-gray rounded-md p-6 space-y-2 shadow w-full ">
        <h2 className="">
          <Link href="/wallet" className="hover:text-btn-blue transition duration-300">
            {props.title}
          </Link>
        </h2>
        {/* <p className="">{props.desc}</p> */}
        <p className="">{props.desc.substring(0, 170) + '...'}</p>
      </div>
    </div>
  );
}
