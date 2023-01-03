/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Link from 'next/link';

const LodgeCard = ({ temple }) => {
  return (
    <article className="flex flex-col rounded-lg space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:[w-900px] snap-center bg-[#292929] p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-full xl:h-[225px] xl:rounded-lg object-cover object-center"
        src={temple.image}
        alt={temple.name}
      />
      <div className="px-0 md:px-10 text-left">
        <p className="font-thin text-2xl mt-1">{temple.address}</p>
        <h4 className="text-4xl font-light">{temple.location}</h4>
        <p className="font-extralight text-xl mt-1">
          Parking: {temple.parking}
        </p>
        <div>
          <h5 className="text-2xl font-medium text-[#dd0404]  mt-2">
            Our Lodges
          </h5>
        </div>
        <div className="flex flex-0 flex-wrap align-center justify-center  flex-shrink-0">
          {temple.lodges.map(lodge => (
            <div key={lodge.name}>
              <Link href={`/lodge/${lodge.slug}`}>
                <button className="heroButton flex items-center mt-2">
                  {lodge.name}
                  <img
                    className="w-4 h-4 rounded-full ml-2"
                    src={lodge.ctaImage}
                    alt={lodge.name}
                  />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
export default LodgeCard;
