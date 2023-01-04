import { motion } from 'framer-motion';
import LodgeCard from './LodgeCard';
import temples from '../data/lodges';

const Lodges = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col  justify-center  overflow-hidden text-center md:text-left max-w-full pt-20  items-center mx-auto"
    >
      <div className="flex flex-col items-center  text-center ">
        <h3 className="  uppercase tracking-[20px] text-gray-500 text-sm md:text-2xl ">
          The Lodges of Essex County District
        </h3>
        <p className="text-gray-600 tracking-[3px] text-xs md:text-sm">
          (alphabetically by location)
        </p>
      </div>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory snap-center">
        {temples.map((temple, idx) => (
          <LodgeCard temple={temple} key={idx} />
        ))}
      </div>
    </motion.div>
  );
};
export default Lodges;
