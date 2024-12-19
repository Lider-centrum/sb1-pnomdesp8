import React from 'react';
import Button from '@/components/ui/Button';

const NewsletterForm = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
      <p className="text-gray-400 mb-4">
        Zapisz się, aby otrzymywać najnowsze porady dotyczące rozwoju szkół językowych.
      </p>
      <form className="space-y-2">
        <input
          type="email"
          placeholder="Twój adres email"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-teal-500"
        />
        <Button className="w-full">
          Zapisz się
        </Button>
      </form>
    </div>
  );
};

export default NewsletterForm;