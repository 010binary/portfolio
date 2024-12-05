'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Home } from 'lucide-react';
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

const codeVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-700/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <motion.div className="text-center lg:text-left" variants={containerVariants}>
            <motion.h1 
              variants={itemVariants}
              className="text-7xl md:text-9xl font-bold text-white mb-4"
            >
              404
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-medium text-purple-400 mb-6"
            >
              Page Not Found
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-lg mb-8"
            >
              Oops! The page you're looking for seems to have vanished into the digital void.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors"
              >
                Go Back
              </button>
            </motion.div>
          </motion.div>

          {/* Code Preview */}
          <motion.div
            variants={codeVariants}
            className="hidden lg:block bg-gray-900/50 backdrop-blur-sm rounded-lg border border-purple-500/20 p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <pre className="font-mono text-sm text-purple-300">
              <code>{`// 404 Error Handler
function findPage(path) {
  try {
    const page = await loadPage(path);
    return page;
  } catch {
    return {
      status: 404,
      message: "Page Not Found",
      suggestion: "Try going back home"
    };
  }
}`}</code>
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
