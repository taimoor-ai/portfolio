import LogoLoop from './LogoLoop';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiGraphql, SiPrisma, SiPostgresql,
  SiMongodb, SiRedis, SiDocker, SiVercel,
  SiGithub, SiFirebase, SiSupabase, SiStripe,
  SiFigma, SiVite, SiVitest, SiStorybook,
  SiExpress, SiCplusplus, SiAndroid
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact />,       title: "React",        href: "https://react.dev" },
  { node: <SiNextdotjs />,   title: "Next.js",      href: "https://nextjs.org" },
  { node: <SiTypescript />,  title: "TypeScript",   href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />,   title: "Node.js",      href: "https://nodejs.org" },
  { node: <SiExpress />,     title: "Express",      href: "https://expressjs.com" },
  { node: <SiCplusplus />,   title: "C++",          href: "https://isocpp.org" },
  { node: <SiAndroid />,     title: "Android",      href: "https://developer.android.com" },
  { node: <SiGraphql />,     title: "GraphQL",      href: "https://graphql.org" },
  { node: <SiPrisma />,      title: "Prisma",       href: "https://www.prisma.io" },
  { node: <SiPostgresql />,  title: "PostgreSQL",   href: "https://www.postgresql.org" },
  { node: <SiMongodb />,     title: "MongoDB",      href: "https://www.mongodb.com" },
  { node: <SiRedis />,       title: "Redis",        href: "https://redis.io" },
  { node: <SiDocker />,      title: "Docker",       href: "https://www.docker.com" },
  { node: <SiVercel />,      title: "Vercel",       href: "https://vercel.com" },
  { node: <SiGithub />,      title: "GitHub",       href: "https://github.com" },
  { node: <SiFirebase />,    title: "Firebase",     href: "https://firebase.google.com" },
  { node: <SiSupabase />,    title: "Supabase",     href: "https://supabase.com" },
  { node: <SiStripe />,      title: "Stripe",       href: "https://stripe.com" },
  { node: <SiFigma />,       title: "Figma",        href: "https://figma.com" },
  { node: <SiVite />,        title: "Vite",         href: "https://vitejs.dev" },
  { node: <SiVitest />,      title: "Vitest",       href: "https://vitest.dev" },
  { node: <SiStorybook />,   title: "Storybook",    href: "https://storybook.js.org" },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // each child animates 80ms apart
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function TechMarquee() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-10  bg-[#0a0a0f]  px-0 sm:px-16 relative overflow-hidden"
      style={{ height: '50px' }}
    >
      {/* Staggered wrapper around each logo */}
      <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
        {techLogos.map((logo, index) => (
          <motion.div key={index} variants={itemVariants}>
            {/* LogoLoop renders all at once, so we animate the container instead */}
          </motion.div>
        ))}
      </div>

      {/* The actual marquee animates in as one block after stagger completes */}
      <motion.div
        variants={itemVariants}
        className='px-0 sm:px-16'
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={40}
          gap={60}
          hoverSpeed={0}
          fadeIn
          useCustomRender={false}
        />
      </motion.div>
    </motion.div>
  );
}