import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBs2UmhLWp-YpoLi_prFm_pO2ce_NVjNls',
  authDomain: 'crwn-db-66741.firebaseapp.com',
  projectId: 'crwn-db-66741',
  storageBucket: 'crwn-db-66741.appspot.com',
  messagingSenderId: '414685033015',
  appId: '1:414685033015:web:58bc7eb0067d10e61245b2',
  measurementId: 'G-0C6FHNNPXQ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfilDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShop = await userRef.get();

  if (!snapShop.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
