import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Award, ShieldCheck, FileText } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Brief & Logo */}
          <div className="flex flex-col gap-5">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-brand-silver text-sm leading-relaxed">
              Premium wall and floor tiling services in Sydney. Specialising in bathrooms, kitchens, splashbacks, waterproofing, and custom tile installations.
            </p>
            <div className="flex flex-col gap-2.5 pt-2 text-xs text-brand-silver">
              <div className="flex items-center gap-2">
                <Award size={14} className="text-brand-blue" />
                <span>NSW Contractor Licence: <strong>392817C</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-brand-blue" />
                <span>Fully Insured & Compliant Tiling</span>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-white mb-6 border-l-2 border-brand-blue pl-3">
              Our Services
            </h3>
            <ul className="space-y-3.5 text-sm text-brand-silver">
              <li>
                <Link href="/services" className="hover:text-brand-blue transition-colors">Floor Tiling</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-blue transition-colors">Wall Tiling</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-blue transition-colors">Bathroom Renovations</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-blue transition-colors">Kitchen Splashbacks</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-blue transition-colors">Outdoor & Patio Tiling</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-blue transition-colors">Waterproofing (AS 3740)</Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-white mb-6 border-l-2 border-brand-blue pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm text-brand-silver">
              <li>
                <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-blue transition-colors">Project Gallery</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-brand-blue transition-colors">Reviews & Testimonials</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-blue transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-brand-blue transition-colors">Request a Quote</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-white mb-6 border-l-2 border-brand-blue pl-3">
              Contact & Hours
            </h3>
            <ul className="space-y-4 text-sm text-brand-silver">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-blue shrink-0 mt-0.5" />
                <span>Sydney, NSW, Australia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-blue shrink-0" />
                <a href="tel:0468372835" className="hover:text-brand-blue transition-colors font-semibold">0468 372 835</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-blue shrink-0" />
                <a href="mailto:info@njprotiling.com.au" className="hover:text-brand-blue transition-colors">info@njprotiling.com.au</a>
              </li>
              <li className="flex items-start gap-3 border-t border-white/5 pt-3">
                <Clock size={18} className="text-brand-blue shrink-0 mt-0.5" />
                <div className="flex flex-col text-xs">
                  <span className="font-semibold text-white">Mon - Sat: 7:00 AM - 5:30 PM</span>
                  <span>Sunday: Closed (Appointment Only)</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-silver">
          <p>© {new Date().getFullYear()} NJ Pro Tiling. All rights reserved. Precision Tiling Services.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-brand-blue transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-blue transition-colors">Terms of Service</Link>
            <div className="flex items-center gap-1">
              <FileText size={12} />
              <span>ABN 84 928 371 049</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
