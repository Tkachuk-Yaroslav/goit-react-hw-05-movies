import { NavLink, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<div>HOME PAGE</div>} />
        <Route path="/movies" element={<div>MOVIES PAGE</div>} />
      </Routes>
    </div>
  );
};

export default App;
