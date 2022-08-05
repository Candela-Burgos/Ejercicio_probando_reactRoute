import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
// import { Home, About, Characters } from './pages/index';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Characters } from './pages/Characters/Characters';
import { Error404 } from './pages/Error404/Error404';
import { CardInfo } from './components/CardInfo/CardInfo';
import { Login } from './components/Login/Login';
import { Profile } from './pages/Profile/Profile';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('');

  return (
    <>
      <Navbar setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CardInfo />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
