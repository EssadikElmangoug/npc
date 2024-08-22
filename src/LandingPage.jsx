import React, { useState } from 'react';
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import './globals.css';

const LandingPage = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x1234567890123456789012345678901234567890";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full h-[120vh] bg-[url('/hero.gif')] bg-cover">
      </div>
      <div className="container mx-auto px-4 py-12 text-center flex flex-col justify-center items-center bg-[#ffeecb]">
        <h1 className="text-6xl font-bold mb-8 text-[#E9A334] paragraph-stroke">WELCOME TO THE $NPC COIN</h1>
        <div className="shadow-md bg-[#E9A334] w-[50%] p-2 rounded-lg relative flex justify-center items-center">
          <input 
            type="text" 
            value={contractAddress} 
            readOnly 
            className="bg-white text-black w-full px-1 py-2 text-2xl"
          />
          <button onClick={copyToClipboard} className='absolute right-4 bg-[#E9A334] px-5 py-1 rounded-lg hover:bg-[#ffbb4e] ease-in-out duration-300'>{copied?'COPIED!':'COPY'}</button>
        </div>
        <div className='mt-8'>
          <h2 className='mb-8 text-3xl'>Liquidity Burned</h2>
          <div className='grid grid-cols-3 gap-10'>
            <a href='#' className='flex flex-col justify-center items-center'>
              <div className='p-6 bg-[#E9A334] rounded-2xl hover:bg-black ease-in-out duration-300'>
                <FaTwitter fontSize={40} color='white' />
              </div>
              <h2>Twitter</h2>
            </a>
            <a href='#' className='flex flex-col justify-center items-center'>
              <div className='p-6 bg-[#E9A334] rounded-2xl hover:bg-black ease-in-out duration-300'>
                <FaTelegramPlane fontSize={40} color='white' />
              </div>
              <h2>Telegram</h2>
            </a>
            <a href='#' className='flex flex-col justify-center items-center'>
              <div className='p-6 bg-[#E9A334] rounded-2xl hover:bg-black ease-in-out duration-300'>
                <img src="/dexcreener.png" width={40} />
              </div>
              <h2>Dexscreener</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;