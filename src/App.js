import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import UserDetails from './pages/UserDetails/UserDetails';
import Navbar from './components/Navbar';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users/:id" element={<UserDetails />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
