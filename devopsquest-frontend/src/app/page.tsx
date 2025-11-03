'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-4 neon-glow"
        >
          DevOpsQuest
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl mb-8 text-gray-300"
        >
          Level Up Your DevOps Skills — One Quest at a Time!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-x-4"
        >
          <Link href="/auth">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg neon-border transition duration-300">
              Login/Signup
            </button>
          </Link>
          <Link href="/worlds">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Explore Worlds
            </button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex justify-center space-x-8"
        >
          <div className="pipeline-glow w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-2xl">🔧</span>
          </div>
          <div className="pipeline-glow w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-2xl">⚙️</span>
          </div>
          <div className="pipeline-glow w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-2xl">🚀</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
