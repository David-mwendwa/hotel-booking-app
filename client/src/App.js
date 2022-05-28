import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protected from './components/PrivateRoute';
import Home from './booking/Home';
import Register from './auth/Register';
import Login from './auth/Login';
import TopNav from './components/TopNav';
import Dashboard from './user/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route
          exact
          path='/dashboard'
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
