import React, { useState } from 'react';
import { FileDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import CatalogDownloadModal from './CatalogDownloadModal';

const CatalogDownload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl p-12 mt-12 text-center">
        <h2 className="text-3xl font-bold text-dark mb-4">
          Pobierz Pełny Katalog Kursów
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Szczegółowy opis wszystkich kursów, programów i materiałów dostępnych w ramach platformy.
        </p>
        <Button 
          size="lg"
          className="inline-flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <FileDown className="h-5 w-5" />
          Pobierz Katalog PDF
        </Button>
      </div>

      <CatalogDownloadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CatalogDownload;