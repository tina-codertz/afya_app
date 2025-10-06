
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


import { Layout } from './components/Layout';
import Auth from './pages/Auth';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardHome from './pages/DashboardHome';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/dashboard/Doctors';
import BookAppointment from './pages/dashboard/BookAppointment';
import Blog from './pages/dashboard/Blog';
import Contact from './pages/Contact';
import GeneralService from './pages/dashboard/services/General';
import SpecialistService from './pages/dashboard/services/Specialist';

import MentalHealthService from './pages/dashboard/services/MentalHealth';
import { Landing } from './pages/Landing';
// import AfyaChat from './pages/services/AI';



const App = () => {
  return (
    <Router>
    <Layout>
        <Routes>  
           <Route path="/" element={<Landing />} />
           <Route path="/auth" element={<Auth />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/services" element={<Services/>} />

        <Route
        path="/dashboard"
        element={<Dashboard/>}>
            <Route index element={<DashboardHome/>} />
            <Route path="services/general" element={<GeneralService/>} />
            <Route path="services/specialist" element={<SpecialistService/>} />
            {/* <Route path="services/ai" element={<AfyaChat/>} /> */}
            <Route path="services/mental-health" element={<MentalHealthService/>} />
            <Route path="doctors" element={<Doctors/>} />
            <Route path="book-appointment" element={<BookAppointment/>} />
            <Route path="blog" element={<Blog/>} />
          </Route>
   
        </Routes>
    
        </Layout>
        </Router>

  
  )
}
export default App



 
