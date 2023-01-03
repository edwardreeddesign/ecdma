const Banner = ({ children }) => {
  return (
    <div className="h-screen flex   text-center    justify-evenly items-center mx-auto">
      <div className="w-full min-h-[10rem] bg-gradient flex flex-col align-center justify-center my-8 shadow-lg  md:flex-row">
        {children}
      </div>
    </div>
  );
};
export default Banner;
