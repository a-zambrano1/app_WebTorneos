import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App/App';
import reportWebVitals from './web/reportWebVitals';
import micro from './media/micro.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='pag-bienvenida'><link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Outfit"/>
      <App />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
