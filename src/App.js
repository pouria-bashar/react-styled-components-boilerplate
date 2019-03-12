import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const HomePage = () => <div>Home</div>;

const App = () => (
  <Router>
    <Route path="/" component={HomePage} />
  </Router>
);
export default App;
