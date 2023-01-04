import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { pageAnimation, slideLeft, titleReveal } from '../animations/animation';
import InstallationDates from '../components/InstallationDates';
import OfficialVisit from '../components/OfficialVisit';
import MeetingDates from '../components/MeetingDates';
import temples from '../data/lodges';

const events = () => {
  return (
    <Layout title="Events">
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className="min-h-screen flex flex-col  text-center  md:text-left  max-w-[2000px] xl:px-48 justify-center items-center mx-auto snap "
      >
        <motion.h3
          variants={titleReveal}
          className="  uppercase tracking-[20px] text-gray-500 text-sm md:text-2xl  snap-center"
        >
          District Events
        </motion.h3>
        <section className="snap-center pb:24">
          <MeetingDates />
        </section>

        <section className="snap-start ">
          <InstallationDates />
        </section>
        <section className="snap-start">
          <OfficialVisit />
        </section>
      </motion.div>
    </Layout>
  );
};
export default events;
