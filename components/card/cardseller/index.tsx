import React from 'react';
import Image from 'next/image';

export default function CardSeller(props: any) {
  return (
    <div>
      <div className="flex items-center gap-2 mt-4">
        <div className="w-10 h-10">
          <Image src={props.imageAvatar} alt="avatar" />
        </div>
        <div>
          <p>{props.name}</p>
          <h3>{props.eth}</h3>
        </div>
      </div>
    </div>
  );
}
