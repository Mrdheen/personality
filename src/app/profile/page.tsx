'use client'; // Mark this as a Client Component
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Match {
  name: string;
  score: number;
}

export default function Profile() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch matches from the backend
    axios.get('/api/get-matches')
      .then((response) => {
        setMatches(response.data.matches);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching matches:', error);
        setError('Failed to load matches. Please try again.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Your Profile</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="mb-2"><span className="font-semibold">Name:</span> John Doe</p>
        <p className="mb-4">
          <span className="font-semibold">Personality:</span> Introvert, Creative, Adventurous
        </p>
        
        <h2 className="text-xl font-bold mb-4">Matches</h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading matches...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : matches.length > 0 ? (
          matches.map((match, index) => (
            <div key={index} className="mb-3 p-3 bg-gray-50 rounded-lg">
              <p><span className="font-semibold">{match.name}</span> - Compatibility: {match.score}%</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No matches found.</p>
        )}
      </div>
    </div>
  );
}
