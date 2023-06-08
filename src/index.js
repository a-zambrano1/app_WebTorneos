import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App/App';
import reportWebVitals from './web/reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase/firebase-config';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer position="top-center"
      autoClose={1300}
      hideProgressBar={true}
      newestOnTop={false}
      draggable={false}
      closeOnClick
      pauseOnHover/>
          <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <div className='pag-bienvenida'><link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Outfit"/>
          <App />
        </div>
      </FirebaseAppProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
