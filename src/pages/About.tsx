import React from "react";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { HeartPulse, Eye, HandHeart, BrainCircuit, Stethoscope, PenTool } from "lucide-react";
import img from "../assets/66139.jpg"
import image from "../assets/image.jpg"

const About = () => {
  const cardData = [
    {
      title: "AI Health Assistant",
      text: "Afya Check uses Artificial Intelligence to offer smart health suggestions, symptom insights, and guidance for users seeking quick, reliable information before consulting a doctor.",
      icon: <BrainCircuit className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
    },
    {
      title: "Health Consultancy",
      text: "We connect patients with qualified medical professionals for personalized online or physical consultations — ensuring professional guidance is always one click away.",
      icon: <Stethoscope className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
    },
    {
      title: "Health Blogs & Tips",
      text: "Our regularly updated blog provides educational articles, wellness tips, and the latest health trends to help you stay informed and make healthier choices.",
      icon: <PenTool className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
    },
    {
      title: "Book Appointments Easily",
      text: "Afya Check simplifies appointment booking — letting you find specialists, choose time slots, and confirm visits in just a few taps.",
      icon: <HeartPulse className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
    },
  ];

  const coreValues = [
    {
      title: "Our Mission",
      text: "To simplify access to quality healthcare through innovation and technology, ensuring everyone receives medical attention quickly and efficiently.",
      icon: <HeartPulse className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
    },
    {
      title: "Our Vision",
      text: "To build a connected healthcare ecosystem where patients and professionals collaborate effortlessly for better wellness and trust.",
      icon: <Eye className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
    },
    {
      title: "Our Values",
      text: "Trust, accessibility, innovation, and compassion guide everything we do at Afya Check.",
      icon: <HandHeart className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

    
      <section
        className="relative bg-cover bg-center text-white py-28 px-6"
        style={{
          backgroundImage:
          `url(${image})`
         
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative max-w-4xl mx-auto text-center z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-blue-400">
            Afya Connect
          </h1>
          <p className="text-lg leading-relaxed text-white font-bold">
            Afya Connect is a modern digital health platform designed to make
            healthcare more accessible, efficient, and patient-centered.
            <br />
            Our platform offers <span className="font-semibold text-blue-200">
            AI assistance, health consultancy, educational blogs,</span> and
            <span className="font-semibold text-blue-200">
            {" "} appointment booking
            </span> — all in one trusted space.
          </p>
        </motion.div>
      </section>


         <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-gray-900 dark:text-white mb-12"
        >
          About Us
        </motion.h2>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {coreValues.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 w-full sm:w-80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
            >
              {card.icon}
              <h3 className="text-2xl font-semibold text-blue-300 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

    
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-blue-400 dark:text-white mb-12"
        >
          What Afya Connect Offers
        </motion.h2>

        <div className="max-w-6xl mx-auto  grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white  w-full sm:w-72 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
            >
              {card.icon}
              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>


   


      <section
        className="relative py-24 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            `url(${img})`,
        }}
      >
        <div className="absolute inset-0  bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8 text-blue-400"
          >
            Join Our Mission for Better Healthcare
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg mt-8 font-bold text-white"
          >
            Afya Check is more than a platform — it’s a movement toward a
            healthier, smarter, and more connected community.
          </motion.p>
          <motion.a
            href="/book"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-8 bg-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          >
           Join Us 
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default About;
