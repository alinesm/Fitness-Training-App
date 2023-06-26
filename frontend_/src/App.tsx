import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { UserProvider } from './contexts/UserContext';

import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import SignIn from './pages/SignIn';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import Enroll from './pages/Enroll';
import useToken from './hooks/useToken';
import { ReviewsRounded } from '@mui/icons-material';
import { privateDecrypt } from 'crypto';
import WorkoutsCreation from './components/WorkoutsCreation';

export default function App() {
  return (
    <>
      {/* <ToastContainer /> */}
      <UserProvider>
        {/* <Router> */}
        <Routes>
          <Route path='/enroll' element={<Enroll />} />
          <Route path='/sign-in' element={<SignIn />} />

          {/* <Route
              path='/dashboard'
              element={
                <ProtectedRouteGuard>
                  <Dashboard />
                </ProtectedRouteGuard>
              }
            > */}
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
          <Route path='/dashboard' element={<Home />} />
          {/* </Route> */}
        </Routes>
        {/* </Router> */}
      </UserProvider>
    </>
  );
}

{
  /* function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to='/sign-in' />;
  }

  return <>{children}</>;
} */
}
