import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { pageAnimation, slideLeft, titleReveal } from '../animations/animation';
import Link from 'next/link';

const about = () => {
  return (
    <Layout title="About">
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className="min-h-screen flex flex-col text-center md:text-left  max-w-[2000px] xl:px-48 justify-center items-center mx-auto"
      >
        <motion.h3
          variants={titleReveal}
          className=" uppercase tracking-[20px] text-gray-500 text-2xl my-10"
        >
          About Freemasonry
        </motion.h3>
        <div>
          <motion.h4 className="text-4xl font-light my-2">
            Our Purpose{' '}
            <motion.hr
              variants={slideLeft}
              className="border-2 border-[#A70100] mb-4"
            />
          </motion.h4>
          <p className="mb-2 font-thin first-letter:font-serif first-letter:text-2xl">
            Freemasonry is the oldest and largest fraternal organization in the
            world. Its members share a common goal of helping each other become
            better men. Its body of knowledge and system of ethics is based on
            the belief that each man has a responsibility to improve himself
            while being devoted to his family, faith, country, and fraternity.
          </p>
          <motion.h4 className="text-4xl font-light my-2">
            Friendship{' '}
            <motion.hr
              variants={slideLeft}
              className="border-2 border-[#A70100] mb-4"
            />
          </motion.h4>
          <p className="mb-2 font-thin first-letter:font-serif first-letter:text-2xl">
            Freemasonry has many facets which have attracted men of good will of
            every race, religion, political view, and social position into its
            ranks throughout the world for many years. Every member has his own
            individual reason for joining the Craft, but generally its chief
            appeal is the charitable work it does, the philosophy of life taught
            by the Craft with its visible exhibition by Freemasons in their
            exemplary conduct in the everyday world. All these items are
            important, but to the non-member who has given this matter any
            thought whatsoever it soon becomes apparent that the greatest asset
            in Freemasonry is the spirit of friendship that exists between
            Freemasons in their relationship with one another and their attitude
            of thoughtfulness for the welfare of others. For example, many years
            ago the words “Mason” and “friendship” were often used synonymously.
          </p>
          <p className="mb-2 font-thin first-letter:font-serif first-letter:text-2xl">
            There are many definitions of the word “friend”. It means one who is
            in a warm personal relationship with another person. It means a
            person who is ready to assist you in your plans. Many years ago an
            English periodical had a contest and offered a prize to the person
            submitting the best definition of the word “friend”. Here are a few
            of the definitions which were sent to the publication:
          </p>
          <ul className="font-bold font-serif text-center">
            <li>
              “One who multiplies joys, divides grief, and whose honesty is
              inviolable.”
            </li>
            <li>“One who understands our silence.”</li>
            <li>
              “A watch which beats true and for all time and never runs down.”
            </li>
            And here is the definition that won first prize:
            <li>
              “A friend is the one who comes in when the whole world has gone
              out.”
            </li>
          </ul>
          <motion.h4 className="text-4xl font-light my-4">
            Drop In{' '}
            <motion.hr
              variants={slideLeft}
              className="border-2 border-[#A70100] mb-4"
            />
          </motion.h4>
          <p className="mb-2 font-thin first-letter:font-serif first-letter:text-2xl">
            Meeting Masons informally is a good way to get to know who we are
            and to inquire about becoming a Freemason. Social events take place
            periodically throughout the year which you and your family can
            attend and get to know us. Some lodges meet regularly for coffee,
            informal dining or family get-togethers. Please use our{' '}
            <Link href="/#contact" className="underline text-[#f15d5d]">
              Contact Form
            </Link>{' '}
            to inquire about dropping in.
          </p>
          <ul>
            <h5 className="text-2xl font-thin underline mb-2 ">Windsor</h5>
            <li className="list ">
              Coffee Club - Monday, Wednesday & Friday mornings - 8:30 to 10:30
              AM - ballroom lounge
            </li>
            <li className="list">
              Breakfast - last Friday of the month - 9:00 AM - top floor lounge
              - check calendar for changes
            </li>
            <li className="list">Mentoring - every Wednesday - 7:00 PM</li>
          </ul>
          <ul>
            <h5 className="text-2xl font-thin underline mb-2">Amherstburg</h5>
            <li className="list">
              Friday Get-together - bring or order-in food - children welcome -
              5:00ish to ?
            </li>
          </ul>
          <ul>
            <h5 className="text-2xl font-thin underline mb-2">Tilbury</h5>
            <li className="list">Coffee - every Saturday morning at 9:30 AM</li>
          </ul>
          <ul>
            <h5 className="text-2xl font-thin underline mb-2">
              Kingsville & Leamington
            </h5>
            <li className="list">
              Periodic informal events - please refer to the event notices and
              calendar for coming events
            </li>
          </ul>
          <p className="my-6 text-sm">
            Please Note: While we endeavour to keep this list up-to-date, we
            cannot guarantee the accuracy of the information.
          </p>
        </div>
        <div></div>
      </motion.div>
    </Layout>
  );
};
export default about;
