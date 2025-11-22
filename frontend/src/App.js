import './App.css';
import './styles/Loginform.css'
import LoginForm from './components/LoginForm'
import ProviderDashboard from './components/provider-dashboard' 
import PatientPortal from './components/patient-portal'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* The components the user is redirected to */}
        <Route path="/provider-dashboard" element={<ProviderDashboard />} />
        <Route path="/patient-portal" element={<PatientPortal />} />
        
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
    </div>
  );
  // return (
  //   <div className="App">
  //     <LoginForm />
  //   </div>
  // )
}

export default App;
