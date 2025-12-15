import LauraImg from "@/assets/images/avatars/avatar_lauraGracia.webp"
import MartaImg from "@/assets/images/avatars/avatar_martaV.webp"
import { Avatar } from "@/components/ui/Avatar"
import { Review } from "@/components/ui/carousel/CarouselReview"
import { Carousel } from "@/components/ui/carousel/index"
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper"

const testimonials = [
  {
    id: 1,
    quote: `"Before SheHub, I felt stuck between theory and the real world. Working on an actual product with a supportive team and a mentor who challenged me changed everything. I finally feel ready — and confident — to apply for jobs in tech."`,
    name: "Marta V., Collaborator",
    role: "UX/UI Designer",
    image: MartaImg,
    alt: "Avatar of Marta"
  },
  {
    id: 2,
    quote: `"Being a mentor at SheHub has been one of the most fulfilling experiences in my career. Watching contributors grow, gain confidence, and land their first tech roles — while I honed my own leadership skills — reminded me why I love this industry."`,
    name: "Laura Gracia, Mentor",
    role: "Project Manager / Team Lead",
    image: LauraImg,
    alt: "Avatar of Laura"
  }
]

const testimonialsData: Review[] = [
  {
    id: '1',
    image: MartaImg,
    name: 'Marta V., Collaborator',
    quote: '"Before SheHub, I felt stuck between theory and the real world. Working on an actual product with a supportive team and a mentor who challenged me changed everything. I finally feel ready — and confident — to apply for jobs in tech."',
    role: 'UX/UI Designer',
    alt: 'Avatar of a female collaborator, UX/UI designer'
  },
  {
    id: '2',
    image: LauraImg,
    name: 'Laura Gracia, Mentor',
    quote:
      '"Being a mentor at SheHub has been one of the most fulfilling experiences in my career. Watching contributors grow, gain confidence, and land their first tech roles — while I honed my own leadership skills — reminded me why I love this industry."',
    role: 'Project Manager / Team Lead',
    alt: 'Avatar of female mentor, project manager'
  },
  {
    id: '3',
    image: MartaImg,
    name: 'Julia, Collaborator',
    quote: '"Before SheHub, I felt stuck between theory and the real world. Working on an actual product with a supportive team and a mentor who challenged me changed everything. I finally feel ready — and confident — to apply for jobs in tech."',
    role: 'UX/UI Designer',
    alt: 'Avatar of a female collaborator, UX/UI designer'
  },
  {
    id: '4',
    image: LauraImg,
    name: 'María Gracia, Mentor',
    quote:
      '"Being a mentor at SheHub has been one of the most fulfilling experiences in my career. Watching contributors grow, gain confidence, and land their first tech roles — while I honed my own leadership skills — reminded me why I love this industry."',
    role: 'Project Manager / Team Lead',
    alt: 'Avatar of female mentor, project manager'
  }
]

const mockCardsDataSimple = [
    {
      id: "mentor-1",
      name: "Elena Castro",
      role: "Tech Lead",
      photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=296&h=296&fit=crop&crop=face",
      socials: {
        linkedin: "https://linkedin.com/in/elena-castro"
      }
    },
    {
      id: "mentor-2", 
      name: "Patricia Ruiz",
      role: "Senior Developer",
      photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=296&h=296&fit=crop&crop=face",
      socials: {
        linkedin: "https://linkedin.com/in/patricia-ruiz",
        x: "https://x.com/patricia_dev"
      }
    },
    {
      id: "mentor-3",
      name: "Andrea Vega",
      role: "Product Designer",
      photoUrl: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=296&h=296&fit=crop&crop=face",
      socials: {
        dribbble: "https://dribbble.com/andrea_design"
      }
    },
    {
      id: "4",
      name: "Carmen López",
      role: "Data Scientist",
      photoUrl: "",
      socials: {
        linkedin: "https://linkedin.com/in/carmen-lopez",
        x: "https://x.com/carmen_data"
      }
    },
    {
      id: "5",
      name: "Isabel Fernández",
      role: "Backend Developer",
      photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=296&h=296&fit=crop&crop=face",
      socials: {
        linkedin: "https://linkedin.com/in/isabel-fernandez",
        x: "https://x.com/isabel_backend",
        dribbble: "https://dribbble.com/isabel_dev"
      }
    },
    {
      id: "6",
      name: "Sofía Jiménez",
      role: "UI/UX Designer",
      photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=296&h=296&fit=crop&crop=face",
      socials: {
        linkedin: "https://linkedin.com/in/sofia-jimenez"
      }
    },
    {
      id: "7",
      name: "Carmen López",
      role: "Data Scientist",
      socials: {
        linkedin: "https://linkedin.com/in/carmen-lopez",
        x: "https://x.com/carmen_data"
      }
    },
    {
      id: "8",
      name: "Isabel Fernández",
      role: "Backend Developer",
      photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=296&h=296&fit=crop&crop=face",
      socials: {
        linkedin: "https://linkedin.com/in/isabel-fernandez",
        x: "https://x.com/isabel_backend",
        dribbble: "https://dribbble.com/isabel_dev"
      }
    },
    {
      id: "9",
      name: "Sofía Jiménez",
      role: "UI/UX Designer",
      photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=296&h=296&fit=crop&crop=face",
      socials: {
        linkedin: "https://linkedin.com/in/sofia-jimenez"
      }
    }
  ];

export const Testimonials = () => {
  return (
    <SectionWrapper
      id="testimonials"
      className="
        bg-background-light
        flex flex-col
        items-center
        py-24
        gap-16
        md:gap-24
      "
    >
      {/* HEADLINE */}
      <header
        className="
          flex flex-col 
          items-center 
          text-center 
          mx-auto
          px-4 
          max-w-3xl 
          mb-10
          md:mb-20
        "
      >
        <div className="flex flex-col leading-tight">
          <h2 className="font-primary font-heavy text-size-800 md:text-size-900 tracking-tight text-black">
            Because when you build with us,
          </h2>

          <h2
            className="
              font-primary 
              font-heavy 
              text-size-800
              md:text-size-900 
              bg-clip-text 
              text-transparent 
              tracking-tight
            "
            style={{ backgroundImage: "var(--color-gradient-brand)" }}
          >
            you build for change
          </h2>
        </div>

        <p className="mt-4 font-secondary text-size-400 md:text-size-500 text-black leading-line-height-body-1">
          At SheHub we empower women who want to build their career in tech
        </p>
      </header>

      <div className="mb-40">
        <Carousel variant="review" items={testimonialsData}/>
      </div>
    
      <div className="mb-40">      
        <Carousel variant="cards" items={mockCardsDataSimple}/>
      </div>
      

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-14
          md:gap-20
          w-full
          max-w-6xl
          px-4
        "
      >
        {testimonials.map((t) => (
          <article
            key={t.id}
            className="
              flex
              flex-col
              items-center
              text-center
              gap-8
              max-w-[548px]
              mx-auto
            "
          >
            <p className="font-secondary text-black text-size-500 leading-relaxed">
              {t.quote}
            </p>

            <Avatar
              type="image"
              size="xl"
              imageUrl={t.image}
              alt={t.alt}
            />

            <div className="flex flex-col gap-1">
              <p className="font-primary font-bold text-black text-size-500">
                {t.name}
              </p>
              <p className="font-secondary text-black text-size-400">
                {t.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Testimonials
