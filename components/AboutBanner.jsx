import Banner from './Banner';

const AboutBanner = () => {
  return (
    <Banner>
      <div className="flex flex-col my-4 align-center justify-around w-full">
        <h1 className="text-xl tracking-[3px]">14</h1>
        <p className="text-2xl tracking-[5px] font-thin">District Lodges</p>
      </div>
      <div className="flex flex-col my-4 align-center justify-around w-full">
        <h1 className="text-xl tracking-[3px]">170+</h1>
        <p className="text-2xl tracking-[5px] font-thin">
          Years in Essex County
        </p>
      </div>
      <div className="flex flex-col align-center justify-around w-full my-4">
        <h1 className="text-xl tracking-[3px]">200+</h1>
        <p className="text-2xl tracking-[5px] font-thin">Meetings per year</p>
      </div>
      <div className="flex flex-col align-center justify-around w-full my-4">
        <h1 className="text-xl tracking-[3px]">550+</h1>
        <p className="text-2xl tracking-[5px] font-thin">District Members</p>
      </div>
    </Banner>
  );
};
export default AboutBanner;
