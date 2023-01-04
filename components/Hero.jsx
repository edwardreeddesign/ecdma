/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      'Welcome to',
      "Canada's Southernmost Jurisdiction",
      'Grand Lodge of Canada in the Province of Ontario',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  // bg-center bg-[url('https://ecdma.vercel.app/images/edcm.svg')]

  return (
    <div className="h-screen w-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden z-20 bg-cover  ">
      <BackgroundCircles />
      <img
        src="/edcm.svg"
        alt="background"
        className="relative rounded-full h-32 w-32 mx-auto object-cover "
      />
      <div className="z-30">
        <h2 className="text-sm uppercase text-gray-500 pb-2 pt-2 tracking-[15px]">
          Essex County District
        </h2>
        <h1 className="text-5xl font-semibold px-10 text-gray-300 z-40 lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#A70100" />
        </h1>
      </div>

      <div className="pt-5 z-20">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="district">
          <button className="heroButton">District</button>
        </Link>
        <Link href="#lodges">
          <button className="heroButton">Lodges</button>
        </Link>
        <Link href="#events">
          <button className="heroButton">Events</button>
        </Link>
        <Link href="#contact">
          <button className="heroButton">Contact</button>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
