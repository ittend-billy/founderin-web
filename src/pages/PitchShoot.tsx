import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { ArrowRight, Check, X, Calendar, Clock, CreditCard } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { usePitchShootForm, validateForm } from '@/hooks/usePitchShootForm';
import { cn } from '@/lib/utils';

export default function PitchShoot() {
  const scrollToForm = () => {
    const formElement = document.getElementById('intent-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const {
    formState,
    isLoading,
    error,
    success,
    submissionId,
    updateField,
    submitForm,
    resetForm,
  } = usePitchShootForm();

  const handlePaymentRedirect = (submissionId: string, email: string) => {
    const baseUrl = 'https://buy.stripe.com/test_5kQ9ASfvo13U4YC9yt8AE00';
    const params = new URLSearchParams();
    if (submissionId) {
      params.append('client_reference_id', submissionId);
    }
    if (email) {
      params.append('prefilled_email', email);
    }
    window.open(`${baseUrl}?${params.toString()}`, '_blank');
  };

  const [validationErrors, setValidationErrors] = React.useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateForm(formState);
    if (!validation.valid) {
      setValidationErrors(validation.errors);
      return;
    }

    setValidationErrors({});

    const submittedId = await submitForm();
    if (submittedId) {
      handlePaymentRedirect(submittedId, formState.email);
    }
  };

  if (success && submissionId) {
    return (
      <div className="min-h-screen bg-founderin-white font-sans text-founderin-dark">
        <Header />
        <SectionWrapper className="py-32">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-founderin-mint rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-founderin-dark" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Reservation Submitted!</h2>
            <p className="text-founderin-dark/70 mb-6">
              Your information has been saved. Click the button below to complete your payment and secure your slot.
            </p>
            <Button
              size="lg"
              fullWidth
              className="bg-founderin-dark text-white font-bold"
              onClick={() => handlePaymentRedirect(submissionId, formState.email)}
            >
              Continue to Payment
            </Button>
            <Button
              variant="ghost"
              fullWidth
              className="mt-4"
              onClick={resetForm}
            >
              Submit Another Reservation
            </Button>
          </div>
        </SectionWrapper>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-founderin-white font-sans text-founderin-dark">
      <Header />
      
      {/* 1. Hero Section */}
      <SectionWrapper variant="dark" className="pt-32 pb-20 md:pt-48 md:pb-32 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-acumin-black tracking-tight leading-[1.1] mb-6">
            Founder <span className="text-founderin-mint">Pitch Shoot</span>
          </h1>
          <p className="text-[1.5rem] md:text-[2rem] font-bold text-founderin-dark/90 mb-6">
            Your first founder-to-market installation.
          </p>
          <p className="text-lg md:text-xl text-founderin-dark/80 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            A guided 2-hour session where we clarify your story, rebuild your pitch, and record a high-signal founder video you can immediately use with investors, partners, and the market.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="group bg-founderin-dark hover:bg-founderin-dark/90 text-white font-acumin-black tracking-wide"
          >
            Shoot Your Founder Pitch
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        {/* Background gradient effect matching the main site */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-60 md:opacity-30">
          <div className="absolute top-1/4 left-[70%] md:left-1/4 w-64 h-64 bg-founderin-mint rounded-full filter blur-[100px]" />
          <div className="absolute bottom-1/4 right-0 md:right-1/4 w-96 h-96 bg-white rounded-full filter blur-[120px]" />
        </div>
      </SectionWrapper>

      {/* 2. What This Is */}
      <SectionWrapper className="py-16 md:py-24 bg-white border-b border-founderin-dark/5">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-founderin-dark/60 font-medium text-lg">
                <X className="w-5 h-5 text-founderin-dark/40" />
                <span>Not content production</span>
              </div>
              <div className="flex items-center gap-3 text-founderin-dark/60 font-medium text-lg">
                <X className="w-5 h-5 text-founderin-dark/40" />
                <span>Not coaching</span>
              </div>
              <div className="flex items-center gap-3 text-founderin-dark/60 font-medium text-lg">
                <X className="w-5 h-5 text-founderin-dark/40" />
                <span>Not branding</span>
              </div>
            </div>
            <div>
              <p className="text-[1.4rem] md:text-[1.6rem] font-bold leading-tight text-founderin-dark">
                This is a <span className="text-founderin-purple">working session with a camera</span> where your founder pitch is rebuilt live and recorded.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. What You Walk Away With */}
      <SectionWrapper variant="gray" className="py-16 md:py-24 bg-founderin-mint">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[2rem] md:text-[2.5rem] font-acumin-black text-center mb-12">What You Walk Away With</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border border-founderin-dark/5 shadow-sm">
              <div className="w-10 h-10 bg-founderin-purple/10 rounded-full flex items-center justify-center mb-4 text-founderin-purple">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">A clear, reusable founder pitch</h3>
              <p className="text-founderin-dark/70 text-sm">Distilled down to the core value that matters.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-founderin-dark/5 shadow-sm">
              <div className="w-10 h-10 bg-founderin-purple/10 rounded-full flex items-center justify-center mb-4 text-founderin-purple">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">A recorded founder pitch video</h3>
              <p className="text-founderin-dark/70 text-sm">High-signal asset for investors and partners.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-founderin-dark/5 shadow-sm">
              <div className="w-10 h-10 bg-founderin-purple/10 rounded-full flex items-center justify-center mb-4 text-founderin-purple">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Reusable Messaging</h3>
              <p className="text-founderin-dark/70 text-sm">Copy you can deploy across decks, websites, and profiles.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. How It Works */}
      <SectionWrapper className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[2rem] md:text-[2.5rem] font-acumin-black text-center mb-12">How It Works</h2>
          <div className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-founderin-dark/10">
            <div className="relative flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-founderin-dark text-white flex items-center justify-center flex-shrink-0 relative z-10 font-bold">1</div>
              <div className="pt-2">
                <h3 className="text-xl font-bold mb-1">Submit the short intent form</h3>
                <p className="text-founderin-dark/70">Tell us what you're building so we can prepare.</p>
              </div>
            </div>
            <div className="relative flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-founderin-dark text-white flex items-center justify-center flex-shrink-0 relative z-10 font-bold">2</div>
              <div className="pt-2">
                <h3 className="text-xl font-bold mb-1">Complete payment</h3>
                <p className="text-founderin-dark/70">Secure your session slot.</p>
              </div>
            </div>
            <div className="relative flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-founderin-dark text-white flex items-center justify-center flex-shrink-0 relative z-10 font-bold">3</div>
              <div className="pt-2">
                <h3 className="text-xl font-bold mb-1">Select your preferred Friday</h3>
                <p className="text-founderin-dark/70">Choose a morning or afternoon window.</p>
              </div>
            </div>
            <div className="relative flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-founderin-dark text-white flex items-center justify-center flex-shrink-0 relative z-10 font-bold">4</div>
              <div className="pt-2">
                <h3 className="text-xl font-bold mb-1">Receive onboarding & confirmation</h3>
                <p className="text-founderin-dark/70">We'll send you prep materials immediately.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 p-4 bg-founderin-purple/5 rounded-lg border border-founderin-purple/10 flex items-center gap-3 justify-center text-center">
            <Calendar className="w-5 h-5 text-founderin-purple" />
            <p className="text-sm font-semibold text-founderin-dark/80">
              Note: Founder Pitch Shoots run on <span className="text-founderin-purple font-bold">Fridays only</span> to maintain quality and focus.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Short Intent Form */}
      <SectionWrapper id="intent-form" variant="dark" className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-acumin-black text-center mb-8">Reserve Your Slot</h2>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-founderin-dark">Name</label>
                <Input
                  placeholder="Founder Name"
                  value={formState.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
                {validationErrors.name && (
                  <p className="text-xs text-red-500">{validationErrors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-founderin-dark">Email</label>
                <Input
                  type="email"
                  placeholder="founder@company.com"
                  value={formState.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
                {validationErrors.email && (
                  <p className="text-xs text-red-500">{validationErrors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-founderin-dark">Company Name</label>
              <Input
                placeholder="Company Name"
                value={formState.companyName}
                onChange={(e) => updateField('companyName', e.target.value)}
              />
              {validationErrors.companyName && (
                <p className="text-xs text-red-500">{validationErrors.companyName}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-founderin-dark">What are you building?</label>
              <Textarea
                placeholder="One sentence summary..."
                className="min-h-[100px]"
                value={formState.whatBuilding}
                onChange={(e) => updateField('whatBuilding', e.target.value)}
              />
              {validationErrors.whatBuilding && (
                <p className="text-xs text-red-500">{validationErrors.whatBuilding}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-founderin-dark">Do you have a working product or deep prototype?</label>
              <div className="grid grid-cols-3 gap-3">
                {['yes', 'in_progress', 'no'].map((value) => (
                  <label
                    key={value}
                    className={cn(
                      'flex items-center justify-center p-3 border rounded-md cursor-pointer hover:bg-founderin-gray transition-all',
                      formState.productStatus === value &&
                        'border-founderin-purple bg-founderin-purple/5'
                    )}
                  >
                    <input
                      type="radio"
                      name="product_status"
                      className="hidden"
                      checked={formState.productStatus === value}
                      onChange={() => updateField('productStatus', value)}
                    />
                    <span className="font-medium text-sm">
                      {value === 'yes' ? 'Yes' : value === 'in_progress' ? 'In Progress' : 'No'}
                    </span>
                  </label>
                ))}
              </div>
              {validationErrors.productStatus && (
                <p className="text-xs text-red-500">{validationErrors.productStatus}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-founderin-dark">Preferred Friday</label>
                <div className="relative">
                  <Input
                    placeholder="Select a date..."
                    type="date"
                    value={formState.preferredFriday}
                    onChange={(e) => updateField('preferredFriday', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    onKeyDown={(e) => e.preventDefault()}
                    onClick={(e) => (e.target as HTMLInputElement).showPicker()}
                    style={{ cursor: 'pointer' }}
                  />
                  <p className="text-xs text-founderin-dark/50 mt-1">Sessions are held on Fridays only.</p>
                </div>
                {validationErrors.preferredFriday && (
                  <p className="text-xs text-red-500">{validationErrors.preferredFriday}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-founderin-dark">Preferred Time Window</label>
                <div className="grid grid-cols-2 gap-3">
                  {['morning', 'afternoon'].map((value) => (
                    <label
                      key={value}
                      className={cn(
                        'flex items-center justify-center p-3 border rounded-md cursor-pointer hover:bg-founderin-gray transition-all',
                        formState.timeWindow === value &&
                          'border-founderin-purple bg-founderin-purple/5'
                      )}
                    >
                      <input
                        type="radio"
                        name="time_window"
                        className="hidden"
                        checked={formState.timeWindow === value}
                        onChange={() => updateField('timeWindow', value)}
                      />
                      <span className="font-medium text-sm flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
                {validationErrors.timeWindow && (
                  <p className="text-xs text-red-500">{validationErrors.timeWindow}</p>
                )}
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <Button
                type="submit"
                size="lg"
                fullWidth
                className="bg-founderin-dark text-white font-bold"
                disabled={isLoading}
              >
                {isLoading ? 'Saving...' : 'Continue to Payment'}
              </Button>
              <div className="flex items-center justify-center gap-2 text-founderin-dark/50 text-xs">
                <CreditCard className="w-3 h-3" />
                <p>We review each request to ensure fit. Your slot is confirmed after payment.</p>
              </div>
            </div>
          </form>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}
