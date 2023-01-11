/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Link from 'next/link';
import { titleReveal } from '../animations/animation';

const LodgeCard = ({ temple }) => {
  return (
    <article className="flex flex-col rounded-lg flex-shrink-0 max-h-[600px] w-[400px]  md:max-w-[600px] xl:[w-900px] snap-center bg-[#363636] p-2 mt-5 md:opacity-60 md:hover:opacity-100 cursor-pointer transition-opacity duration-200  ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full h-20 lg:h-56 rounded-lg xl:w-full  xl:rounded-lg object-cover object-center mx-auto  "
        src={temple.image}
        alt={temple.name}
      />

      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-2 mx-auto  h-full text-left top-0 rounded-xl   w-full  flex flex-col space-y-1 "
      >
        <p className="font-semibold text-xs lg:text-xl  text-white drop-shadow-md	">
          {temple.address}
        </p>
        <h4 className="text-xl md:text-2xl font-medium text-white drop-shadow-md text-center underline">
          {temple.location}
        </h4>
        <p className="  text-sm mt-1 text-white drop-shadow-md">
          Parking: {temple.parking}
        </p>
        <div>
          <h5 className="text-xl text-center font-medium text-white drop-shadow-md  mt-1">
            Our Lodges
          </h5>
        </div>
        <div className="flex flex-wrap align-center justify-center gap-2 flex-shrink-0 ">
          {temple.lodges.map(lodge => (
            <Link href={`/lodge/${lodge.slug}`} key={lodge.name}>
              <button className="cardBtn flex items-center mt-2">
                {lodge.name}
                <img
                  className="hidden md:inline-flex w-4 h-4 rounded-full ml-2"
                  src={lodge.ctaImage}
                  alt={lodge.name}
                />
              </button>
            </Link>
          ))}
        </div>
      </motion.div>
    </article>
  );
};
export default LodgeCard;
