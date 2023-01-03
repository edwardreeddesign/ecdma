import Head from 'next/head';
import About from '../components/About';
import AboutBanner from '../components/AboutBanner';
import BeOne from '../components/BeOne';
import Contact from '../components/Contact';
import District from '../components/District';
import Events from '../components/Events';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Lodges from '../components/Lodges';

export default function Home() {
  return (
    <Layout>
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="district" className="snap-start">
        <District />
      </section>
      <section className="h-screen snap-start">
        <AboutBanner />
      </section>

      <section id="lodges" className="snap-start">
        <Lodges />
      </section>

      <section className="h-screen snap-start">
        <BeOne />
      </section>

      <section id="events" className="snap-start">
        <Events />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </Layout>
  );
}
