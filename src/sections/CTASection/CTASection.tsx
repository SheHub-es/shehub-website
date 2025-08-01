// import SectionWrapper from '@/components/layout/SectionWrapper/SectionWrapper'

// export const CTASection = () => {
//   return (
//     <SectionWrapper className='gap-12 grid min-h-[376px]'>
//         <div>CTASection</div>
//     </SectionWrapper>
//   )
// }

// export default CTASection



import SectionWrapper from "@/components/layout/SectionWrapper/SectionWrapper";
import { Link } from "@/components/ui/link";

const CTASection = () => {
  return (
    <SectionWrapper className="grid gap-10 py-16 px-6 bg-white text-black text-center">
      <h2 className="text-3xl md:text-4xl font-bold">CTA Link</h2>

      <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
        {/* Inline Link */}
        <p className="text-black">
          For more details,{" "}
          <Link href="#contact" variant="inline">
            get in touch
          </Link>.
        </p>

        {/* Standalone Link */}
        <Link
          href="mailto:xyz@shehub.com"
          variant="standalone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>xyz@shehub.com</span>
          <span aria-hidden="true">✉️</span>
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default CTASection;
