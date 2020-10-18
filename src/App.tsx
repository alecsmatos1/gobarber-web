import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GLobalStyle from './styles/global';
import AppProvider from './hooks/index';
import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GLobalStyle />
  </Router>
);
export default App;
