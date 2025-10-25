import AboutSection from '@/components/partials/AboutSection';
import BlogSection from '@/components/partials/BlogSection';
import ContactSection from '@/components/partials/ContactSection';
import ExperienceSection from '@/components/partials/ExperienceSection';
import HeroSection from '@/components/partials/HeroSection';
import RecentWorkSection from '@/components/partials/RecentWorkSection';
import ServiceSection from '@/components/partials/ServiceSection';
import TechnologiesSection from '@/components/partials/TechnologiesSection';
import TestimonialSection from '@/components/partials/TestimonialSection';
import AppLayout from '@/layouts/AppLayout';
import Clock from '@/components/shared/Clock';
import SEO from '@/components/shared/SEO';
// import { api } from '@/lib/api';
import type { GetServerSideProps, NextPage } from 'next';

// type Props = {
//   experiences: ;
// }
const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="SARO SEREYVICHEA - Full Stack Developer | Vichea Portfolio"
        description="Meet SARO SEREYVICHEA (Vichea), a talented Full Stack Developer and ICT student from Cambodia. Specializing in Next.js, React, and Laravel development. View portfolio, projects, and contact for web development services."
        keywords="Vichea, Serey Vichea, sereyvichea, SARO SEREYVICHEA, Full Stack Developer, Web Developer, Next.js, React, Laravel, Cambodia Developer, ICT Student, Portfolio, Web Development Services"
        canonicalUrl="/"
      />
      <AppLayout title="Home">
        <HeroSection />
        <section className="container pt-20 pb-10">
          <AboutSection />
        </section>
        <section className="container pt-10">
          <TechnologiesSection />
        </section>
        <section className="container py-16">
          <ExperienceSection />
        </section>
        <section className="container py-16">
          <ServiceSection />
        </section>
        <section className="container py-16">
          <RecentWorkSection />
        </section>
        <Clock />
      </AppLayout>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({}) => {
//   const getExperiences = api.get('/experiences').then((res) => res.data.data);
//   const getEducations = api.get('/educations').then((res) => res.data.data);
//   const profile = api.get('/profile').then((res) => res.data.data);
//   const result = await Promise.all([getExperiences, getEducations, profile]);
//   return {
//     props: {
//       experiences: result[0],
//       educations: result[1],
//       profile: result[2],
//     },
//   };
// };
export default Home;
