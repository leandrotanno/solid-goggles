import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TannoOnline from '@/components/TannoOnline';
import Curriculo from '@/components/Curriculo';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TannoOnline />} />
        <Route path="/curriculo" element={<Curriculo />} />
      </Routes>
    </Router>
  );
};

export default App;