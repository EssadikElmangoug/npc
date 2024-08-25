import React, { useRef, useState } from 'react';
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import './globals.css';

const LandingPage = () => {
  const [copied, setCopied] = useState(false);
  const [video, setVideo] = useState(false);
  const audioRef = useRef(new Audio('/taylor-swift-music.m4a'));
  const contractAddress = "0x1234567890123456789012345678901234567890";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  const playVideo = () => {
    if (video) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setVideo(!video);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full h-[60vh] sm:h-[80vh] lg:h-[120vh] bg-[url('/hero.gif')] bg-cover bg-center bg-no-repeat">
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 text-center flex flex-col justify-center items-center bg-[#ffeecb]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-[#E9A334] paragraph-stroke">WELCOME TO THE $NPC COIN</h1>
        <div className="shadow-md bg-[#E9A334] w-full sm:w-3/4 lg:w-1/2 p-2 rounded-lg relative flex flex-col sm:flex-row justify-center items-center">
          <input 
            type="text" 
            value={contractAddress} 
            readOnly 
            className="bg-white text-black w-full px-2 py-3 text-sm sm:text-base lg:text-xl rounded mb-2 sm:mb-0"
          />
          <button 
            onClick={copyToClipboard} 
            className='w-full sm:w-auto sm:ml-2 bg-[#E9A334] px-4 py-2 rounded-lg hover:bg-[#ffbb4e] transition-colors duration-300 text-white font-semibold'
          >
            {copied ? 'COPIED!' : 'COPY'}
          </button>
        </div>
        <div className='mt-12'>
          <h2 className='mb-8 text-2xl sm:text-3xl font-semibold'>Liquidity Burned</h2>
          <div className='grid grid-cols-3 sm:grid-cols-3 gap-6 sm:gap-10'>
            {[
              { icon: <FaTwitter size={32} />, name: 'Twitter' },
              { icon: <FaTelegramPlane size={32} />, name: 'Telegram' },
              { icon: <img src="/dexcreener.png" width={32} alt="Dexscreener" />, name: 'Dexscreener' }
            ].map((item, index) => (
              <a key={index} href='#' className='flex flex-col justify-center items-center group'>
                <div className='p-4 sm:p-6 bg-[#E9A334] rounded-2xl group-hover:bg-black transition-colors duration-300'>
                  {React.cloneElement(item.icon, { color: 'white' })}
                </div>
                <h2 className="mt-3 font-medium">{item.name}</h2>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-[#ffeecb] flex flex-col lg:flex-row justify-center items-center p-6 sm:p-8 gap-8'>
        <div className='w-full lg:w-[40rem] p-4 sm:p-6'>
          <p className='text-lg sm:text-xl lg:text-2xl text-center leading-relaxed'>
            The NPC Coin is more than just a meme—it's a movement. This NPC Coin on the Solana blockchain embodies the belief that currencies should be a store of energy, not just a medium for transactions. In a world where NPCs determine value by the lack of better alternatives, the NPC Coin stands out as the ultimate choice. This is your opportunity to be part of a revolution that challenges the status quo—one meme at a time.
          </p>
        </div>
        <div className='w-full sm:w-3/4 lg:w-[28rem]'> 
          <img src="/jew illustration.png" alt="NPC Coin Illustration" className="w-full h-auto rounded-lg" />
        </div>
      </div>
      <div className='w-full px-4 sm:px-6 lg:px-8 py-12 text-center flex flex-col justify-center items-center bg-[#c6b695]'>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-[#E9A334] paragraph-stroke">BY THE PEOPLE, FOR THE PEOPLE</h1>
        <div className='w-full sm:w-3/4 lg:w-2/3'>
          <img src="/tv.png" alt="TV Illustration" className='w-full h-auto rounded-lg'/>
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center flex flex-col justify-center items-center bg-[#665150]">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 text-[#E9A334] paragraph-stroke">HOW TO BUY?</h1>
        <div className="w-full sm:w-3/4 lg:w-2/3 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <img 
            src={!video ? "/telegou.png" : "/video.gif"} 
            alt="TV Illustration" 
            className="w-full sm:w-1/2 h-auto rounded-lg"
          />
          <button 
            onClick={playVideo} 
            className="w-full sm:w-auto bg-[#762E2E] px-4 py-2 sm:px-5 sm:py-3 text-[#E8A233] text-base sm:text-lg border border-[#E9BD2B] rounded-xl hover:bg-[#8a3636] transition-colors duration-300"
          >
            {!video ? 'PLAY VIDEO' : 'PAUSE VIDEO'}
          </button>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mt-6 sm:mt-8 text-[#E9A334] paragraph-stroke">FIGURE IT OUT YOURSELF</h1>
      </div>
      <div className='w-full bg-[#563A0B] flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8'>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 text-[#E9A334] paragraph-stroke">THIS TOKEN</h1>
        <div className='w-full sm:w-5/6 lg:w-2/3 bg-[#F1BA60] border-black border-4 p-4 my-3 rounded-xl flex justify-center items-center text-center text-sm sm:text-base lg:text-lg'>
          This coin was launched fairly on the platform Pump.fun, is community-driven, and has had its liquidity burned.
        </div>
        <div className='w-full sm:w-5/6 lg:w-2/3 bg-[#F1BA60] border-black border-4 p-4 my-3 rounded-xl flex justify-center items-center text-center text-sm sm:text-base lg:text-lg'>
          Join us in becoming part of the organic movement that will make the $NPC coin a standout not just on the Solana Blockchain, but across the globe. No questions—just action.
        </div>
      </div>
      <div className='w-full flex justify-center items-center pt-4 bg-[#342305]'>
        <img src="/highiq-landing.png" alt="High IQ Landing" className="w-32 sm:w-48 lg:w-64" />
      </div>
    </div>
  );
};

export default LandingPage;