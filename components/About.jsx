import Link from 'next/link';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left  max-w-7xl px-10 justify-evenly items-center mx-auto"
    >
      <div className="w-full bg-red-200">
        <h3 className="text-center uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl ">
          About
        </h3>
      </div>
      {/* <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl ">
        About
      </h3> */}
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-sm md:text-lg lg:text-2xl font-semibold text-center">
          What is{' '}
          <span className="underline decoration-[#9a312d]">Freemasonry</span> ?
        </h4>
        <p className="leading-4 text-xs md:text-base text-left">
          Simply stated, it&apos;s a fraternal organization dedicated to helping
          a man develop in an ethical and moral environment.
        </p>
        <h4 className="text-sm md:text-lg lg:text-2xl font-semibold text-center">
          What{' '}
          <span className="underline decoration-[#9a312d]">Freemasonry</span> is
          NOT.
        </h4>
        <p className="leading-4 text-xs md:text-base text-left">
          It is not a service club, though Masons serve their community in a
          variety of ways.
        </p>
        <p className="leading-4 text-xs md:text-base text-left">
          It is not a religion, though a man must profess belief in a supreme
          being and act accordingly.
        </p>
        <p className="leading-4 text-xs md:text-base text-left">
          It is not a secret organization, though there are harmless signs and
          symbols, the meaning of which are not shared with non-Masons.
        </p>
      </div>
      <div className="-mt-20">
        <Link href="">
          <button className="primaryBtn">Learn More</button>
        </Link>
      </div>
    </motion.div>
  );
};
export default About;
