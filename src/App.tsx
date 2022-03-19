import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from './component/create';
import Detail from './screen/detail';
import Favorite from './screen/favorite';
import Home from './screen/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/src/screen/favorite/index.tsx" element={<Favorite />} />
          <Route path="/src/screen/detail/index.tsx" element={<Detail />} />
          <Route path="/src/component/create/index.tsx" element={<CreateNote/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
