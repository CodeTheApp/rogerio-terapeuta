import Hero from "../components/Hero";
import About from "../components/About";
import Specialties from "../components/Specialties";
import Quote from "../components/Quote";
import Testimonials from "../components/Testimonials";
import BlogPreview from "../components/BlogPreview";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Specialties />
      <Quote />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </>
  );
}
