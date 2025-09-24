import * as React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2Icon, XCircleIcon } from 'lucide-react';

interface NotificationModalProps {
  open: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  message: string;
}

export function NotificationModal({ open, onClose, type, message }: NotificationModalProps) {
  if (!open) return null;

  const icon = type === 'success' ? (
    <CheckCircle2Icon className="h-10 w-10 text-green-400" />
  ) : (
    <XCircleIcon className="h-10 w-10 text-red-400" />
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div
        className={cn(
          'rounded-xl p-6 text-center shadow-lg max-w-sm w-full flex flex-col items-center gap-4 transform scale-100 animate-in',
          'bg-gray-900 border',
          type === 'success' ? 'border-green-500' : 'border-red-500'
        )}
      >
        {icon}
        <h2 className={cn('text-xl font-semibold', type === 'success' ? 'text-green-400' : 'text-red-400')}>
          {type === 'success' ? 'Success!' : 'Error'}
        </h2>
        <p className="text-gray-300 text-sm">{message}</p>
        <button
          onClick={onClose}
          className={cn(
            'mt-2 rounded-md px-5 py-1 font-medium shadow hover:shadow-md transition-colors',
            type === 'success'
              ? 'bg-green-500 text-gray-900 hover:bg-green-600'
              : 'bg-red-500 text-gray-900 hover:bg-red-600'
          )}
        >
          OK
        </button>
      </div>
    </div>
  );
}
