import type { Metadata } from "next";
import { posts } from "@/src/data/posts";
import PostContent from "@/src/components/PostContent";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Artigo não encontrado" };

  return {
    title: `${post.title} | Rogério Viana`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return <PostContent post={post} />;
}
