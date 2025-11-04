'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface User {
  _id: string
  displayName: string
  xp: number
  level: number
  avatar: string
  worldProgress: {
    sourceControl: number
    ciCd: number
    cloudContainers: number
    observability: number
  }
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [dailyQuest, setDailyQuest] = useState(false)

  useEffect(() => {
    // Fetch user data (mock for now)
    setUser({
      _id: '1',
      displayName: 'DevOps Warrior',
      xp: 2500,
      level: 3,
      avatar: 'jenkins-knight',
      worldProgress: {
        sourceControl: 80,
        ciCd: 60,
        cloudContainers: 40,
        observability: 20,
      },
    })
  }, [])

  const spinWheel = () => {
    setDailyQuest(true)
    // Simulate wheel spin and XP gain
    setTimeout(() => {
      alert('You gained 50 XP!')
    }, 2000)
  }

  if (!user) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8 neon-glow"
        >
          Welcome back, {user.displayName}!
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* User Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 p-6 rounded-lg shadow-2xl"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">⚔️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Level {user.level}</h3>
              <p className="text-gray-300">XP: {user.xp}</p>
              <div className="mt-4 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${(user.xp % 1000) / 10}%` }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* World Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 p-6 rounded-lg shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-4">World Progress</h3>
            {Object.entries(user.worldProgress).map(([world, progress]) => (
              <div key={world} className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="capitalize">{world.replace(/([A-Z])/g, ' $1')}</span>
                  <span>{progress}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <Link href="/worlds">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Explore Worlds
              </button>
            </Link>
          </motion.div>

          {/* Daily Quest Wheel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 p-6 rounded-lg shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-4 text-center">Daily Quest Wheel</h3>
            <div className="flex justify-center mb-4">
              <motion.div
                animate={dailyQuest ? { rotate: 360 } : {}}
                transition={{ duration: 2 }}
                className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center cursor-pointer"
                onClick={spinWheel}
              >
                <span className="text-4xl">🎡</span>
              </motion.div>
            </div>
            <button
              onClick={spinWheel}
              disabled={dailyQuest}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              {dailyQuest ? 'Quest Completed!' : 'Spin for XP'}
            </button>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Link href="/leaderboard">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded">
              🏆 Leaderboard
            </button>
          </Link>
          <Link href="/quests">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded">
              🎯 Start Quest
            </button>
          </Link>
          <Link href="/feedback">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded">
              💬 Feedback
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
