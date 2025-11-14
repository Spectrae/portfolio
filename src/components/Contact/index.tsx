// src/components/Contact/index.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FiSend } from 'react-icons/fi';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setFormStatus(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }

      setFormStatus({ success: true, message: result.message });
      reset();
    } catch (error: any) {
      setFormStatus({ success: false, message: error.message });
    }
  };

  return (
    <section id="contact" className="py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">Get In Touch</h2>
      <div className="mx-auto max-w-lg rounded-xl bg-light-card p-8 shadow-xl dark:bg-dark-card">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="mb-1 block font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register('name')}
              className="w-full rounded-md border border-light-foreground/20 bg-transparent p-3 dark:border-dark-foreground/20"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="mb-1 block font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full rounded-md border border-light-foreground/20 bg-transparent p-3 dark:border-dark-foreground/20"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="mb-1 block font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...register('message')}
              className="w-full rounded-md border border-light-foreground/20 bg-transparent p-3 dark:border-dark-foreground/20"
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Status Banners */}
          {formStatus && (
            <div
              className={`rounded-md p-3 text-center ${
                formStatus.success
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200'
              }`}
            >
              {formStatus.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-light-primary px-6 py-3 font-semibold text-light-primary-foreground shadow-lg transition-transform hover:scale-105 disabled:opacity-50 dark:bg-dark-primary dark:text-dark-primary-foreground"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;