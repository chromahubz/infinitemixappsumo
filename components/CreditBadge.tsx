'use client';

import { useEffect, useState } from 'react';
import { Zap, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface CreditBalance {
  credits: number;
  total: number;
  plan: string | null;
  percentage: number;
  unlimited: boolean;
}

export function CreditBadge() {
  const { session, user, loading: authLoading } = useAuth();
  const [balance, setBalance] = useState<CreditBalance | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // 🔍 DEBUG: Log component mount
  useEffect(() => {
    console.log('🔍 [CreditBadge] Component mounted');
    console.log('🔍 [CreditBadge] Auth state:', { user: !!user, session: !!session, authLoading });
  }, []);

  useEffect(() => {
    console.log('🔍 [CreditBadge] Auth effect triggered:', { authLoading, hasUser: !!user, hasSession: !!session });

    // Only fetch balance if user is logged in
    if (!authLoading && user && session) {
      console.log('🔍 [CreditBadge] User is logged in, fetching balance...');
      fetchBalance();
      // Refresh balance every 30 seconds
      const interval = setInterval(fetchBalance, 30000);
      return () => clearInterval(interval);
    } else if (!authLoading && !user) {
      // User not logged in
      console.log('🔍 [CreditBadge] User NOT logged in, will show Activate button');
      setBalance(null);
      setLoading(false);
    }
  }, [user, session, authLoading]);

  async function fetchBalance() {
    if (!session?.access_token) {
      setBalance(null);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/credits/balance', {
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${session.access_token}`
        }
      });

      if (res.status === 401) {
        // User not logged in - that's ok
        setBalance(null);
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setError(true);
        setLoading(false);
        return;
      }

      const data = await res.json();
      setBalance(data);
      setError(false);
      console.log('[CreditBadge] Balance fetched:', data);
    } catch (err) {
      console.error('Failed to fetch credit balance:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  // 🔍 DEBUG: Log render state
  console.log('🔍 [CreditBadge] Render state:', {
    authLoading,
    hasUser: !!user,
    loading,
    error,
    hasBalance: !!balance,
    balance
  });

  // Show "Activate License" button for non-logged-in users
  if (!authLoading && !user) {
    console.log('✅ [CreditBadge] Rendering: Activate License button');
    return (
      <a
        href="/activate"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-sm hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105 shadow-lg"
      >
        <Zap className="w-4 h-4" />
        <span>Activate License</span>
      </a>
    );
  }

  // Show loading state
  if (loading) {
    console.log('⏳ [CreditBadge] Rendering: Loading state');
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 rounded-full font-semibold text-sm">
        <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        <span>Loading...</span>
      </div>
    );
  }

  // Show error state
  if (error) {
    console.log('❌ [CreditBadge] Rendering: Error state (hidden)');
    return null;
  }

  // Don't show badge if no balance
  if (!balance) {
    console.log('❌ [CreditBadge] Rendering: No balance (hidden)');
    return null;
  }

  // Don't show badge for unlimited users
  if (balance.unlimited || balance.credits === -1) {
    console.log('✅ [CreditBadge] Rendering: Unlimited Free badge');
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full border-2 border-green-200 font-semibold text-sm">
        <CheckCircle className="w-4 h-4" />
        <span>Unlimited Free</span>
      </div>
    );
  }

  // Determine color based on percentage
  const getColorClasses = () => {
    if (balance.percentage >= 50) {
      return 'bg-green-100 text-green-700 border-green-200';
    } else if (balance.percentage >= 20) {
      return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    } else {
      return 'bg-red-100 text-red-700 border-red-200';
    }
  };

  const getIcon = () => {
    if (balance.percentage >= 50) {
      return <CheckCircle className="w-4 h-4" />;
    } else if (balance.percentage >= 20) {
      return <Zap className="w-4 h-4" />;
    } else {
      return <AlertCircle className="w-4 h-4" />;
    }
  };

  console.log('✅ [CreditBadge] Rendering: Credit badge with balance', balance);

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 font-semibold text-sm ${getColorClasses()} transition-all hover:scale-105`}>
      {getIcon()}
      <span className="font-bold">{balance.credits}</span>
      <span className="text-xs opacity-75">/ {balance.total} AI credits</span>
      {balance.percentage < 20 && (
        <span className="ml-1 text-xs font-bold animate-pulse">Low!</span>
      )}
    </div>
  );
}

export function CreditDashboard() {
  const [balance, setBalance] = useState<CreditBalance | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBalance();
  }, []);

  async function fetchBalance() {
    try {
      const res = await fetch('/api/credits/balance', {
        credentials: 'include'
      });

      if (!res.ok) {
        setLoading(false);
        return;
      }

      const data = await res.json();
      setBalance(data);
    } catch (err) {
      console.error('Failed to fetch balance:', err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4 w-1/2"></div>
        <div className="h-20 bg-gray-200 rounded"></div>
      </div>
    );
  }

  if (!balance || balance.unlimited) {
    return (
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border-2 border-purple-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Credits</h3>
        <div className="text-center py-6">
          <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">Unlimited</p>
          <p className="text-sm text-gray-600 mt-2">Manual mixing is always free!</p>
        </div>
      </div>
    );
  }

  const progressPercentage = balance.percentage;
  const progressColor = progressPercentage >= 50
    ? 'bg-green-500'
    : progressPercentage >= 20
    ? 'bg-yellow-500'
    : 'bg-red-500';

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">AI Credits</h3>
        <span className="text-sm text-gray-600 capitalize bg-purple-100 px-3 py-1 rounded-full">
          {balance.plan} Plan
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-bold text-gray-900">{balance.credits}</span>
          <span className="text-xl text-gray-500">/ {balance.total}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${progressColor} transition-all duration-500`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <p className="text-sm text-gray-600 mt-2">
          {progressPercentage}% remaining
        </p>
      </div>

      {/* Warnings */}
      {balance.percentage < 20 && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900 text-sm">Running Low!</p>
            <p className="text-xs text-red-700">
              You have {balance.credits} AI credits left. Manual mixing is still unlimited!
            </p>
          </div>
        </div>
      )}

      {balance.percentage >= 20 && balance.percentage < 50 && (
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 flex items-start gap-3">
          <Zap className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-yellow-900 text-sm">Halfway There</p>
            <p className="text-xs text-yellow-700">
              You've used {balance.total - balance.credits} of {balance.total} AI credits.
            </p>
          </div>
        </div>
      )}

      {/* Info */}
      <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
        <p className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-600" />
          Manual mixing: <strong>Unlimited</strong>
        </p>
        <p className="flex items-center gap-2 mt-1">
          <Zap className="w-4 h-4 text-purple-600" />
          AI credits never expire
        </p>
      </div>
    </div>
  );
}
