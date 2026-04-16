import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Specialties from "@/src/components/Specialties";
import Quote from "@/src/components/Quote";
import Testimonials from "@/src/components/Testimonials";
import BlogPreview from "@/src/components/BlogPreview";
import CTA from "@/src/components/CTA";

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
