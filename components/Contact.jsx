import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit } = useForm();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative  text-center md:text-left md:flex-row max-w-7xl xl:px-10 justify-evenly items-center mx-auto px-4"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl ">
        Contact Us
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-xl md:text-4xl px-10 font-semibold text-center">
          Lets get in touch.{' '}
          <span className="decoration-[#A70100]/50 underline">
            Send us a Message
          </span>
        </h4>
        <form className="flex flex-col space-y-2 w-fit mx-auto px-4">
          <div className="flex space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
            name=""
            id=""
          />
          <button className="bg-[#A70100] py-5 px-10 rounded-md text-black font-bold">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};
export default Contact;
