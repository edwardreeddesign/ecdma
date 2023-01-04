import { motion } from 'framer-motion';
import { slideLeft, titleReveal } from '../animations/animation';

const InstallationDates = () => {
  return (
    <div className="h-screen flex align-center justify-center flex-col">
      <motion.h4
        variants={titleReveal}
        className="pt-32 text-xl md:text-4xl font-light my-2 tracking-[4px]"
      >
        Lodge Installation Dates
        <motion.hr
          variants={slideLeft}
          className="border-2 border-[#A70100] mb-8"
        />
      </motion.h4>
      <div className="gridItem">
        <div className="border-b-2 border-[#A70100] bg-dark p-2 rounded-md;">
          <h5 className="name">Pelee No. 627</h5>
          <p className="info">84 East-West Rd., Pelee Island,</p>
          <p className="info">August 13, 2022 at 12:00 noon</p>
        </div>
        <div className="border-b-2 border-[#A70100] bg-dark p-2 rounded-md;">
          <h5 className="name">Great Western No. 47</h5>
          <p className="info">986 Ouellette Avenue, Windsor</p>
          <p className="info">December 1, 2022 at 7:30 pm Blue Room</p>
        </div>
        <div
          className="border-b-2 border-[#A70100] bg-dark p-2 rounded-md;"
          border-indigo-500
        >
          <h5 className="name">Harmony No. 579</h5>
          <p className="info">986 Ouellette Avenue, Windsor</p>
          <p className="info">Saturday December 3, 2022 at 7:30 pm</p>
        </div>
        <div
          className="border-b-2 border-[#A70100] bg-dark p-2 rounded-md;"
          border-indigo-500
        >
          <h5 className="name">St. Andrews No. 642</h5>
          <p className="info">986 Ouellette Avenue, Windsor</p>
          <p className="info">Friday December 9, 2022 at 7:30 pm</p>
        </div>
        <div
          className="border-b-2 border-[#A70100] bg-dark p-2 rounded-md;"
          border-indigo-500
        >
          <h5 className="name">Napthali 413</h5>
          <p className="info">28 Queen Street North, Tilbury</p>
          <p className="info">December 13, 2022 at 7:30 pm</p>
        </div>
        <div
          className="border-b-2 border-[#A70100] bg-dark p-2 rounded-md;"
          border-indigo-500
        >
          <h5 className="name">Rose No. 500</h5>
          <p className="info">986 Ouellette Avenue, Windsor</p>
          <p className="info">December 14, 2022 at 7:30 pm Red Room</p>
        </div>
        <div
          className="border-b-2 border-[#A70100] bg-dark p-2 rounded-md;"
          border-indigo-500
        >
          <h5 className="name">Xenophon No. 448</h5>
          <p className="info">3 John Street, Leamington</p>
          <p className="info">December 15, 2022 at 7:30 pm</p>
        </div>
        <div className="border-b-2 border-[#A70100] bg-dark p-2 rounded-md; ">
          <h5 className="name ">Thistle Lodge No. 43</h5>
          <p className="info">68 Murray Street Amherstburg</p>
          <p className="info">December 27, 2022 at 8:00 pm</p>
        </div>
        <div className="border-b-2 border-[#A70100] bg-dark p-2 rounded-md;">
          <h5 className="name">St George’s No. 41</h5>
          <p className="info">29 Main Street W, Kingsville</p>
          <p className="info">January 5, 2023 at 7:30 pm</p>
        </div>
        <div
          className="border-b-2 border-[#A70100] bg-dark p-2 rounded-md;"
          border-indigo-500
        >
          <h5 className="name">Windsor No. 403</h5>
          <p className="info">986 Ouellette Avenue, Windsor</p>
          <p className="info">January 6, 2023 at 7:30 pm</p>
        </div>
        <div
          className="border-b-2 border-[#A70100] bg-dark p-2 rounded-md;"
          border-indigo-500
        >
          <h5 className="name">Border Cities No. 554</h5>
          <p className="info">986 Ouellette Avenue, Windsor</p>
          <p className="info">May 3, 2023 at 11:00 AM Blue Room</p>
        </div>
        <div
          className="border-b-2 border-[#A70100] bg-dark p-2 rounded-md;"
          border-indigo-500
        >
          <h5 className="name">Trinity No. 521</h5>
          <p className="info">986 Ouellette Avenue, Windsor</p>
          <p className="info">Saturday May 27, 2023 at 2:00 pm</p>
        </div>
        <div
          className="border-b-2 border-[#A70100] bg-dark p-2 rounded-md;"
          border-indigo-500
        >
          <h5 className="name">Leamington No. 290</h5>
          <p className="info">3 John Street, Leamington</p>
          <p className="info">February 21, 2023 at 7:30 pm</p>
        </div>
        <div
          className="border-b-2 border-[#A70100] bg-dark p-2 rounded-md;"
          border-indigo-500
        >
          <h5 className="name">Parvaim Central No. 395</h5>
          <p className="info">30 Laird Ave., Essex</p>
          <p className="info">June 7, 2023 at 7:30 pm</p>
        </div>
      </div>
    </div>
  );
};
export default InstallationDates;
