import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';

import Mynft from './routes/Mynft';
import CreatorDashboard from './routes/CreatorDashboard';
import CreateNFT from './routes/CreateNFT';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="my-nft" element={<Mynft />} />
      <Route path="creator-dashboard" element={<CreatorDashboard />} />
      <Route path="create-item" element={<CreateNFT />} />
    </Routes>
    {/* <App /> */}
  </BrowserRouter>,
  document.getElementById('root')
);

