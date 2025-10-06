import React from "react";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";

const About = () => {
  const cardData = [
    {
      title: "Our Mission",
      text: "To simplify access to quality healthcare through innovation and technology, ensuring everyone gets medical attention easily and quickly.",
      icon:""
    },
    {
      title: "Our Vision",
      text: "To build a connected healthcare ecosystem where patients and professionals collaborate for better wellness and trust.",
    },
    {
      title: "Our Values",
      text: "Trust, accessibility, innovation, and compassion guide everything we do at Afya Check.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Intro Section */}
      <section className="text-center max-w-4xl mx-auto px-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Afya Check
          </h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            Afya Check is a digital health platform that connects patients with
            trusted medical professionals, enabling quick health checkups,
            consultations, and appointment bookings—all in one place. Our
            mission is to make healthcare more accessible, efficient, and
            patient-centered.
          </p>
        </motion.div>
      </section>

   
      <section className="mt-20 mb-16 bg-gray-100 p-6">
        <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white mb-12">
          About Us
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 w-full sm:w-80 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
            >
              <h3 className="text-2xl font-semibold text-blue-500 mb-3">
                {card.title}
              </h3>
              <span>{card.icon}</span>
              <p className="text-gray-600 dark:text-gray-300">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
