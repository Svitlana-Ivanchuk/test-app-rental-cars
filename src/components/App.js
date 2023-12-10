import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from 'pages/HomePage';
import CatalogPage from 'pages/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage';
import { SharedLayout } from './SharedLayout/SharedLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<h1>No such page exists</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
