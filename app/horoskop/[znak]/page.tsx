import DnevniHoroskop from '@/components/DnevniHoroskop';
import NedeljniMesecni from '@/components/NedeljniMesecni';
import NotifikacijeSetup from '@/components/NotifikacijeSetup';
import { ZODIAC_SIGNS } from '@/lib/constants';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ znak: string }>;
}

export async function generateStaticParams() {
  return ZODIAC_SIGNS.map((sign) => ({
    znak: sign.id,
  }));
}

export default async function HoroskopPage({ params }: PageProps) {
  const { znak } = await params;
  const zodiacSign = ZODIAC_SIGNS.find(z => z.id === znak);

  if (!zodiacSign) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Back button */}
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
      >
        <ArrowLeft size={20} />
        Nazad na sve znakove
      </Link>

      {/* Dnevni horoskop */}
      <DnevniHoroskop sign={znak} />

      {/* Nedeljni i mesečni */}
      <NedeljniMesecni sign={zodiacSign.english} signColor={zodiacSign.color} />

      {/* Notifikacije */}
      <NotifikacijeSetup />
    </div>
  );
}
