import { render } from 'react-dom';
import routes from './routes';
import * as firebase from 'firebase';
import './index.css';

const config = {
  apiKey: "AIzaSyDtJa1TM6SJcNPMfrNcyp8EhjQx9OWFdDo",
  authDomain: "createchefs.firebaseapp.com",
  databaseURL: "https://createchefs.firebaseio.com",
  storageBucket: "createchefs.appspot.com",
  messagingSenderId: "985125118577"
};
firebase.initializeApp(config);

render(routes, document.getElementById('root'));
