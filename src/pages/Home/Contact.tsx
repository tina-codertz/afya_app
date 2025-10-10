// import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import gep from "../../assets/gep.jpg"

export const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* <section className="sticky top-0">
      <Navbar/>
  </section> */}
      <section
        className="relative bg-cover bg-center py-20 text-white"
        style={{
          backgroundImage:
            `url(${gep})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 text-center max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-200">
            We’re here to help. Reach out to us for appointments, consultations, or any questions you may have.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <MapPin className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Address</h3>
              <p>Mwenge, Dar es Salaam, Tanzania</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <Phone className="w-6 h-6 text-green-500 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p>+255 743 490 182 (General)</p>
              <p>+255 743 490 182 (Emergency)</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <Mail className="w-6 h-6 text-pink-500 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p>info@afyacheck.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <Clock className="w-6 h-6 text-purple-500 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
              <p>Mon–Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM – 2:00 PM | Sun: Closed</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 mt-4"
          >
            <Facebook className="w-6 h-6 text-blue-700 mt-1" />
            <Instagram className="w-6 h-6 text-pink-600 mt-1" />
            <Twitter className="w-6 h-6 text-blue-400 mt-1" />
            <p className="ml-2">Follow us on social media</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Phone (Optional)"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <iframe
          title="Afya Check Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.111111!2d39.277111!3d-6.805555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDMuMCJTIDM5wrExNSc1NS4wIlc!5e0!3m2!1sen!2stz!4v1702136800000!5m2!1sen!2stz"
          width="100%"
          height="400"
          className="rounded-2xl shadow-lg"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};
