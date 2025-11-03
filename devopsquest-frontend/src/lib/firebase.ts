import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBbpqxQ7ssxFTrOG-bgd4ddK4nSnZOJ1ag",
  authDomain: "devopsquest-demo.firebaseapp.com",
  projectId: "devopsquest-demo",
  storageBucket: "devopsquest-demo.firebasestorage.app",
  messagingSenderId: "63445908739",
  appId: "1:63445908739:web:795c126648f39403a13d36",
  measurementId: "G-81SCF7H622"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const githubProvider = new GithubAuthProvider()
