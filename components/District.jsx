import { motion } from 'framer-motion';
import Link from 'next/link';

const District = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        District Association
      </h3>
      <motion.img
        src="/mapessex.png"
        alt=" "
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 1, type: 'spring', stiffness: 50 },
        }}
        className="-mb-20 mt-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:2-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <p className="leading-4 text-sm">
          The purpose of the Essex County District Masonic Association is to
          promote Masonry in general, to communicate with members thereby
          allowing them to fully participate in District events, and to
          facilitate communications of the District Deputy Grand Master for the
          benefit of the District.
        </p>
        <p className="leading-4 text-sm">
          Membership in the Association consists of all Masons in good standing
          of a Craft Lodge in Essex County District. Annual dues are paid by
          each Lodge on behalf of its members.
        </p>
        <p className="leading-4 text-sm">
          The Association&apos;s regular meetings are held at Essex on the third
          Monday of September, November, March, and June at 7:30 P.M. Please
          check the district calendar to be sure that a meeting has not been
          re-scheduled or relocated.
        </p>
        <Link href="#lodges">
          <button className="primaryBtn mt-10">View The Lodges</button>
        </Link>
      </div>
    </motion.div>
  );
};
export default District;
