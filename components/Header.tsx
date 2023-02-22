// import Image from "next/image";
import Link from "next/link";
import { AiFillWechat } from 'react-icons/ai';
import { HiLanguage } from 'react-icons/hi2';
import $ from "jquery";

export default function Header({ mylang, setMyLang }: { mylang?: string, setMyLang?: any }) {
  const switchMyLang = () => {
    console.log(`lang changed from ${mylang}`);
    if (mylang = 'en') {
      $('.en').hide();
      $('.ch').show();
      setMyLang('ch');
    } else {
      $('.ch').hide();
      $('.en').show();
      setMyLang('en');
    };
  }
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        {/* <Image
          alt="header text"
          src="https://chienhsiang-hung.github.io/sirigpt/writingIcon.png"
          className="sm:w-12 sm:h-12 w-8 h-8"
          width={32}
          height={32}
        /> */}
        <AiFillWechat className="sm:w-12 sm:h-12 w-8 h-8" size={32}/>
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          SiriGPT
        </h1>
      </Link>
      <button onClick={switchMyLang}>
        <HiLanguage className="sm:w-8 sm:h-[27px] w-8 h-[28px]" size={32}/>
      </button>
      {/* <a
        href="https://vercel.com/templates/next.js/twitter-bio"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Vercel Icon"
          src="/vercelLogo.png"
          className="sm:w-8 sm:h-[27px] w-8 h-[28px]"
          width={32}
          height={28}
        />
      </a> */}
    </header>
  );
}
