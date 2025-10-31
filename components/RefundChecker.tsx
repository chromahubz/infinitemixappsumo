'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, XCircle, Loader2, DollarSign } from 'lucide-react';
import type { RefundEligibility } from '@/lib/credits';

export function RefundChecker() {
  const [eligibility, setEligibility] = useState<RefundEligibility | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchEligibility();
  }, []);

  async function fetchEligibility() {
    try {
      const res = await fetch('/api/refund/eligibility', {
        credentials: 'include'
      });

      if (res.status === 401 || res.status === 404) {
        // User not logged in or no license
        setEligibility(null);
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setError(true);
        setLoading(false);
        return;
      }

      const data = await res.json();
      setEligibility(data);
    } catch (err) {
      console.error('Failed to fetch refund eligibility:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
        </div>
      </div>
    );
  }

  if (error || !eligibility) {
    return null;
  }

  const getStatusIcon = () => {
    if (eligibility.eligible) {
      return <CheckCircle className="w-8 h-8 text-green-600" />;
    } else if (eligibility.usage_percentage && eligibility.usage_percentage > 30) {
      return <XCircle className="w-8 h-8 text-red-600" />;
    } else {
      return <AlertCircle className="w-8 h-8 text-gray-400" />;
    }
  };

  const getStatusColor = () => {
    if (eligibility.eligible) {
      return 'border-green-300 bg-gradient-to-br from-green-50 to-white';
    } else if (eligibility.usage_percentage && eligibility.usage_percentage > 30) {
      return 'border-red-300 bg-gradient-to-br from-red-50 to-white';
    } else {
      return 'border-gray-300 bg-gradient-to-br from-gray-50 to-white';
    }
  };

  return (
    <div className={`rounded-xl border-2 p-6 ${getStatusColor()}`}>
      <div className="flex items-start gap-4 mb-6">
        {getStatusIcon()}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Refund Status</h3>
          <p className="text-gray-600">{eligibility.reason}</p>
        </div>
      </div>

      {/* Refund Amount Display */}
      {eligibility.eligible && (
        <div className="bg-white rounded-lg p-6 mb-6 border-2 border-green-300">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Eligible Refund Amount:</span>
            <div className="flex items-baseline gap-1">
              <DollarSign className="w-6 h-6 text-green-600" />
              <span className="text-4xl font-bold text-green-600">
                {eligibility.refund_amount}
              </span>
            </div>
          </div>

          {eligibility.refund_percentage && (
            <div className="text-center py-2 bg-green-100 rounded">
              <span className="text-sm font-semibold text-green-900">
                {eligibility.refund_percentage}% refund eligible
              </span>
            </div>
          )}

          {eligibility.deduction && eligibility.deduction > 0 && (
            <div className="mt-4 pt-4 border-t border-green-200">
              <p className="text-sm text-gray-700">
                <strong>Calculation:</strong>
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Original Price - (${eligibility.deduction.toFixed(2)} for {eligibility.credits_used} AI mixes used)
              </p>
            </div>
          )}
        </div>
      )}

      {/* Usage Stats */}
      {eligibility.credits_used !== undefined && (
        <div className="bg-white rounded-lg p-4 mb-4">
          <h4 className="font-bold text-gray-900 mb-3">Usage Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">AI Mixes Generated:</span>
              <span className="font-bold text-gray-900">{eligibility.credits_used}</span>
            </div>
            {eligibility.usage_percentage !== undefined && (
              <div className="flex justify-between">
                <span className="text-gray-600">Usage Percentage:</span>
                <span className="font-bold text-gray-900">{eligibility.usage_percentage}%</span>
              </div>
            )}
            {eligibility.days_since_activation !== undefined && (
              <div className="flex justify-between">
                <span className="text-gray-600">Days Since Activation:</span>
                <span className="font-bold text-gray-900">{eligibility.days_since_activation} days</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Message */}
      {eligibility.message && (
        <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-700">
          {eligibility.message}
        </div>
      )}

      {/* Action Button */}
      {eligibility.eligible && (
        <a
          href="mailto:refunds@infinitemix.com?subject=Refund Request&body=Please process my refund. Order details: [Your order number]"
          className="mt-6 block w-full text-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-all"
        >
          Request Refund via Email
        </a>
      )}

      {/* Info Note */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Refunds are processed through AppSumo within 5-7 business days.
          See our <a href="/terms" className="text-purple-600 hover:underline">Terms of Service</a> for full policy.
        </p>
      </div>
    </div>
  );
}
