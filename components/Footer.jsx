import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <Link href="/#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img
            src="/navlogo.png"
            alt="logo"
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
          />
        </div>
      </footer>
    </Link>
  );
};
export default Footer;
