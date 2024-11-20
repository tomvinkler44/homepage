import { Shield } from 'lucide-react';

export default function MoneyBackBadge() {
  return (
    <div className="absolute -right-3 top-3 md:right-3 transform rotate-12 bg-white rounded-full p-4 shadow-lg border-2 border-blue-100 group hover:rotate-0 transition-all duration-300 z-10">
      <div className="relative flex flex-col items-center">
        <Shield className="h-8 w-8 text-blue-600 mb-1" />
        <div className="text-center">
          <div className="text-xs font-bold text-blue-600">14-DAY</div>
          <div className="text-sm font-bold text-blue-800">MONEY BACK</div>
          <div className="text-xs font-bold text-blue-600">GUARANTEE</div>
        </div>
      </div>
    </div>
  );
}