import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/DashBoard';
import FormPage from './pages/formPage';
import MainLayout from './layout/MainLayout';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page (Public) */}
        <Route path="/" element={<LoginPage />} />

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
