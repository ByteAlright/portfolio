import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">My contact details:</p>
            <ul className="contact-links">
              <li className="contact-item">Email: vmaravic@gmail.com</li>
              <li className="contact-item">Phone: +4366706069898</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
