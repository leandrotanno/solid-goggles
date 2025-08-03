import React from 'react';
import { Download } from 'lucide-react';

const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="fixed top-4 right-4 z-50 dark:bg-purple-600 bg-purple-500 dark:hover:bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 print:hidden"
      aria-label="Download PDF"
    >
      <Download className="w-4 h-4" />
      <span className="hidden sm:inline">Download PDF</span>
    </button>
  );
};

export default PrintButton;