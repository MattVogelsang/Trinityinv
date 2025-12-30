import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6952fe2c6d8839751d52272c/e73638880_TILogo.png" 
                alt="Trinity Insurance Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold">Trinity Insurance</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Over 50 years of experience providing comprehensive insurance solutions 
              with personalized service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Commercial Insurance</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Marine Contractors</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Hotel/Motel Programs</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Condo Associations</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Homeowners Insurance</a></li>
            </ul>
          </div>

          {/* Coverage Types */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Coverage Types</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Property & Liability</li>
              <li>Workers' Compensation</li>
              <li>Professional Liability</li>
              <li>Excess & Umbrella</li>
              <li>Equipment Policies</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>4429 Hollywood Blvd #3637<br />Hollywood, FL 33021</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div>
                  <a href="tel:305-874-6489" className="hover:text-amber-400">305-874-6489</a>
                  <span className="mx-1">/</span>
                  <a href="tel:954-613-3601" className="hover:text-amber-400">954-613-3601</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="mailto:tguido@trinityinv.net" className="hover:text-amber-400">tguido@trinityinv.net</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>© {new Date().getFullYear()} Trinity Insurance. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

