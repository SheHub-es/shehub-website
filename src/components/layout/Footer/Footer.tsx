// src/components/layout/Footer/Footer.tsx

"use client";

import Link from 'next/link';
// FIX: Importing the new, dedicated FooterLogo component.
import AthenaIconInstagram from '@/components/icons/custom/AthenaIconInstagram';
import AthenaIconLinkedin from '@/components/icons/custom/AthenaIconLinkedin';
import AthenaIconMail from '@/components/icons/custom/AthenaIconMail';
import FooterLogo from '@/components/icons/custom/FooterLogo';

const navLinks = [
  { href: '/collaborators', label: 'Collaborators' },
  { href: '/mentors', label: 'Mentors' },
  { href: '/about', label: 'About' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
];


const Footer = () => {
  return (
    <footer className="font-[var(--font-secondary)] bg-[var(--color-background-footer)] text-[var(--color-foreground)]">
      {/* Final version with increased vertical padding (py-20) for more height. */}
      <div className="container mx-auto max-w-7xl py-20">
        <div className="flex flex-col items-center justify-between gap-y-8 lg:flex-row lg:gap-y-0">
          
          <Link
            href="/"
            aria-label="SheHub homepage"
            className="block shrink-0 transition-opacity hover:opacity-90"
          >
            {/* FIX: Using the new FooterLogo with the correct size. */}
            <FooterLogo width={228} height={52} />
          </Link>

          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-lg font-normal text-[var(--color-navigationmenu-label)] hover:text-[var(--color-navigationmenu-hover)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-6">
            <a
              href="mailto:info@shehub.es"
              className="group flex items-center gap-3 text-base text-[var(--color-purple-700)] underline hover:text-[var(--color-purple-600)]"
            >
              <AthenaIconMail className="h-6 w-6 text-[var(--color-icon-default)] group-hover:text-[var(--color-icon-hover)]" />
              <span>info@shehub.es</span>
            </a>
            <a href="#" aria-label="SheHub on Instagram" className="block transition-opacity hover:opacity-90">
              <AthenaIconInstagram className="h-6 w-6 text-[var(--color-icon-default)] hover:text-[var(--color-icon-hover)]" />
            </a>
            <a href="#" aria-label="SheHub on LinkedIn" className="block transition-opacity hover:opacity-90">
              <AthenaIconLinkedin className="h-6 w-6 text-[var(--color-icon-default)] hover:text-[var(--color-icon-hover)]" />
            </a>
          </div>
        </div>

        <hr className="my-6 border-t border-[var(--color-foreground)]" />

        <div className="flex flex-col items-center justify-center gap-x-8 gap-y-4 pt-2 text-base lg:flex-row">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} SheHub. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-purple-700)] underline hover:text-[var(--color-purple-600)] visited:text-[var(--color-textlink-visited)]"
              >
                {link.label}
              </Link>
            ))}
            <button className="text-[var(--color-purple-700)] underline hover:text-[var(--color-purple-600)]">
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;