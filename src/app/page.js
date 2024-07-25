import Image from 'next/image';
import logo from '/public/ethereum_logo_no_rhombus.png';
import arrow from '/public/arrow.svg';

export default function Mypage() {

  return <div className="bg-[#171717] min-h-screen">
    <div className="bg-[#1F1A29]">
      <header className="py-4 max-w-[1360px] mx-auto flex justify-between">
        <div><Image className=""
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
      <section className='flex gap-8 flex-col items-center py-[94px] bg-[linear-gradient(to_bottom,_#1f1a29,_#171717)] max-w-screen-2xl mx-auto'>
        <div className=" transition border border-white/10 hover:border-white/0 gap-[8px] rounded-full bg-white/10 hover:bg-white/20 h-[38px] flex items-center px-[4px]">
           <div className="text-white pl-[12px]">Preline UI Figma is live.</div>
           <div className="rounded-full bg-white/10 w-[36px] h-[28px] flex justify-center items-center"><Image className=""
          src={arrow}
          alt={"error"}
          width={16}
          height={16}
        /></div>
        </div>
      </section>
    </div>
    <div className="min-h-screen">
      
    </div>
  </div>
}