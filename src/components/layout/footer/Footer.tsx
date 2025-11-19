// src/components/layout/Footer/Footer.tsx

"use client";

import AthenaIconInstagram from '@/components/icons/custom/AthenaIconInstagram';
import AthenaIconLinkedin from '@/components/icons/custom/AthenaIconLinkedin';
import AthenaIconMail from '@/components/icons/custom/AthenaIconMail';
import FooterLogo from '@/components/icons/custom/FooterLogo';
import { Icon } from '@/components/ui/Icon';
import NavigationMenu from '@/components/ui/NavigationMenu';
import Link from 'next/link';

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
];

const Footer = () => {
  return (
    <footer className=" bg-[var(--color-background-footer)] text-[var(--color-foreground)]">
      {/* Final version with increased vertical padding (py-20) for more height. */}
      <div className="container mx-auto max-w-7xl py-6 lg:py-20 px-2 lg:px-0 font-secondary">
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-8 lg:gap-y-0 lg:justify-between">
          
          <Link
            href="/"
            aria-label="SheHub homepage"
            className="block shrink-0 transition-opacity hover:opacity-90 px-6 lg:px-0"
          >
            {/* FIX: Using the new FooterLogo with the correct size. */}
            <FooterLogo width={262} height={72} />
          </Link>

          <div className="px-6 lg:px-0">
            <NavigationMenu />
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-2 px-4 lg:px-0">
            <a
              href="mailto:info@shehub.es"
              className="group flex items-center lg:gap-1 text-base text-[var(--color-purple-700)] underline hover:text-[var(--color-purple-600)] pb-1 lg:pb-0"
            >
              <Icon icon={<AthenaIconMail width={24} height={24} /> } className="text-[var(--color-icon-default)] group-hover:text-[var(--color-icon-hover)]"/>
              <span className='font-secondary text-size-300 mr-4'>info@shehub.es</span>
            </a>

            <div className="flex gap-2 pb-4 lg:pb-0">
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
        </div>

                <hr className=" md:mb-3 md:mt-3 border-t border-[var(--color-foreground)] mx-6 lg:mx-0" />

        <div className="flex flex-col lg:flex-row lg:items-center pt-2 text-base lg:justify-center lg:gap-x-8 lg:gap-y-4 px-6 lg:px-0">
          <p className="text-left lg:text-center text-size-200 lg:text-size-300 pt-4.5 md:pt-0 pb-10 lg:pb-0">
            &copy; {new Date().getFullYear()} SheHub. All rights reserved.
          </p>
          <div className="flex flex-col items-start lg:items-center justify-center gap-7 lg:flex-row lg:gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-purple-700)] underline hover:text-[var(--color-purple-600)] visited:text-[var(--color-textlink-visited)] text-size-200 lg:text-size-300"
              >
                {link.label}
              </Link>
            ))}
            <button className="text-[var(--color-purple-700)] underline hover:text-[var(--color-purple-600)] pb-4 lg:pb-0 text-size-200 lg:text-size-300">
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;