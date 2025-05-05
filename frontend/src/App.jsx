import { Route, Routes} from 'react-router-dom';

import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import HomePage from "./pages/home/HomePage";
import NotificationPage from './pages/notification/NotificationPage';
import ProfilePage from './pages/profile/ProfilePage';    

import Sidebar from './components/common/Sidebar';
import RightPanel from './components/common/RightPanel';

function App() {
  return (
    <div className='flex max-w-6xl mx-auto'>
      {/* Common component, bc it's not wrapped with Routes */}
      <Sidebar></Sidebar> 
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
        <Route path='/notifications' element={<NotificationPage />}></Route>
        <Route path='/profile/:username' element={<ProfilePage />}></Route>
      </Routes>
      <RightPanel></RightPanel>
    </div>
  )
}

export default App;
