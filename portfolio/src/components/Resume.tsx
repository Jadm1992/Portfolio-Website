import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Resume() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-2">Résumé</h2>
      <Button onClick={() => setShowResume(!showResume)}>
        {showResume ? 'Hide Résumé' : 'View Résumé'}
      </Button>
      {showResume && (
        <div className="transition-all duration-300 ease-in-out overflow-hidden mt-4">
          <iframe
            src="/RResume/Devin-Miller-IT-Support-Specialist.pdf"
            className="w-full aspect-[8.5/11] border rounded"
            title="Résumé PDF"
          />
        </div>
      )}
    </div>
  );
}
