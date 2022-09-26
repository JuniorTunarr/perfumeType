import firebase from "firebase/compat/app";
// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyAtSz1N-5r9yOfHcJSq985dfSciIDmdn8U",
  authDomain: "pertu-378a8.firebaseapp.com",
  projectId: "pertu-378a8",
  storageBucket: "pertu-378a8.appspot.com",
  messagingSenderId: "54774206137",
  appId: "1:54774206137:web:53204eb484669ea7bf9568",
  measurementId: "G-YL2ZP098EY",
  databaseURL:
    "https://pertu-378a8-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

//사용 방법입니다.
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const firebase_db = firebase.database();
