'use client';

import CloseIcon from '@/assets/images/icons/icon_close.svg';
import CookieIcon from '@/assets/images/icons/icon_cookie.svg';
import Button from '@/components/ui/Button';
import Link from '@/components/ui/Link';
import Switch from '@/components/ui/Switch';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { useTranslation } from '@/hooks/useTranslation';
import type { ConsentState } from '@/lib/cookieConsent';
import { cn } from '@/lib/utils';
import NextImage from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const LOCKED_ELEMENT_IDS = [
  'site-content-lockable',
  'nav-menu-desktop',
  'nav-join-desktop',
  'mobile-nav-drawer',
  'mobile-join-drawer',
];

const ROUTES_WITH_UNLOCKED_CONTENT = ['/cookie-settings'];

type CookieCategoryRowProps = {
  title: string;
  description: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

const CookieCategoryRow = ({ title, description, disabled, checked, onChange }: CookieCategoryRowProps) => (
  <div className="flex flex-col gap-2 py-4">
    <div className="flex items-center justify-between gap-4">
      <p className="font-secondary text-size-300 font-heavy leading-line-height-body-3 text-black">{title}</p>
      <Switch disabled={disabled} checked={checked} onChange={onChange} ariaLabel={title} />
    </div>
    <p className="font-secondary text-size-300 leading-line-height-body-3 text-neutral-600">{description}</p>
  </div>
);

const CookieBanner = () => {
  const { t } = useTranslation();
  const { hasDecided, acceptAll, rejectNonEssential, updateConsent } = useCookieConsent();
  const pathname = usePathname();
  const [isManagingPreferences, setIsManagingPreferences] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [draftConsent, setDraftConsent] = useState<Pick<ConsentState, 'analytics' | 'functional'>>({
    analytics: false,
    functional: false,
  });
  const closePreferencesButtonRef = useRef<HTMLButtonElement>(null);
  const managePreferencesButtonRef = useRef<HTMLButtonElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (isManagingPreferences) {
      closePreferencesButtonRef.current?.focus();
    } else {
      managePreferencesButtonRef.current?.focus();
    }
  }, [isManagingPreferences]);

  useEffect(() => {
    if (isDismissed || hasDecided) return;

    const idsToLock = ROUTES_WITH_UNLOCKED_CONTENT.includes(pathname)
      ? LOCKED_ELEMENT_IDS.filter((id) => id !== 'site-content-lockable')
      : LOCKED_ELEMENT_IDS;

    const lockedElements = new Set<HTMLElement>();

    const applyInert = () => {
      idsToLock.forEach((id) => {
        const el = document.getElementById(id);
        if (el && !lockedElements.has(el)) {
          el.setAttribute('inert', '');
          lockedElements.add(el);
        }
      });
    };

    applyInert();
    const observer = new MutationObserver(applyInert);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      lockedElements.forEach((el) => el.removeAttribute('inert'));
    };
  }, [isDismissed, hasDecided, pathname]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (isVisible) {
      managePreferencesButtonRef.current?.focus();
    }
  }, [isVisible]);

  if (isDismissed || hasDecided) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsDismissed(true), 700);
  };

  const handleAcceptAll = () => {
    acceptAll();
    handleClose();
  };

  const handleDeclineAll = () => {
    rejectNonEssential();
    handleClose();
  };

  const handleSavePreferences = () => {
    updateConsent(draftConsent);
    handleClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t('cookieBanner.title')}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 flex max-h-[calc(100dvh-120px)] flex-col overflow-hidden rounded-t-2xl border border-neutral-200 bg-background-light shadow-lg transition-transform duration-700 ease-in-out lg:inset-x-6 lg:bottom-6 lg:max-h-none lg:rounded-2xl lg:overflow-visible',
        isVisible && !isClosing ? 'translate-y-0' : 'translate-y-[calc(100%+2rem)]',
        isClosing && 'pointer-events-none',
      )}
    >
      <div
        inert={!isManagingPreferences || undefined}
        className={cn(
          'flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-none',
          isManagingPreferences
            ? 'max-h-250 transition-[max-height] duration-300 ease-out'
            : 'max-h-0',
        )}
      >
        <div className="flex min-h-0 flex-1 flex-col gap-6 p-6 pb-0 lg:flex-none">
          <div className="flex shrink-0 items-start justify-between gap-4">
            <h2 className="font-primary text-size-400 font-heavy leading-line-height-heading-6 text-foreground">
              {t('cookieBanner.preferencesTitle')}
            </h2>
            <button
              ref={closePreferencesButtonRef}
              type="button"
              aria-label={t('cookieBanner.closePreferences')}
              onClick={() => setIsManagingPreferences(false)}
              className="shrink-0 cursor-pointer rounded-full p-1 hover:bg-neutral-100"
            >
              <NextImage src={CloseIcon} alt="" width={24} height={24} />
            </button>
          </div>

          <p className="shrink-0 font-secondary text-size-300 leading-line-height-body-3 text-foreground">
            {t('cookieBanner.preferencesDescription')}
          </p>

          <div className="flex min-h-0 flex-1 flex-col divide-y divide-neutral-200 overflow-y-auto lg:flex-none lg:overflow-visible">
            <CookieCategoryRow
              title={t('cookieBanner.categoryNecessaryTitle')}
              description={t('cookieBanner.categoryNecessaryDescription')}
              disabled
            />
            <CookieCategoryRow
              title={t('cookieBanner.categoryAnalyticsTitle')}
              description={t('cookieBanner.categoryAnalyticsDescription')}
              checked={draftConsent.analytics}
              onChange={(checked) => setDraftConsent((prev) => ({ ...prev, analytics: checked }))}
            />
            <CookieCategoryRow
              title={t('cookieBanner.categoryFunctionalTitle')}
              description={t('cookieBanner.categoryFunctionalDescription')}
              checked={draftConsent.functional}
              onChange={(checked) => setDraftConsent((prev) => ({ ...prev, functional: checked }))}
            />
          </div>
        </div>
      </div>

      <div
        className={cn(
          'flex shrink-0 flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8',
          isManagingPreferences && 'border-t border-neutral-200',
        )}
      >
        <div className={cn('flex items-start gap-3', isManagingPreferences && 'hidden lg:flex')}>
          <NextImage src={CookieIcon} alt="" width={24} height={24} className="mt-1 shrink-0" />

          <div className="flex flex-col gap-2">
            <h2 className="font-primary text-size-400 font-heavy leading-line-height-heading-6 text-foreground">
              {t('cookieBanner.title')}
            </h2>
            <p className="font-secondary text-size-300 leading-line-height-body-3 text-foreground">
              {t('cookieBanner.message')}
            </p>
            <div className="flex flex-row">
              <p className="font-secondary text-size-300 leading-line-height-body-3 text-foreground pr-1">
                {t('cookieBanner.policyText')}
              </p>
              <Link href="/cookie-settings" variant="inline" className="self-start px-0 py-0">
                {t('cookieBanner.policyLink')}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:shrink-0 lg:flex-row lg:items-center lg:pl-8">
          {isManagingPreferences ? (
            <Button
              ref={managePreferencesButtonRef}
              variant="secondary-primary"
              size="sm"
              shape="rounded"
              onClick={handleSavePreferences}
            >
              {t('cookieBanner.savePreferences')}
            </Button>
          ) : (
            <Button
              ref={managePreferencesButtonRef}
              variant="secondary-primary"
              size="sm"
              shape="rounded"
              onClick={() => setIsManagingPreferences(true)}
            >
              {t('cookieBanner.managePreferences')}
            </Button>
          )}
          <Button variant="primary-primary" size="sm" shape="rounded" onClick={handleDeclineAll}>
            {t('cookieBanner.declineAll')}
          </Button>
          <Button variant="primary-primary" size="sm" shape="rounded" onClick={handleAcceptAll}>
            {t('cookieBanner.acceptAll')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
