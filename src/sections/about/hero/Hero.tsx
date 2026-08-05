'use client';

import { useTranslation } from '@/hooks/useTranslation';
import HeroLayout from '@/sections/shared/heroLayout/HeroLayout';
import ImageSection from '@/sections/about/hero/components/ImageSection';

export default function AboutHero() {
  const { t } = useTranslation();

  return (
    <HeroLayout
      id="about"
      reverse
      eyebrow={t('about.hero.eyebrow')}
      title={
        <>
          {t('about.hero.titleBefore')}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'var(--color-gradient-brand)' }}
          >
            {t('about.hero.titleHighlight')}
          </span>
        </>
      }
      paragraph={t('about.hero.paragraph')}
      imageComponent={<ImageSection />}
      buttons={[
        {
          text: t('about.hero.joinButton'),
          variant: 'primary-primary',
          href: '/join',
        },
      ]}
    />
  );
}
