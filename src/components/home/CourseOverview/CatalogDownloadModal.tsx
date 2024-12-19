import React, { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';
import { fireConfetti } from '@/utils/confetti';
import { submitCatalogRequest } from '@/services/firebase/catalog';
import { isBlockedEmailDomain } from '@/utils/validation';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface CatalogDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CatalogDownloadModal = ({ isOpen, onClose }: CatalogDownloadModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    marketingConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState<string | null>(null);

  if (!isOpen) return null;

  const validateEmail = (email: string): boolean => {
    if (isBlockedEmailDomain(email)) {
      setEmailError('Podaj innego maila. Maile w domenie wp.pl, onet.pl, interia.pl, są zabronione');
      return false;
    }
    setEmailError(null);
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData(prev => ({ ...prev, email }));
    if (email) {
      validateEmail(email);
    } else {
      setEmailError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitCatalogRequest(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        fireConfetti();
        
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
          setFormData({
            name: '',
            email: '',
            phone: '',
            marketingConsent: false
          });
        }, 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={cn(
        "relative bg-white rounded-2xl p-6 w-full max-w-md",
        "transform transition-all duration-300",
        "animate-fade-in"
      )}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-dark mb-4">Dziękujemy!</h2>
            <p className="text-gray-600">
              Katalog zostanie przesłany na Twój adres e-mail
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-dark mb-2">Pobierz katalog kursów</h2>
            <p className="text-gray-600 mb-6">
              Wypełnij formularz, aby otrzymać pełny katalog naszych kursów i szkoleń.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Imię i nazwisko"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Adres e-mail"
                  value={formData.email}
                  onChange={handleEmailChange}
                  className={cn(
                    "w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary focus:border-transparent",
                    emailError ? "border-red-500" : "border-gray-300"
                  )}
                  required
                />
                {emailError && (
                  <p className="mt-1 text-sm text-red-600">{emailError}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Numer telefonu"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={(e) => setFormData(prev => ({ ...prev, marketingConsent: e.target.checked }))}
                  className="mt-1"
                  required
                />
                <label htmlFor="marketingConsent" className="text-sm text-gray-600">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celach marketingowych zgodnie z{' '}
                  <a 
                    href="/polityka-prywatnosci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    polityką prywatności
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !!emailError}
                className="w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner className="h-5 w-5" />
                    Przetwarzanie...
                  </>
                ) : (
                  'Pobierz katalog'
                )}
              </Button>

              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm text-center">
                  Wystąpił błąd podczas zapisywania danych. Spróbuj ponownie później.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CatalogDownloadModal;