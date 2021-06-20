import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCiybQIdPgmr7TflCD4n-_E7PAWC3cNnMA',
  authDomain: 'tempgram-e3f79.firebaseapp.com',
  projectId: 'tempgram-e3f79',
  storageBucket: 'tempgram-e3f79.appspot.com',
  messagingSenderId: '635425378025',
  appId: '1:635425378025:web:b40706af695fc9c28e2a78'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
