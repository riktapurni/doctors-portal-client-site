import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
// React Bootstrap css link
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
 import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './Pages/Dashboard/Payment/Payment';
import AdminRoute from './Pages/Login/Login/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            
          </Route>
          <Route exact path="/home" element={<Home />}>
          </Route>
          <Route exact path="/appointment" element={<PrivateRoute><Appointment /> </PrivateRoute>}>
          </Route>
          <Route  path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}>
            </Route>
                    <Route path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>}>
                    </Route>
                    <Route  path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}>
                    </Route>
                    <Route path={`/dashboard/addDoctor`} element={<AdminRoute><AddDoctor></AddDoctor></AdminRoute>}>
                    </Route>
          </Route>
          <Route exact path="/login"  element={<Login />}>
           
          </Route>
          <Route exact path="/register" element={<Register />}>
            
          </Route>
          
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
