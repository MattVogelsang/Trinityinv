import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Not Found</h2>
        <p className="text-slate-600 mb-4">Could not find the requested resource</p>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

