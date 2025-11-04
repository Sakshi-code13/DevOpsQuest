'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { useRouter } from 'next/navigation'

// Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default function AuthPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const signInWithProvider = async (provider: any) => {
    setLoading(true)
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      // Send user data to backend
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firebaseId: user.uid,
          email: user.email,
          displayName: user.displayName,
        }),
      })

      if (response.ok) {
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Auth error:', error)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-8 neon-glow">Join DevOpsQuest</h2>
        <div className="space-y-4">
          <button
            onClick={() => signInWithProvider(new GoogleAuthProvider())}
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
          >
            <span className="mr-2">🔥</span> Continue with Google
          </button>
          <button
            onClick={() => signInWithProvider(new GithubAuthProvider())}
            disabled={loading}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
          >
            <span className="mr-2">🐙</span> Continue with GitHub
          </button>
        </div>
        {loading && <p className="text-center mt-4">Loading...</p>}
      </motion.div>
    </div>
  )
}
