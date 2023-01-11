const Title = ({ children }) => {
  return (
    <div className="w-full">
      <h3 className="absolute top-24 text-center uppercase tracking-[20px] text-gray-500 text-sm md:text-xl lg:text-2xl mx-auto w-full">
        {children}
      </h3>
    </div>
  );
};
export default Title;
