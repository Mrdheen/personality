import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Personality Matcher
        </Link>
        <div>
          <Link href="/quiz" className="text-white mr-4">
            Quiz
          </Link>
          <Link href="/profile" className="text-white">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
