import React from 'react';
import { trustAvatars } from '@/constants/trustAvatars';

const TrustAvatars = () => {
  return (
    <div className="flex -space-x-2">
      {trustAvatars.map((avatar, index) => (
        <div
          key={index}
          className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative hover:z-10 transition-transform hover:scale-110"
        >
          <img
            src={avatar.image}
            alt={avatar.name}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default TrustAvatars;