import React, { useEffect, useState } from 'react';

const Overlay = () => {
  return (
    <div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white flex items-center justify-center">
          <h1 className="text-2xl">Welcome to the Twitch Overlay Extension!</h1>
        </div>
    </div>
  );
};

export default Overlay;
