import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Marquee from '../animations/Marquee';
import Section from '../Section';
import HighLight from '../ui/HighLight';
import TestimonialCard from '../ui/TestimonialCard';

const testimonials = [
  {
    name: 'Alex Rivera',
    role: 'CTO at InnovateTech',
    img: 'https://randomuser.me/api/portraits/men/91.jpg',
    description: (
      <p>
        The AI-driven analytics from #QuantumInsights have revolutionized our
        product development cycle.
        <HighLight>
          Insights are now more accurate and faster than ever.
        </HighLight>{' '}
        A game-changer for tech companies.
      </p>
    ),
  },
  {
    name: 'Samantha Lee',
    role: 'Marketing Director at NextGen Solutions',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    description: (
      <p>
        Implementing #AIStream&apos;s customer prediction model has drastically
        improved our targeting strategy.
        <HighLight>Seeing a 50% increase in conversion rates!</HighLight> Highly
        recommend their solutions.
      </p>
    ),
  },
  {
    name: 'Raj Patel',
    role: 'Founder & CEO at StartUp Grid',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    description: (
      <p>
        As a startup, we need to move fast and stay ahead. #CodeAI&apos;s
        automated coding assistant helps us do just that.
        <HighLight>Our development speed has doubled.</HighLight> Essential tool
        for any startup.
      </p>
    ),
  },
  {
    name: 'Emily Chen',
    role: 'Product Manager at Digital Wave',
    img: 'https://randomuser.me/api/portraits/women/83.jpg',
    description: (
      <p>
        #VoiceGen&apos;s AI-driven voice synthesis has made creating global
        products a breeze.
        <HighLight>Localization is now seamless and efficient.</HighLight> A
        must-have for global product teams.
      </p>
    ),
  },
  {
    name: 'Michael Brown',
    role: 'Data Scientist at FinTech Innovations',
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
    description: (
      <p>
        Leveraging #DataCrunch&apos;s AI for our financial models has given us
        an edge in predictive accuracy.
        <HighLight>
          Our investment strategies are now powered by real-time data analytics.
        </HighLight>{' '}
        Transformative for the finance industry.
      </p>
    ),
  },
  {
    name: 'Linda Wu',
    role: 'VP of Operations at LogiChain Solutions',
    img: 'https://randomuser.me/api/portraits/women/5.jpg',
    description: (
      <p>
        #LogiTech&apos;s supply chain optimization tools have drastically
        reduced our operational costs.
        <HighLight>
          Efficiency and accuracy in logistics have never been better.
        </HighLight>{' '}
      </p>
    ),
  },
  {
    name: 'Carlos Gomez',
    role: 'Head of R&D at EcoInnovate',
    img: 'https://randomuser.me/api/portraits/men/14.jpg',
    description: (
      <p>
        By integrating #GreenTech&apos;s sustainable energy solutions,
        we&apos;ve seen a significant reduction in carbon footprint.
        <HighLight>
          Leading the way in eco-friendly business practices.
        </HighLight>{' '}
        Pioneering change in the industry.
      </p>
    ),
  },
  {
    name: 'Aisha Khan',
    role: 'Chief Marketing Officer at Fashion Forward',
    img: 'https://randomuser.me/api/portraits/women/56.jpg',
    description: (
      <p>
        #TrendSetter&apos;s market analysis AI has transformed how we approach
        fashion trends.
        <HighLight>
          Our campaigns are now data-driven with higher customer engagement.
        </HighLight>{' '}
        Revolutionizing fashion marketing.
      </p>
    ),
  },
  {
    name: 'Tom Chen',
    role: 'Director of IT at HealthTech Solutions',
    img: 'https://randomuser.me/api/portraits/men/18.jpg',
    description: (
      <p>
        Implementing #MediCareAI in our patient care systems has improved
        patient outcomes significantly.
        <HighLight>
          Technology and healthcare working hand in hand for better health.
        </HighLight>{' '}
        A milestone in medical technology.
      </p>
    ),
  },
  {
    name: 'Sofia Patel',
    role: 'CEO at EduTech Innovations',
    img: 'https://randomuser.me/api/portraits/women/73.jpg',
    description: (
      <p>
        #LearnSmart&apos;s AI-driven personalized learning plans have doubled
        student performance metrics.
        <HighLight>
          Education tailored to every learner&apos;s needs.
        </HighLight>{' '}
        Transforming the educational landscape.
      </p>
    ),
  },
  {
    name: 'Jake Morrison',
    role: 'CTO at SecureNet Tech',
    img: 'https://randomuser.me/api/portraits/men/25.jpg',
    description: (
      <p>
        With #CyberShield&apos;s AI-powered security systems, our data
        protection levels are unmatched.
        <HighLight>Ensuring safety and trust in digital spaces.</HighLight>{' '}
        Redefining cybersecurity standards.
      </p>
    ),
  },
  {
    name: 'Nadia Ali',
    role: 'Product Manager at Creative Solutions',
    img: 'https://randomuser.me/api/portraits/women/78.jpg',
    description: (
      <p>
        #DesignPro&apos;s AI has streamlined our creative process, enhancing
        productivity and innovation.
        <HighLight>Bringing creativity and technology together.</HighLight> A
        game-changer for creative industries.
      </p>
    ),
  },
  {
    name: 'Omar Farooq',
    role: 'Founder at Startup Hub',
    img: 'https://randomuser.me/api/portraits/men/54.jpg',
    description: (
      <p>
        #VentureAI&apos;s insights into startup ecosystems have been invaluable
        for our growth and funding strategies.
        <HighLight>Empowering startups with data-driven decisions.</HighLight> A
        catalyst for startup success.
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <Section
      title="Testimonials"
      subtitle="What our customers are saying"
      className="max-w-8xl"
    >
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, index) => (
              <Marquee
                key={index}
                vertical
                className={cn({
                  '[animation-duration:60s]': index === 1,
                  '[animation-duration:30s]': index === 2,
                  '[animation-duration:70s]': index === 3,
                })}
              >
                {testimonials
                  .slice(index * 3, (index + 1) * 3)
                  .map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: Math.random() * 0.8,
                        duration: 1.2,
                      }}
                    >
                      <TestimonialCard {...card} />
                    </motion.div>
                  ))}
              </Marquee>
            ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-linear-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-linear-to-b from-background from-20%"></div>
      </div>
    </Section>
  );
}
