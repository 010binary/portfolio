'use client'

import { motion } from 'framer-motion';
import { RefreshCcw, Home, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-700/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <motion.div
        className="relative z-10 max-w-md w-full bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="flex flex-col items-center text-center space-y-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <AlertCircle className="w-16 h-16 text-purple-400" />
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl font-bold text-white"
          >
            Oops! Something went wrong
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-gray-300"
          >
            {error.message || "An unexpected error occurred while processing your request."}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            <button
              onClick={reset}
              type='button'
              className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors w-full sm:w-auto"
            >
              <RefreshCcw className="w-4 h-4" />
              Try Again
            </button>

            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors w-full sm:w-auto"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </motion.div>
          
          {error.digest && (
            <motion.p 
              variants={itemVariants}
              className="text-sm text-gray-400"
            >
              Error ID: {error.digest}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
