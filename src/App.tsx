
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { Landing } from "./pages/landing"
import { Layout } from './components/Layout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

const AppRoutes = () => {
  const location = useLocation();

  const noLayoutRoutes = ['/auth','/']
  const useLayout = !noLayoutRoutes.includes(location.pathname);

  return useLayout? (
   
     <Layout>
        <Routes>
          
          <Route
        path="/dashboard"
        element={<Dashboard/>}/>
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