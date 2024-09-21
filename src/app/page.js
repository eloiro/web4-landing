"use client";
import { useState } from 'react';
import Image from 'next/image';
import logo from '/public/ethereum_logo_no_rhombus.png';
import arrow from '/public/arrow.svg';
import arrow2 from '/public/arrow2.svg';
import cardimage from '/public/card-image.svg';

function VersionToggleButton() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isWhiteVersion, setIsWhiteVersion] = useState(true);
  const [arrowPosition, setArrowPosition] = useState('left');

  const handleClick = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setIsWhiteVersion(!isWhiteVersion);
      setArrowPosition(arrowPosition === 'left' ? 'right' : 'left');
    }, 100);
  };

  return (
    <div
      onClick={handleClick}
      className="relative cursor-pointer overflow-hidden transition-all duration-500 border border-white/10 hover:border-white/0 rounded-full bg-white/10 hover:bg-white/20 h-12 flex items-center"
      style={{ width: '220px' }}
    >
      {/* Текст кнопки */}
      <div
        className={`absolute left-0 right-0 text-center text-white transition-opacity duration-500 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
        
      >
        {isWhiteVersion ? 'white version' : 'black version'}
      </div>

      <div
        className={`absolute top-0 h-full flex items-center transition-all duration-1000`}
        style={{
          left: arrowPosition === 'left' ? (isAnimating ? '0%' : '0%') : (isAnimating ? 'calc(100% - 50px)' : 'calc(100% - 50px)'),
          transform: isAnimating
            ? arrowPosition === 'left'
              ? 'translateX(calc(100% - 50px))'
              : 'translateX(-100%)'
            : 'translateX(0)',
          width: '50px',
        }}
      >
        <div className="w-full flex justify-center bg-color-300">
          <Image
            src={arrow}
            alt="arrow"
            width={24}
            height={24}
            className={`transition-transform duration-500 ${
              arrowPosition === 'left' ? '' : 'rotate-180'
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default function Mypage() {
  return (
    <div className="bg-[#171717] min-h-screen">
      <div className="bg-[#1F1A29]">
        <header className="py-4 max-w-[1360px] mx-auto flex justify-between">
          <div>
            <Image
              src={logo}
              alt={"error"}
              width={60}
              height={60}
            />
          </div>
          <div className="flex items-center gap-5">
            <div className="text-white">Landing</div>
            <div className="text-white">Blog</div>
          </div>
        </header>
      </div>
      <div className="bg-[linear-gradient(to_bottom,_#1f1a29,_#171717)]">
        <section className="flex gap-8 flex-col items-center py-[94px] bg-[linear-gradient(to_bottom,_#1f1a29,_#171717)] max-w-screen-2xl mx-auto">
          {/* Використання оновленого компонента VersionToggleButton */}
          <VersionToggleButton />

          <h1 className=" text-[#E5E7EB] text-[72px] text-center font-medium leading-none">
            Now it&#39;s easier than<br /> ever to build products
          </h1>
          <div className="text-[#FFFFFF]/70 px-[430px] text-center">
            Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.
          </div>
          <div className="transition-all duration-200 ease-in-out bg-gradient-to-br to-[#7C3AED] from-[#2563EB] flex items-center py-[18px] pr-[30px] pl-[26px] rounded-full hover:shadow-lg hover:shadow-[#7c3aed]/50">
            <div className="text-white pr-[21px]">Get started</div>
            <Image
              src={arrow2}
              alt={"error"}
              width={16}
              height={16}
            />
          </div>
        </section>
      </div>
      {/* Решта вашого коду */}
    </div>
  );
}
