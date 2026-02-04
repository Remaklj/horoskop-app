import HistorijaList from '@/components/HistorijaList';
import { History } from 'lucide-react';

export default function IstorijaPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <History size={48} className="text-purple-600" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Istorija Horoskopa
          </h1>
        </div>
        <p className="text-xl text-gray-700">
          Pregled svih horoskopa koje si pročitao
        </p>
      </div>

      {/* Lista */}
      <HistorijaList />
    </div>
  );
}
