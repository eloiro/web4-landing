import Image from 'next/image';
import logo from '/public/ethereum_logo_no_rhombus.png';
import arrow from '/public/arrow.svg';
import arrow2 from '/public/arrow2.svg';
import cardimage from '/public/card-image.svg';
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
        <div className="transition  border border-white/10 hover:border-white/0 gap-[8px] rounded-full bg-white/10 hover:bg-white/20 h-[38px] flex items-center px-[4px]">
          <div className="text-white pl-[12px]">Preline UI Figma is live.</div>
          <div className="rounded-full bg-white/10 w-[36px] h-[28px] flex justify-center items-center"><Image className=""
            src={arrow}
            alt={"error"}
            width={16}
            height={16}
          /></div>
        </div>
        <h1 className=" text-[#E5E7EB] text-[72px] text-center font-medium leading-none">
          Now it&#39;s easier than<br /> ever to build products
        </h1>
        <div className="text-[#FFFFFF]/70 px-[430px] text-center">
          Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.
        </div>
        <div className="transition-all duration-200 ease-in-out bg-gradient-to-br to-[#7C3AED] from-[#2563EB] flex flex-row py-[18px] pr-[30px] pl-[26px] rounded-full hover:shadow-lg hover:shadow-[#7c3aed]/50">
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
    <blog className="flex justify-between px-[770px] pb-[80px]">
    <div className="bg-[#E5E7EB] w-[371px] h-[437px] rounded-[12px]">
        <Image className='rounded-[12px]'
          src={cardimage}
          alt={"error"}
          width={371}
          height={200}
        />
        <div className="p-[20px] flex flex-col gap-[16px]">
          <div className="">
          <div className="text-r text-[18px] font-semibold text-[#1F2937]">
            Card title
          </div>
          <div className="text-[#6B7280] text-[14px] font-bold leading-5">
            CARD SUBTITLE
          </div>
          </div>
          <div className="font-medium text-[#6B7280] leading-6">
            Some quick example text to build on the <br /> card title and make up the bulk of the <br /> card's content.
          </div>
          <div className="flex flex-row">
            <div className="transition bg-[#2563EB] cursor-pointer  hover:bg-[#2563EB]/80 px-[16px] py-[14px] text-white text-[15px] leading-[120%] rounded-[8px] text-center">
              Go somewhere
            </div>
            <div className="text-[#2563EB] cursor-pointer flex items-center pl-[26px] font-medium">
              Card link
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#E5E7EB] w-[371px] h-[437px] rounded-[12px]">
        <Image className='rounded-[12px]'
          src={cardimage}
          alt={"error"}
          width={371}
          height={200}
        />
        <div className="p-[20px] flex flex-col gap-[16px]">
          <div className="">
          <div className="text-r text-[18px] font-semibold text-[#1F2937]">
            Card title
          </div>
          <div className="text-[#6B7280] text-[14px] font-bold leading-5">
            CARD SUBTITLE
          </div>
          </div>
          <div className="font-medium text-[#6B7280] leading-6">
            Some quick example text to build on the <br /> card title and make up the bulk of the <br /> card's content.
          </div>
          <div className="flex flex-row">
            <div className="transition bg-[#2563EB] cursor-pointer hover:bg-[#2563EB]/80 px-[16px] py-[14px] text-white text-[15px] leading-[120%] rounded-[8px] text-center">
              Go somewhere
            </div>
            <div className="text-[#2563EB] cursor-pointer flex items-center pl-[26px] font-medium">
              Card link
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#E5E7EB] w-[371px] h-[437px] rounded-[12px]">
        <Image className='rounded-[12px]'
          src={cardimage}
          alt={"error"}
          width={371}
          height={200}
        />
        <div className="p-[20px] flex flex-col gap-[16px]">
          <div className="">
          <div className="text-r text-[18px] font-semibold text-[#1F2937]">
            Card title
          </div>
          <div className="text-[#6B7280] text-[14px] font-bold leading-5">
            CARD SUBTITLE
          </div>
          </div>
          <div className="font-medium text-[#6B7280] leading-6">
            Some quick example text to build on the <br /> card title and make up the bulk of the <br /> card's content.
          </div>
          <div className="flex flex-row">
            <div className=" transition cursor-pointer bg-[#2563EB] px-[16px] py-[14px] hover:bg-[#2563EB]/80 text-white text-[15px] leading-[120%] rounded-[8px] text-center">
              Go somewhere
            </div>
            <div className="text-[#2563EB] cursor-pointer flex items-center pl-[26px] font-medium">
              Card link
            </div>
          </div>
        </div>
      </div>
    </blog>
  </div>
}