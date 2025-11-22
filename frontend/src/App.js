import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/DashBoard';
import FormPage from './pages/formPage';
import MainLayout from './layout/MainLayout';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './routes/ProtectedRoute';
import './styles/Loginform.css'
import LoginForm from './components/LoginForm'
import ProviderDashboard from './components/provider-dashboard' 
import PatientPortal from './components/patient-portal'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page (Public) */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* The components the user is redirected to */}
        <Route path="/provider-dashboard" element={<ProviderDashboard />} />
        <Route path="/patient-portal" element={<PatientPortal />} />
        {/* Dashboard (Protected) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* FormPage (Protected) */}
        <Route
          path="/formpage"
          element={
            <ProtectedRoute>
              <MainLayout>
                <FormPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
