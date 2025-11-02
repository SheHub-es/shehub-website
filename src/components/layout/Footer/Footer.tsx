// src/components/layout/Footer/Footer.tsx

"use client";

import Link from 'next/link';
import AthenaIconInstagram from '@/components/icons/custom/AthenaIconInstagram';
import AthenaIconLinkedin from '@/components/icons/custom/AthenaIconLinkedin';
import AthenaIconMail from '@/components/icons/custom/AthenaIconMail';
import FooterLogo from '@/components/icons/custom/FooterLogo';
import { Icon } from '@/components/ui/icon';



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
    <footer className=" bg-[var(--color-background-footer)] text-[var(--color-foreground)]">
      {/* Final version with increased vertical padding (py-20) for more height. */}
      <div className="container mx-auto max-w-7xl py-20 font-secondary">
        <div className="flex flex-col items-center justify-between gap-y-4 lg:flex-row lg:gap-y-0 mb-0">
          
          <Link
            href="/"
            aria-label="SheHub homepage"
            className="block shrink-0 transition-opacity hover:opacity-90"
          >
            {/* FIX: Using the new FooterLogo with the correct size. */}
            <FooterLogo width={228} height={52} />
          </Link>

          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap items-center justify-center gap-8 text-size-400">
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

          <div className="flex shrink-0 items-center gap-2 p-2.5">
            <a
              href="mailto:info@shehub.es"
              className="group flex items-center gap-1 text-base text-[var(--color-purple-700)] underline hover:text-[var(--color-purple-600)]"
            >
              <Icon icon={<AthenaIconMail width={24} height={24} /> } className="text-[var(--color-icon-default)] group-hover:text-[var(--color-icon-hover)]"/>
              <span className='font-secondary text-size-300 mr-4'>info@shehub.es</span>
            </a>

            <a
              href="https://instagram.com/shehub"
              aria-label="SheHub on Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-opacity hover:opacity-90"
            >
              <Icon icon={<AthenaIconInstagram width={24} height={24} /> } className="text-[var(--color-icon-default)] group-hover:text-[var(--color-icon-hover)]" />
            </a>

            <a
              href="https://www.linkedin.com/company/shehub"
              aria-label="SheHub on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-opacity hover:opacity-90"
            >
              <Icon icon={<AthenaIconLinkedin width={24} height={24} /> } className="text-[var(--color-icon-default)] group-hover:text-[var(--color-icon-hover)]" />
            </a>
          </div>
        </div>

                <hr className="mt-0 mb-2 border-t border-[var(--color-foreground)]" />

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