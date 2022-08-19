// const firebaseConfig = {
//   apiKey: "AIzaSyAxtJqUtPsZV7reP0PkK7MBf7KlfUwkc8w",
//   authDomain: "cointrack-ayush.firebaseapp.com",
//   projectId: "cointrack-ayush",
//   storageBucket: "cointrack-ayush.appspot.com",
//   messagingSenderId: "344535800277",
//   appId: "1:344535800277:web:48f94b8a17a7698dc1055c",
//   measurementId: "G-60KB9VYK7Y"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId:process.env.REACT_APP_MEASUREMENT_ID
};

export default firebaseConfig;
