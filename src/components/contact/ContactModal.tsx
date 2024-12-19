import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';
import emailjs from '@emailjs/browser';
import LoadingSpinner from '../ui/LoadingSpinner';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_p2ac3e9',
        'template_y8257kr',
        formRef.current,
        'MXrDici3-UnLrDAqZ'
      );

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('EmailJS Error:', error);
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

        <h2 className="text-2xl font-bold text-dark mb-6">Napisz do nas</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
              Imię i nazwisko
            </label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="reply_to"
              id="reply_to"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Wiadomość
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full bg-primary text-dark font-medium py-3 rounded-lg",
              "hover:bg-primary/90 transition-colors",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "flex items-center justify-center gap-2"
            )}
          >
            {isSubmitting ? (
              <>
                <LoadingSpinner className="h-5 w-5" />
                Wysyłanie...
              </>
            ) : (
              'Wyślij wiadomość'
            )}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-600 text-sm text-center">
              Wiadomość została wysłana! Dziękujemy za kontakt.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 text-sm text-center">
              Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactModal;