// Importando a biblioteca firebase, instalada via 'yarn add firebase'
import firebase from 'firebase';

// Importando os seviços que irão ser utilizados do firebase
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Inicializando o app
firebase.initializeApp(firebaseConfig);

// Exportando funções
const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }
