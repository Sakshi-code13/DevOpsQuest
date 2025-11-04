'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const worlds = [
  {
    id: 'sourceControl',
    name: 'Source Control',
    description: 'Master Git and version control',
    icon: '🔀',
    color: 'from-green-500 to-green-700',
    progress: 80,
    unlocked: true,
  },
  {
    id: 'ciCd',
    name: 'CI/CD',
    description: 'Build automated pipelines',
    icon: '⚙️',
    color: 'from-blue-500 to-blue-700',
    progress: 60,
    unlocked: true,
  },
  {
    id: 'cloudContainers',
    name: 'Cloud & Containers',
    description: 'Deploy with Docker and Kubernetes',
    icon: '🐳',
    color: 'from-purple-500 to-purple-700',
    progress: 40,
    unlocked: true,
  },
  {
    id: 'observability',
    name: 'Observability',
    description: 'Monitor and troubleshoot systems',
    icon: '📊',
    color: 'from-red-500 to-red-700',
    progress: 20,
    unlocked: false,
  },
]

export default function WorldsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 neon-glow"
        >
          Choose Your World
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {worlds.map((world, index) => (
            <motion.div
              key={world.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-gray-800 p-8 rounded-lg shadow-2xl overflow-hidden ${
                !world.unlocked ? 'opacity-50' : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${world.color} opacity-20`}></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4">{world.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{world.name}</h3>
                <p className="text-gray-300 mb-4">{world.description}</p>

                {world.unlocked ? (
                  <>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{world.progress}%</span>
                      </div>
                      <div className="bg-gray-700 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${world.color} h-2 rounded-full`}
                          style={{ width: `${world.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <Link href={`/worlds/${world.id}`}>
                      <button className={`w-full bg-gradient-to-r ${world.color} hover:opacity-90 text-white font-bold py-3 px-4 rounded transition duration-300`}>
                        Enter World
                      </button>
                    </Link>
                  </>
                ) : (
                  <div className="text-center">
                    <p className="text-yellow-400 font-bold">Locked</p>
                    <p className="text-sm text-gray-400">Complete previous worlds to unlock</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/dashboard">
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              ← Back to Dashboard
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
