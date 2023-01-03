/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import temples from '../../data/lodges';

const LodgePage = ({ lodge }) => {
  return (
    <Layout title={lodge?.name}>
      <div className="bg-primaryDark text-white h-screen w-screen flex  space-y-0 items-center justify-center text-center overflow-hidden relative px-5">
        <Link href="/#lodges" className="absolute top-5 left-5">
          <button className="heroButton">Back to Lodges</button>
        </Link>
        <div className="flex">
          <img
            src={lodge?.mainImage}
            alt={lodge?.name}
            className="h-[640px] rounded-xl object-cover"
          />
        </div>
        <div>
          <h1>{lodge?.name} A.F. & A.M.</h1>
          <div>
            <h2>A Brief History</h2>
            <p>{lodge?.history}</p>
          </div>
          <div>
            <h2>Meetings</h2>
            <p>{lodge?.meeting}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = ({ params }) => {
  function getLodgeById(slug) {
    const temple = temples.find(temple =>
      temple.lodges.some(lodge => lodge.slug === params.slug)
    );
    return temple.lodges.filter(lodge => lodge.slug === slug);
  }

  const lodge = getLodgeById(params.slug);

  return {
    props: {
      lodge: lodge[0],
    },
  };
};

export const getStaticPaths = () => {
  const paths = temples
    .map(temple => {
      return temple.lodges
        .filter(lodge => lodge.slug === lodge.slug)
        .map(temple => ({
          params: { slug: temple.slug },
        }));
    })
    .flat();

  return { paths: paths, fallback: true };
};
export default LodgePage;
