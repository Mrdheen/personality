'use client'; // Mark this as a Client Component
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface QuizAnswers {
  [key: string]: string; // Answers are stored dynamically based on question index
}

interface Match {
  name: string;
  score: number;
}

export default function Quiz() {
  const { register, handleSubmit } = useForm<QuizAnswers>();
  const [result, setResult] = useState<Match[] | null>(null);
  const [loading, setLoading] = useState(false);

  const questions = [
    "I enjoy spending time in large groups of people.",
    "I prefer planning over spontaneity.",
    "I consider myself a creative person.",
  ];

  const onSubmit = async (data: QuizAnswers) => {
    setLoading(true);

    try {
      // Send quiz data to the backend
      const response = await axios.post('/api/submit-quiz', data);
      setResult(response.data.matches);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Personality Quiz</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <p className="mb-2">{question}</p>
            <select
              {...register(`question${index}`)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="1">Strongly Disagree</option>
              <option value="2">Disagree</option>
              <option value="3">Neutral</option>
              <option value="4">Agree</option>
              <option value="5">Strongly Agree</option>
            </select>
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex justify-center items-center"
          disabled={loading}
        >
          {loading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      {result && (
        <div className="mt-6 max-w-md mx-auto">
          <h2 className="text-xl font-bold mb-4">Your Matches</h2>
          {result.map((match, index) => (
            <div key={index} className="mb-3 p-3 bg-gray-50 rounded-lg">
              <p><span className="font-semibold">{match.name}</span> - Compatibility: {match.score}%</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
