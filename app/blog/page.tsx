import type { Metadata } from "next";
import BlogContent from "@/src/components/BlogContent";

export const metadata: Metadata = {
  title: "Blog - Escritas da Alma | Rogério Viana",
  description:
    "Reflexões sobre a existência, o sentir e o processo de tornar-se quem se é.",
};

export default function BlogPage() {
  return <BlogContent />;
}
