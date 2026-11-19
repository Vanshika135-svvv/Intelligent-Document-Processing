import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup({ onAuthSuccess }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in your full name, email address, and password.');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/signup',
        { fullName: fullName.trim(), email: email.trim(), password },
        { timeout: 4000 }
      );
      if (res.data?.token) {
        localStorage.setItem('token', res.data.token);
      }
      if (onAuthSuccess) {
        onAuthSuccess(res.data?.user || { fullName: fullName.trim(), email: email.trim() });
      }
      navigate('/dashboard');
    } catch (err) {
      // Fallback for offline/local demo flow if backend isn't running
      if (!err.response) {
        if (onAuthSuccess) {
          onAuthSuccess({ fullName: fullName.trim(), email: email.trim() });
        }
        navigate('/dashboard');
      } else {
        setError(err.response?.data?.message || 'Could not create account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-slate-900/95 border border-slate-800 rounded-2xl p-7 sm:p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-1.5">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Create an account
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Team Aegis AI — Document Intelligence
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="px-3.5 py-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div className="space-y-1.5">
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold text-slate-300"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              autoComplete="name"
              className="w-full bg-slate-950 text-white placeholder:text-slate-500 border border-slate-700/90 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl px-4 py-2.5 text-sm outline-none transition"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-slate-300"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full bg-slate-950 text-white placeholder:text-slate-500 border border-slate-700/90 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl px-4 py-2.5 text-sm outline-none transition"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="block text-xs font-semibold text-slate-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              autoComplete="new-password"
              className="w-full bg-slate-950 text-white placeholder:text-slate-500 border border-slate-700/90 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl px-4 py-2.5 text-sm outline-none transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-sm py-3 rounded-xl shadow-md shadow-indigo-600/30 transition"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        {/* Footer Links */}
        <div className="pt-2 space-y-2.5 text-center text-xs text-slate-400">
          <p>
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-indigo-400 hover:text-indigo-300 font-semibold transition"
            >
              Log in instead
            </Link>
          </p>
          <div>
            <Link
              to="/"
              className="text-slate-400 hover:text-slate-200 font-medium transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}