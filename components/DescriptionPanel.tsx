'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface DescriptionPanelProps {
  description: string;
}

export default function DescriptionPanel({ description }: DescriptionPanelProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(description);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Description & Timestamps</h3>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
          {description}
        </pre>
      </div>
    </div>
  );
}
