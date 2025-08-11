import SectionWrapper from '@/components/layout/section-wrapper/SectionWrapper';
import Avatar from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Rocket } from 'lucide-react';

/* Test card with avatar*/
const initials = (name: string) =>
  name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();

const users = ['Ana Pérez', 'Luis García', 'Marta Ruiz', 'Pablo Díaz', 'Sofía León'];

const AvatarsNode = (
  <div className="flex -space-x-3.5" aria-label="Participantes">
    {users.map((name, idx) => (
      <div key={idx} role="img" aria-label={name}>
        <Avatar
          type="initials"
          size="sm"
          initials={initials(name)}
          className="w-7 h-7 text-[12px] ring-2 ring-white"
        />
      </div>
    ))}
  </div>
);


const HeroSection = () => {
  return (
    <SectionWrapper id="hero" className="gap-20 grid min-h-[716px] text-black mt-10 p- ">
      <h2>Hero Section</h2>
      <div className='flex flex-row gap-3'>
        <Card
          type='nonClickable'
          title='Este'
          description='Este texto es simulado para probar el elemento'
          color='lightPurple'
          radius='sm'
        />
        <Card
          type='nonClickableWithIconAndCorner'
          corner="tl"
          icon={Rocket}
          title='Lorem'
          description='Ipsum'
          color='white' />
      </div>
      <Card
          type="nonClickableWithAvatarAndCorner"
          corner="tl"
          color="white"
          title="1+"
          description="Lorem ipsum"
          avatars={AvatarsNode}
        />
    </SectionWrapper>
  )
}

export default HeroSection
