import React from 'react';
import { Link } from 'react-router-dom';
// import { Navbar } from '../components/Navbar';
import { BookOpenText, Bot, CalendarCheck, HeartPulse, ShieldAlert, Stethoscope } from 'lucide-react';
import service from "../../assets/serv.jpg"
import {motion} from "framer-motion"

const Services: React.FC = () => {
  const services = [
    {
      title:"AI Health Assistant",
      icon:<Bot className='w-12 h-12 text-blue-500'/>,
      text:"Get instant symptom analysis and wellness guidance powered by Afya Connect's intelligent AI. Quick, secure and available 24/7 to help you understand your health before consulting a professional"
    },
    {
      title:"Online Consultancy",
      icon:<Stethoscope className='w-12 h-12 text-blue-500'/>,
      text:"Get instantlty with verified doctors and specialists through secure video consultations. Discuss symptoms,receive prescription, and manage follow-ups all in one place."
    },
    {
      title: "Appointment Booking",
      icon: <CalendarCheck className="w-12 h-12 text-purple-500" />,
      text: "Easily schedule appointments with trusted healthcare providers. Select a specialist, pick your time, and confirm your booking — no queues, no delays.",
    },
    {
      title: "Health Blogs & Insights",
      icon: <BookOpenText className="w-12 h-12 text-pink-500" />,
      text: "Stay informed with expert-written blogs on wellness, nutrition, lifestyle, and preventive care — empowering you with knowledge for a healthier life.",
    },
    {
      title: "Patient-Centered Support",
      icon: <ShieldAlert className="w-12 h-12 text-red-500" />,
      text: "Our dedicated support ensures every user receives compassionate, personalized assistance — making your healthcare journey smooth and stress-free.",
    },
    {
      title: "Smart Health Tracking",
      icon: <HeartPulse className="w-12 h-12 text-sky-500" />,
      text: "Track your health progress with integrated monitoring tools and stay on top of your wellness goals using our innovative platform features.",
    },
  ]


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      {/* <section className="sticky top-0">
      <Navbar/>
  </section> */}
      <section className='relative py-20 text-center bg-cover bg-center '
      style={{backgroundImage:`url(${service})`}}
      >
<div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h1 className="text-5xl font-bold text-blue-300 mb-6">Our Services</h1>
          <p className="text-white font-bold text-lg leading-relaxed">
            Discover the key features that make <span className="text-black font-semibold">Afya Check</span> a trusted
            platform — powered by technology, guided by care.
          </p>
        </motion.div>
      </section>

 
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-300">What We Offer</h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
            From AI assistance to expert consultations, Afya Check ensures healthcare is always within reach — smart, simple, and personal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white  rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-80 text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl text-blue-400 font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

     
      <section className="bg-blue-200  text-white py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to Experience Smarter Healthcare?
          </h2>
          <p className="text-lg mb-8">
            Start your journey today — get AI insights, consult doctors, and
            book your next appointment easily.
          </p>
          <div className="flex justify-center gap-4">
            {/* <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Try AI Assistant
            </button> */}
            <Link 
                to="/auth"
            className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
              Book Appointment
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services; 