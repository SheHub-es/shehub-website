// import SectionWrapper from '@/components/layout/SectionWrapper/SectionWrapper'

// export const HeroSection = () => {
//   return (
//     <SectionWrapper className='gap-20 grid min-h-[962px] bg-gray-100'>
//         <div>HeroSection</div>
//     </SectionWrapper>
//   )
// }

// export default HeroSection



import SectionWrapper from "@/components/layout/SectionWrapper/SectionWrapper";
import { Button } from "@/components/ui/button";


const variants = [
  "primary-primary",
  "secondary-primary",
  "primary-secondary",
  "secondary-secondary",
  "primary-tertiary",
  "secondary-tertiary",
  "disabled",
  "gradient",
] as const;

const sizes = ["sm", "lg"] as const;
const shapes = ["square", "rounded"] as const;

type Variant = typeof variants[number];
type Size = typeof sizes[number];
type Shape = typeof shapes[number];

export const HeroSection = () => {
  return (
    <SectionWrapper className="gap-20 grid min-h-[962px] bg-white py-10 px-6">
      <div>
        <h2 className="text-3xl text-gray-950 font-bold mb-8">Button Showcase</h2>

        {variants.map((variant: Variant) => (
          <div key={variant} className="mb-10">
            <h3 className="text-xl font-semibold mb-4 capitalize">{variant}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sizes.map((size: Size) =>
                shapes.map((shape: Shape) => (
                  <Button
                    key={`${variant}-${size}-${shape}`}
                    variant={variant}
                    size={size}
                    shape={shape}
                  >
                    {`${size} / ${shape}`}
                  </Button>
                ))
              )}
            </div>

          </div>
        ))}

        <div className="mt-20">
          <h3 className="text-xl font-bold mb-4 text-black">Figma Example</h3>
          <Button variant="gradient" size="sm" shape="rounded" className="w-[11.25rem] font-bold text-white">
            Join the waitlist
          </Button>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default HeroSection