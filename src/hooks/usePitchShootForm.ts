import { useState, useCallback } from 'react';
import { supabase, type PitchShootFormData } from '@/lib/supabase';

interface FormState {
  name: string;
  email: string;
  companyName: string;
  whatBuilding: string;
  productStatus: 'yes' | 'in_progress' | 'no' | '';
  preferredFriday: string;
  timeWindow: 'morning' | 'afternoon' | '';
}

interface UsePitchShootFormReturn {
  formState: FormState;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  submissionId: string | null;
  updateField: (field: keyof FormState, value: string) => void;
  submitForm: () => Promise<string | null>;
  resetForm: () => void;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  companyName: '',
  whatBuilding: '',
  productStatus: '',
  preferredFriday: '',
  timeWindow: '',
};

export function usePitchShootForm(): UsePitchShootFormReturn {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const updateField = useCallback((field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    setError(null);
  }, []);

  const submitForm = useCallback(async (): Promise<string | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const newId = crypto.randomUUID();
      const formData: PitchShootFormData = {
        id: newId,
        name: formState.name.trim(),
        email: formState.email.trim(),
        company_name: formState.companyName.trim(),
        what_building: formState.whatBuilding.trim(),
        product_status: formState.productStatus as 'yes' | 'in_progress' | 'no',
        preferred_friday: formState.preferredFriday,
        time_window: formState.timeWindow as 'morning' | 'afternoon',
        payment_status: 'pending',
      };

      const { error: supabaseError } = await supabase
        .from('pitch_shoot_enquiries')
        .insert(formData);

      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        throw new Error('Failed to submit form. Please try again.');
      }

      setSubmissionId(newId);
      setSuccess(true);
      return newId;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(message);
      console.error('Form submission error:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [formState]);

  const resetForm = useCallback(() => {
    setFormState(initialFormState);
    setError(null);
    setSuccess(false);
    setSubmissionId(null);
  }, []);

  return {
    formState,
    isLoading,
    error,
    success,
    submissionId,
    updateField,
    submitForm,
    resetForm,
  };
}

export function validateForm(formState: FormState): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!formState.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!formState.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formState.companyName.trim()) {
    errors.companyName = 'Company name is required';
  }

  if (!formState.whatBuilding.trim()) {
    errors.whatBuilding = 'Please describe what you are building';
  }

  if (!formState.productStatus) {
    errors.productStatus = 'Please select a product status';
  }

  if (!formState.preferredFriday) {
    errors.preferredFriday = 'Please select a preferred Friday';
  }

  if (!formState.timeWindow) {
    errors.timeWindow = 'Please select a time window';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
