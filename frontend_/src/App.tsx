import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

import { UserProvider } from './contexts/UserContext';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';

// import useToken from './hooks/useToken';

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

// function ProtectedRouteGuard({ children }) {
//   const token = useToken();

//   if (!token) {
//     return <Navigate to="/sign-in" />;
//   }

//   return <>
//     {children}
//   </>;
// }
