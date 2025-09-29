
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { Landing } from "./pages/landing"
import { Layout } from './components/Layout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import DashboardHome from './pages/DashboardHome';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import BookAppointment from './pages/BookAppointment';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import GeneralService from './pages/services/General';
import SpecialistService from './pages/services/Specialist';
import AIService from './pages/services/AI';
import MentalHealthService from './pages/services/MentalHealth';

const AppRoutes = () => {
  const location = useLocation();

  const noLayoutRoutes = ['/auth','/']
  const useLayout = !noLayoutRoutes.includes(location.pathname);

  return useLayout? (
   
     <Layout>
        <Routes>
          
          <Route
        path="/dashboard"
        element={<Dashboard/>}>
            <Route index element={<DashboardHome/>} />
            <Route path="about" element={<About/>} />
            <Route path="services" element={<Services/>} />
            <Route path="services/general" element={<GeneralService/>} />
            <Route path="services/specialist" element={<SpecialistService/>} />
            <Route path="services/ai" element={<AIService/>} />
            <Route path="services/mental-health" element={<MentalHealthService/>} />
            <Route path="doctors" element={<Doctors/>} />
            <Route path="book-appointment" element={<BookAppointment/>} />
            <Route path="blog" element={<Blog/>} />
            <Route path="contact" element={<Contact/>} />
          </Route>
        </Routes>
    
        </Layout>
  ):
  (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}

export default function App(){
  return(
    <Router>
      <AppRoutes/>
    </Router>
  )
}