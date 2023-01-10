/* eslint-disable @next/next/no-img-element */
import Banner from './Banner';

const BeOne = () => {
  return (
    <Banner>
      <div className="flex flex-col align-center justify-center w-full">
        <h1 className="flex align-center justify-center tracking-[20px] uppercase text-xl md:text-2xl lg:text-5xl font-extrabold">
          2B1
          <img
            src="/navlogo.png"
            alt="square and compasses"
            className="h-12 w-12 mx-2 mr-6"
          />
          ask1
        </h1>
      </div>
    </Banner>
  );
};
export default BeOne;
