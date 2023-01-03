/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Link from 'next/link';
import { headerAnimLeft, headerAnimRight } from '../animations/animation';

const Header = () => {
  return (
    <header className="flex items-start justify-between sticky top-0 p-5 max-w-7xl mx-auto z-40 xl:items-center">
      <motion.div
        variants={headerAnimLeft}
        initial="hidden"
        animate="show"
        exit="exit"
        className="flex items-center justify-center space-x-1"
      >
        <Link href="/">
          <img src="/navlogo.png" alt="nav logo" width="40" height="40" />
        </Link>
        <h1 className="uppercase text-sm hidden md:inline-flex">
          Essex county masons
        </h1>
      </motion.div>
      <motion.div
        variants={headerAnimRight}
        initial="hidden"
        animate="show"
        exit="exit"
        className="flex items-center space-x-4"
      >
        <Link href="/about">About</Link>
        <Link href="/#district">District</Link>
        <Link href="/#lodges">Lodges</Link>
        <Link href="/events">Events</Link>
        <Link href="/#contact">Contact</Link>
      </motion.div>
    </header>
  );
};
export default Header;
