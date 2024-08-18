import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/MainView/MainView';

// Main component renders the whole application
const App = () => {
  return <MainView />;
};

// Render the App component into the 'root' div in index.html
ReactDOM.render(<App />, document.getElementById('root'));
