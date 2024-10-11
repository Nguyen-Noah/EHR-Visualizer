import AreaPage from './pages/AreaPage';
import BarPage from './pages/BarPage';
import BubblePage from './pages/BubblePage';
import DoughnutPage from './pages/DoughnutPage';
import Header from './components/header';
import LinePage from './pages/LinePage';
import PolarPage from './pages/PolarPage';
import RadarPage from './pages/RadarPage';
import ScatterPage from './pages/ScatterPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/area" element={<AreaPage />} />
        <Route path="/bar" element={<BarPage />} />
        <Route path="/bubble" element={<BubblePage />} />
        <Route path="/doughnut" element={<DoughnutPage />} />
        <Route path="/line" element={<LinePage />} />
        <Route path="/polar" element={<PolarPage />} />
        <Route path="/radar" element={<RadarPage />} />
        <Route path="/scatter" element={<ScatterPage />} />
      </Routes>
    </>
  )
}