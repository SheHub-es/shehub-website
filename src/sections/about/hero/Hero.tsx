'use client';

import HeroImage from '@/assets/images/photos/photo_heroAbout.webp';
import { useTranslation } from '@/hooks/useTranslation';
import HeroLayout from '@/sections/shared/heroLayout/HeroLayout';

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
      mainImage={HeroImage.src}
      alt={t('about.hero.alt')}
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
