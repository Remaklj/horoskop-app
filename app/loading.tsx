import { Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative">
        <Sparkles size={80} className="text-purple-600 animate-spin" />
      </div>
      <p className="mt-6 text-xl text-gray-600 font-medium">
        Učitavanje...
      </p>
    </div>
  );
}
