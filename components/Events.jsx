import { motion } from 'framer-motion';
import Link from 'next/link';

const Events = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative  text-center md:text-left  max-w-[2000px] xl:px-10 justify-center items-center mx-auto"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Events
      </h3>
      <div className="flex align-center justify-center w-full max-h-[600px]  aspect-video p-6 bg-[rgb(56,56,56)] rounded-xl">
        <iframe
          className="w-full max-h-[600px]  aspect-video p-4"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=YmNiMTA5Yjc0Mzk2YmYwZDgwMWM1YjUyNjU1YTcyMDYzY2NlNjk2NDgyMjk2NDhjOWNiYjg3ZjBjMDE2ZmI2NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%239E69AF"
          // style="border:solid 1px #777"
        />
      </div>
      <Link href="/events">
        <button className="primaryBtn mt-10">All Events</button>
      </Link>
    </motion.div>
  );
};
export default Events;
