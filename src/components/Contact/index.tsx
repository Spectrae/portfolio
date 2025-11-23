// src/components/Contact/index.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';

const schema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error();

      setStatus('success');
      reset();

      setTimeout(() => setStatus('idle'), 3000); // reset UI after success
    } catch (error) {
      setStatus('error');

      setTimeout(() => setStatus('idle'), 3000); // reset UI after error
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold md:text-4xl mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">
              Have a project in mind or want to discuss low-level systems? Drop me a message.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Name</label>
                <input
                  {...register('name')}
                  className="w-full rounded-xl border border-muted bg-background/50 px-4 py-3 transition-all
                  focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <span className="text-xs text-red-500">{errors.name.message}</span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Email</label>
                <input
                  {...register('email')}
                  className="w-full rounded-xl border border-muted bg-background/50 px-4 py-3 transition-all
                  focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <span className="text-xs text-red-500">{errors.email.message}</span>
                )}
              </div>

            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Message</label>
              <textarea
                {...register('message')}
                rows={5}
                className="w-full rounded-xl border border-muted bg-background/50 px-4 py-3 transition-all
                focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <span className="text-xs text-red-500">{errors.message.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full gap-2 text-lg"
              size="lg"
            >
              {status === 'submitting' && (
                <>
                  Sending...
                  <FiSend className="animate-pulse" />
                </>
              )}

              {status === 'success' && (
                <>
                  Sent Successfully!
                  <FiCheck />
                </>
              )}

              {status === 'idle' && (
                <>
                  Send Message
                  <FiSend />
                </>
              )}
            </Button>

            {/* Error Message */}
            {status === 'error' && (
              <p className="flex items-center justify-center gap-2 text-sm text-red-500 bg-red-500/10 p-3 rounded-lg">
                <FiAlertCircle /> Something went wrong. Please try again.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
