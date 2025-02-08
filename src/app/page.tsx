"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6"
    >
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Personality Matcher</h1>
      <p className="text-lg mb-8 text-center">Find your perfect match based on personality!</p>
      <Link
        href="/quiz"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        Take the Quiz
      </Link>
    </motion.div>
  );
}
