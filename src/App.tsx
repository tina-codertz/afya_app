import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Layout } from "./components/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardHome from "./pages/dashboard/DashboardHome";

import Doctors from "./pages/dashboard/Doctors";
import BookAppointment from "./pages/dashboard/BookAppointment";
import Blog from "./pages/dashboard/Blog";

import GeneralService from "./pages/dashboard/services/General";
import SpecialistService from "./pages/dashboard/services/Specialist";

import MentalHealthService from "./pages/dashboard/services/MentalHealth";
import { Contact } from "./pages/Home/Contact";
import { Landing } from "./pages/Home/Landing";
import About from "./pages/Home/About";
import Services from "./pages/Home/Services";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AuthForm from "./pages/AuthPages/AuthForm";
// import AfyaChat from './pages/services/AI';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/auth" element={<AuthForm setUser={() => {}} />} />


     {/* protected routes */}
           <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="services/general" element={<GeneralService />} />
            <Route path="services/specialist" element={<SpecialistService />} />
            <Route
              path="services/mental-health"
              element={<MentalHealthService />}
            />
            <Route path="doctors" element={<Doctors />} />
            <Route path="book-appointment" element={<BookAppointment />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </Layout>
    
    </Router>
  );
};
export default App;
