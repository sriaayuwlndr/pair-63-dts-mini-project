import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import NotFoundPage from './containers/NotFoundPage';
import DetailMoviePage from './containers/DetailMoviePage';
import PlayMoviePage from './containers/PlayMoviePage';
import MovieTrending from './containers/MovieTrending';
import MovieUpComing from './containers/MovieUpComing';
import MoviePopular from './containers/MoviePopular';
import SuccessRegister from './containers/SuccessRegister';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/trending" element={<MovieTrending />}></Route>
        <Route path="/upcoming" element={<MovieUpComing />}></Route>
        <Route path="/popular" element={<MoviePopular />}></Route>
        <Route path="login" element={<ProtectedRoute loginOnly={false}><LoginPage /></ProtectedRoute>}></Route>
        <Route path="register" element={<ProtectedRoute loginOnly={false}><RegisterPage /></ProtectedRoute> } />
        <Route path="detail/:id" element={<ProtectedRoute><DetailMoviePage /></ProtectedRoute>} />
        <Route path="play/:id" element={<ProtectedRoute><PlayMoviePage /></ProtectedRoute>} />
        <Route path="*" element={<NotFoundPage /> }></Route>
        <Route path="success" element={<SuccessRegister /> } />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
