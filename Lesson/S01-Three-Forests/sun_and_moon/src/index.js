// These are libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Importing custom component
import App from './App.jsx';

/* Creating a component */
//const App = () => {
//   return (
//    <div>My App</div>
//    );
//}

// Inject into our web page
ReactDOM.render( <App />, document.getElementById('root') );

