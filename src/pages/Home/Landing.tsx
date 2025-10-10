import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Phone,
  User,
  Stethoscope,
  HeartPulse,
} from "lucide-react";
// import { Navbar } from "../components/Navbar";

export const Landing: React.FC = () => {
  return (
    <>
     {/* <section className="sticky top-0 "> 
   <Navbar/>
    </section> */}
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-32 lg:pt-0  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Health,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Our Priority
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect with trusted healthcare professionals and access quality
              medical services from the comfort of your home. Your wellness
              journey starts here.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/auth">
                <button className="bg-green-500 text-white px-5 py-3 rounded-lg flex items-center group hover:bg-green-600 transition-colors">
                  <Calendar className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Explore Services
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-blue-500 text-white px-5 py-3 rounded-lg flex items-center group hover:bg-blue-600 transition-colors">
                  <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute  bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare professionals"
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Afya Connect?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're committed to providing exceptional healthcare services with a
            focus on patient care, medical excellence, and innovative treatment
            approaches.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <User className="mb-4 text-blue-500 w-12 h-12" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Expert Doctors
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access top healthcare professionals specialized in multiple
              medical fields.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <Stethoscope className="mb-4 text-green-500 w-12 h-12" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Advanced Equipment
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              State-of-the-art medical tools and technology for precise
              diagnosis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <HeartPulse className="mb-4 text-red-500 w-12 h-12" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Personalized Care
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Individualized treatment plans tailored to each patient’s needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who trust Afya Connect for their
            healthcare needs. Book your appointment today and experience quality
            care.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/auth">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
                Explore Us
                <Calendar className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};
