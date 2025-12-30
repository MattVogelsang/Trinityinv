'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { base44, CreateQuoteRequestInput } from '@/api/base44Client';

const insuranceTypes = [
  { value: 'commercial', label: 'Commercial Insurance' },
  { value: 'marine', label: 'Marine Contractors' },
  { value: 'hotel_motel', label: 'Hotel/Motel Programs' },
  { value: 'condo', label: 'Condo Associations' },
  { value: 'homeowners', label: 'Homeowners Insurance' },
  { value: 'other', label: 'Other' }
];

export default function ContactForm() {
  const [formData, setFormData] = useState<CreateQuoteRequestInput>({
    name: '',
    email: '',
    phone: '',
    insurance_type: undefined,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Filter out empty strings and convert to undefined for optional fields
      const submitData: CreateQuoteRequestInput = {
        name: formData.name,
        email: formData.email,
        ...(formData.phone && { phone: formData.phone }),
        ...(formData.insurance_type && { insurance_type: formData.insurance_type }),
        ...(formData.message && { message: formData.message })
      };
      
      await base44.entities.QuoteRequest.create(submitData);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', insurance_type: undefined, message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      // TODO: Show error message to user
    }
  };

  return (
    <section className="py-24 bg-slate-50" id="contact">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Request a Free Quote
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Tell us about your insurance needs and our team will get back to you 
              with a personalized quote within 24 hours.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Our Office</h4>
                  <p className="text-slate-600">Location details will go here</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                  <p className="text-slate-600">Phone number will go here</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">Email address will go here</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-slate-600">Business hours will go here</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600">
                  We've received your request. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <Label htmlFor="insurance_type">Insurance Type</Label>
                    <Select
                      value={formData.insurance_type || ''}
                      onValueChange={(value) => setFormData({ ...formData, insurance_type: value || undefined })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select insurance type (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        {insuranceTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your insurance needs..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Request
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
