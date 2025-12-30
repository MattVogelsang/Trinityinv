import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig, getFullAddress } from '@/lib/config';
import { images } from '@/constants/images';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={images.logo}
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
                <span className="whitespace-pre-line">{getFullAddress()}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <div>
                    <span className="text-amber-500 font-medium">Dade:</span>{' '}
                    <a href={`tel:${siteConfig.contact.phone.dade}`} className="hover:text-amber-400">
                      {siteConfig.contact.phone.dade}
                    </a>
                  </div>
                  <div>
                    <span className="text-amber-500 font-medium">Broward:</span>{' '}
                    <a href={`tel:${siteConfig.contact.phone.broward}`} className="hover:text-amber-400">
                      {siteConfig.contact.phone.broward}
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-amber-400">
                  {siteConfig.contact.email}
                </a>
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

